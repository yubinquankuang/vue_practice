<template>
  <div class="dataGrid" :class="isSingle?'singleDg':''">
    <el-table
      :show-header="showHeader"
      :row-style="rowStyle"
      class="elTable"
      :height="pagination?'calc(100% - 35px)':'100%'"
      ref="multipleTable"
      :data="allData"
      tooltip-effect="dark"
      v-loading="loading"
      element-loading-text="加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.5)"
      :highlight-current-row="highlightCurrentRow"
      :cell-class-name="cellClass"
      show-overflow-tooltip
      border
      @select="handleSelect"
      @selection-change="handleCheckChange"
      @current-change="handleSelChange"
      @row-dblclick="rowDbclick"
      @row-click="rowClick"
      @cell-dblclick="cellDbclick"
    >
      <el-table-column type="selection" width="35" v-if="isSelection"></el-table-column>
      <template v-for="(column,index) in columns">
        <el-table-column

          v-if="column.filters&&column.filters.length"
          :filters="column.filters"
          :filter-method="filterHandler"
          :align="column.align?column.align:'center'"
          v-bind="column"
          :key="index"
        ></el-table-column>
        <el-table-column
          v-else-if="column.type=='button'"
          :align="column.align?column.align:'center'"
          v-bind="column"
          :key="index"
        >
          <template slot-scope="scope">
            <el-button
              v-for="item in column.scope"
              @click.stop="item.handle(scope.row)"
              :type="item.type?item.type:'text'"
              size="small"
              :key="item.label"
            >{{item.label}}</el-button>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="column.type=='select'"
          :align="column.align?column.align:'center'"
          v-bind="column"
          :key="index"
        >
          <template slot-scope="scope">
            <el-select class="select" readonly v-model="scope.row[column.prop]">
              <el-option
                v-for="item in column.scope"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="column.type=='multi'"
          :align="column.align?column.align:'center'"
          :label="column.label"
          :key="index"
        >
          <template v-for="(childColumn,index) in column.columns">
            <el-table-column v-bind="childColumn" :key="index"></el-table-column>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :align="column.align?column.align:'center'"
          v-bind="column"
          :key="index"
        ></el-table-column>
      </template>
    </el-table>
    <el-pagination
      class="pagination"
      v-if="pagination"
      ref="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      :current-page="pageIndex"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :layout="layout"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
import {request} from '@/axios/mAxios'

export default {
  data () {
    return {
      tableData: [],
      pageSize: this.initPageSize,
      pageIndex: 1,
      multipleSelection: [],
      total: 0,
      loading: false
    }
  },

  props: {
    pagination: {
      default: true
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    'highlight-current-row': {
      default: true
    },
    isShowLoading: {
      default: true
    },
    showHeader: {
      default: true
    },
    columns: Array,
    url: String,
    params: Object,
    clickRowCheck: {
      default: true
    },
    isSelection: {
      default: false
    },
    isSingle: {
      default: false
    },
    selLimit: Number,
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    initPageSize: {
      default: 20
    },
    timer: null,
    cellClass: Function,
    rowStyle: Function,
    handlerFunction: Function,
    pageSizes: {
      default () {
        return [10, 20, 30]
      }
    }
  },
  computed: {
    allData () {
      // return this.tableData.concat(this.data)
      var val = this.pageIndex
      var start = (val - 1) * this.pageSize
      var end = val * this.pageSize
      if (end > this.total) {
        end = this.total
      }
      return this.tableData.slice(start, end)
    }
  },
  watch: {
    params () {
      this.pageIndex = 1
      this.getData()
    },
    columns () {
      this.$forceUpdate()
    }
  },
  methods: {
    filterHandler (value, row, column) {
      const property = column['property']
      if (value === 'all') {
        return true
      } else {
        return row[property].indexOf(value) !== -1
      }
    },
    setSelections (selections) {
      if (selections) {
        selections.forEach(row => {
          this.data.forEach(dataRow => {
            if (row.id === dataRow.id) {
              this.$refs.multipleTable.toggleRowSelection(dataRow, true)
            }
          })
        })
        this.multipleSelection = selections
      } else {
        this.$refs.multipleTable.clearSelection()
        this.multipleSelection = []
      }
    },
    toggleSelection (row, isCheck) {
      this.$refs.multipleTable.toggleRowSelection(row, isCheck)
    },
    clearSelection () {
      this.$refs.multipleTable.clearSelection()
    },
    singleSelrqRow (row) {
      this.clearSelection()
      this.toggleSelection(row)
    },
    limitSelection () {
      while (this.multipleSelection.length > this.selLimit) {
        let row = this.multipleSelection.shift()
        this.$refs.multipleTable.toggleRowSelection(row)
      }
    },
    handleSelect (selection, row) {
      if (this.isSingle) {
        this.singleSelrqRow(row)
      }
      this.$emit('mtCheckChange', row)
    },
    setCurrentRow (row) {
      this.$refs.multipleTable.setCurrentRow(row)
    },
    handleCheckChange (multipleSelection) {
      this.multipleSelection = multipleSelection
      let isSelection = false
      if (this.multipleSelection.length !== 0) {
        isSelection = true
      }
      if (this.selLimit) {
        this.limitSelection()
      }
      this.$emit('checkChange', isSelection, this.multipleSelection)
    },
    handleSelChange (currentRow) {
      this.$emit('selChange', currentRow)
    },
    handleSizeChange: function (size) {
      this.pageSize = size
      this.pageIndex = 1
      this.getData()
    },
    handleCurrentChange: function (index) {
      this.pageIndex = index
      // this.getData()
    },
    cellDbclick (row, column, cell) {
      this.$emit('cellDbclick', row, column, cell)
    },
    rowClick (row) {
      this.$emit('rowItemClick', row)
      if (this.clickRowCheck && this.isSelection) {
        this.singleSelrqRow(row)
      }
      this.$emit('rowClick', row)
    },
    rowDbclick (row) {
      this.$emit('rowDbclick', row)
    },
    setError () {
      this.$message({
        type: 'error',
        message: '获取数据失败'
      })
    },
    getData (initIndexPage) {
      if (this.isShowLoading) {
        this.loading = true
      }
      if (this.pagination) {
        this.params.page = this.pageIndex
        this.params.rows = this.pageSize
      }
      if (initIndexPage) {
        this.params.page = this.pageIndex = 1
      }

      request({
        'url': this.url,
        'params': {
          'p': 1,
          'page_size': 6867
        }
      })
        .then(Response => {
          if (Response) {
            this.loading = false
            var data = Response.data
            this.tableData = this.handlerFunction
              ? this.handlerFunction(data.results)
              : data.results
            this.total = this.tableData.length
            this.$emit('setData', this.tableData)
          } else {
            this.setError()
          }
        })
        .catch(() => {
          this.loading = false
          this.setError()
        })
    }
  }
}
</script>
<style lang="less">
.dataGrid {
  position: relative;
      box-shadow: 0 0 15px #2d8cf0;
      border-radius: 5px;
  .singleDg {
    th {
      .el-checkbox {
        display: none;
      }
    }
  }

  .normal {
    div{
      color: #80ff7f;
    }
  }
  .el-button:hover {
    font-weight: bold;
    text-decoration: underline;
  }
  .el-table--mini td,
  .el-table--mini th {
    padding: 3px 0;
  }
  .pagination {
    padding-left: 20px;
    bottom: 0;
    height: 35px;
    padding-top: 3px;
    width: 100%;
  }
}
</style>
