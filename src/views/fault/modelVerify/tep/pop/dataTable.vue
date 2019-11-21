<template>
<div class="mrTable">
    <el-row>
        <el-col :span="11" :offset="1"><h3>录波分析</h3></el-col>
        <el-col :span="11" :offset="1"><h3>DMF模型</h3></el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="12">
            <el-table
                    :data="fRecordData"
                    style = "width: 100%"
                    border
                    @row-click="handleClick"
            >
                <el-table-column
                        v-for="el in this.fTableStyle"
                        :key="el.label"
                        :prop="el.prop"
                        :label="el.label"
                        :min-width="el.width"
                >
                </el-table-column>

                <el-table-column
                        fixed="right"
                        label="操作"
                        width="50">
                    <template slot-scope="scope">
                        <el-button @click="removeDiff(scope.$index,scope.row)" type="text" size="small">移除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>

        <el-col :span="12">
            <el-table
                    :data="fModelData"
                    style = "width: 100%"
                    border
                    @row-click="handleClick"
            >
                <el-table-column
                        v-for="el in this.fTableStyle"
                        :key="el.label"
                        :prop="el.prop"
                        :label="el.label"
                        :min-width="el.width"
                >
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="50">
                    <template slot-scope="scope">
                        <el-button @click="correctDiff(scope.$index,scope.row)" type="text" size="small">校正</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
  name: 'dataTable',
  props: ['fTableStyle', 'fRecordData', 'fModelData'],
  data () {
    return {
      // recordValue: this.fRecordData,
      // modelValue: this.fModelData,
      // tableStyle: this.fTableStyle
    }
  },
  computed: {

  },
  methods: {
    handleClick (row) {
      console.log(row)
    },
    removeDiff (index, row) {
      this.$emit('removeRecord', index, row)
    },
    correctDiff (index, row) {
      this.$emit('correctModel', index, row)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.mrTable {
    height: 65vh;
}
</style>
