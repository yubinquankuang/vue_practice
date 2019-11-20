<template>
    <div class="reports">
        <h3>station</h3>
        <el-button @click="getData">请求数据</el-button>
        <scroll class="content">
            <el-table
                    :data="tableData"
                    width="100%">
                <el-table-column
                        v-for="item in tableColumns"
                        :key="item.id"
                        :prop="item.prop"
                        :width="item.width"
                        :label="item.label">
                </el-table-column>
            </el-table>
        </scroll>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import pageTable from '@/components/content/pageTable'
import Scroll from '@/components/common/scroll/scroll'

import {getReports} from 'components/network/faultIndex'

export default {
  name: 'reports',
  components: {
    NavBar,
    Scroll,
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
          prop: 'device_name',
          label: 'device_name',
          width: '180px'
        },
        {
          prop: 'rec_state',
          label: 'rec_state',
          width: '100px'
        },
        {
          prop: 'action_time',
          label: 'action_time',
          width: '100px'
        }
      ]
    }
  },
  methods: {
    getData () {
      getReports().then(res => {
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
    .reports {
        position: relative;
        top:180px;
        height:800px;
    }
    .content {
        /*height: 600px;*/
        height:600px;
        overflow:hidden;
        position: absolute;
        top:150px;
        bottom:50px;
        left:0px;
        rigth:0px;
    }
</style>
