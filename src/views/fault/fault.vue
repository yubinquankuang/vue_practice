<template>
    <div>
        <h3>fault</h3>
        <fault-table
        :fault-data="tableData"
        @changeTableData="changePage"
        >
        </fault-table>
    </div>

</template>

<script>
import faultTable from './table/faultTable'
import pageTable from '@/components/content/pageTable'

import {getFault} from '@/components/network/faultIndex'

export default {
  name: 'fault',
  components: {
    faultTable,
    pageTable
  },
  data () {
    return {
      tableData: [],
      currentPage: 1
    }
  },
  methods: {
    toUrl (row) {
      // window.location.href = row.path
      window.open(row.path)
    },
    getData () {
      getFault({p: this.currentPage}).then(res => {
        this.tableData = res.data.results
      })
    },
    // 获取要跳转到的页数
    changePage (num) {
      this.currentPage = num
      this.getData()
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>

</style>
