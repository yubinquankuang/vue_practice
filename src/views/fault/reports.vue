<template>
    <div class="reports">
        <h3>station</h3>
        <el-button @click="getData">请求数据</el-button>
        <scroll class="content" ref="scroll" :probe-type="3"
                @scroll="showBackTop"
                :pull-up-load="true"
                @pullingUp="loadMore">
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
        <el-button @click="backTop" v-show="isShowBackTop">返回顶部</el-button>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import pageTable from '@/components/content/pageTable'
import Scroll from '@/components/common/scroll/scroll'

import {getReports} from '@/components/network/faultIndex'

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
      ],
      isShowBackTop: false,
      currentPage: 0
    }
  },
  computed: {
  },
  methods: {
    getData () {
      this.currentPage += 1
      getReports({
        'p': this.currentPage
      }).then(res => {
        this.tableData.push(...res.data.results)
      })
    },
    loadMore () {
      this.getData()
      this.$refs.scroll.finishPullUp()
    },
    backTop () {
      // 返回scroll的顶部
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    showBackTop (position) {
      if (position.y < -500) {
        this.isShowBackTop = true
      } else {
        this.isShowBackTop = false
      }
    }
  },
  mounted () {
    this.tableData = []
    this.getData()
  }
}
</script>

<style scoped>
    .reports {
        height: 650px;
    }
    .content {
        /*height:600px;*/
        height: calc(100% - 150px);
        overflow:hidden;
    }
</style>
