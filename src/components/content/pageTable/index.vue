<template>
    <div>
        <div>
            <el-table
            :data="currentData">
                <el-table-column
                    v-for="item in tableColumns"
                    :label="item.label"
                    :prop="item.prop"
                    :width="item.width"
                    :key="item.id">
                </el-table-column>
            </el-table>
        </div>
        <div>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="pageSizes"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import pPage from './pPage'
import pTable from './pTable'

export default {
  name: 'index',
  components: {
    pTable,
    pPage
  },
  props: [
    'tableColumns',
    'tableData',
    'page'
  ],
  data () {
    return {
      totalPage: 1000,
      currentPage: 0,
      pageSize: 100,
      pageSizes: [100, 200, 300, 400]
    }
  },
  computed: {
    total () {
      return this.tableData.length
    },
    currentData: function () {
      var val = this.currentPage
      var start = (val - 1) * this.pageSize
      var end = (val) * this.pageSize
      if (end > this.total) {
        end = this.total
      }
      return this.tableData.slice(start, end)
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
    }
  },
  mounted () {
    this.handleCurrentChange(1)
  }
}
</script>

<style scoped>

</style>
