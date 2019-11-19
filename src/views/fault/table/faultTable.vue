<template>
    <div>
        <el-table
                :data="tableData"
                width="100%"
        >
            <el-table-column
                    prop="id"
                    label="ID"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    width="200">
            </el-table-column>

            <el-table-column
                    prop="phase"
                    label="phase"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="report"
                    label="report"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="area"
                    label="area"
                    width="60">
            </el-table-column>
            <el-table-column
                    prop="dat"
                    label="dat"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="cfg"
                    label="cfg"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="filepath"
                    label="filepath">
            </el-table-column>
        </el-table>
        <el-row>
            <el-col :span="4" :offset="9">
                <el-button @click="changePage(currentPage-1)">back</el-button>
                <el-button @click="changePage(currentPage+1)">next</el-button>
            </el-col>
            <el-col :span="1">
                <el-input v-model="turnPage" ></el-input>
            </el-col>
            <el-col :span="1">
                <el-button @click="changePage(turnPage)">跳转</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'faultTable',
  props: [
    'faultData'
  ],
  data () {
    return {
      currentPage: 1,
      turnPage: 1
    }
  },
  computed: {
    tableData () {
      return this.faultData
    }
  },
  methods: {
    // 上下翻页
    changePage (num) {
      this.currentPage = num
      if (this.currentPage < 2) {
        this.currentPage = 1
      }
      this.$emit('changeTableData', this.currentPage)
    }
  }
}
</script>

<style scoped>

</style>
