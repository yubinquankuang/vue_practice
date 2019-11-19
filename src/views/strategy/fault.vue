<template>
    <div>
        <h3>fault</h3>
        <el-table
                :data="tableData"
                height="700"
                border
                style="width: 100%">
            <el-table-column
                    prop="passtime"
                    label="日期"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="image"
                    label="图片"
                    width="250">
                <template slot-scope="scope">
                    <img :src="scope.row.image" :alt="scope.row.title">
                </template>
            </el-table-column>
            <el-table-column
                    prop="title"
                    label="标题"
                    width="450">
            </el-table-column>
            <el-table-column
                    prop="path"
                    label="地址"
                    width="200">
                <template slot-scope="scope">
                    <el-button @click="toUrl(scope.row)" type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {getFault} from '@/components/network/faultIndex'

export default {
  name: 'fault',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    toUrl (row) {
      // window.location.href = row.path
      window.open(row.path)
    }
  },
  mounted () {
    getFault().then(res => {
      this.tableData = res.data.result
    })
  }
}
</script>

<style scoped>

</style>
