<template>
    <div>
        <h3>station</h3>
        <el-button @click="getData">请求数据</el-button>
        <page-table
                :table-data="tableData"
                :table-columns="tableColumns"
        >
        </page-table>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import pageTable from '@/components/content/pageTable'

import {getStation} from 'components/network/faultIndex'

export default {
  name: 'station',
  components: {
    NavBar,
    pageTable
  },
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
      ],
      tableColumns: [
        {
          prop: 'id',
          label: 'ID',
          width: '80px'
        },
        {
          prop: 'name',
          label: 'name',
          width: '180px'
        },
        {
          prop: 'area',
          label: 'area',
          width: '100px'
        },
        {
          prop: 'voltage',
          label: 'voltage',
          width: '100px'
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
