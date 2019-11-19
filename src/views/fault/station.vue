<template>
    <div>
        <h3>station</h3>
        <el-button @click="getData">请求数据</el-button>
        <el-table
        :data="tableData"
        >
            <el-table-column
                    prop="id"
                    label="ID"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="name"
                    width="100">
            </el-table-column>

            <el-table-column
                    prop="area"
                    label="area"
                    width="60">
            </el-table-column>
            <el-table-column
                    prop="voltage"
                    label="voltage"
                    width="150">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getStation} from 'components/network/faultIndex'

export default {
  name: 'station',
  components: {NavBar},
  props: {
    NavBar
  },
  data () {
    return {
      tableData: [
        {
          id: 1,
          name: 'ds',
          voltage: 220,
          area: 23
        }
      ]
    }
  },
  methods: {
    getData () {
      getStation().then(res => {
        this.tableData = res.data
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>

</style>
