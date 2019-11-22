<template>
    <div>
        <h3>直流故障展示</h3>
        <time-change></time-change>
        <el-row>
            <el-col :span="12">
                <data-grid
                        style="height:500px"
                        :columns="dgColumns"
                        :url="dgUrl"
                        :data="dgData"
                        :params="dgParams"
                ></data-grid>
            </el-col>
            <el-col :span="12">
                <data-grid-total
                        style="height:500px"
                        :columns="dgColumns"
                        :url="dgUrl"
                        :data="dgtData"
                        :params="dgtParams"
                ></data-grid-total>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import dataGrid from '@/components/common/mtable/dataGrid'
import dataGridTotal from '@/components/common/mtable/dataGridTotal'
import timeChange from '@/components/common/utils/timeTrans'

export default {
  name: 'faultPage',
  components: {
    dataGrid,
    timeChange,
    dataGridTotal
  },
  data () {
    return {
      dgColumns: [
        {
          label: '编号',
          prop: 'id',
          width: '75'
        },
        {
          label: '名称',
          prop: 'name',
          width: '150'
        },
        {
          label: '距离',
          prop: 'distance',
          width: '90'
        },
        {
          label: '文件地址',
          prop: 'filepath',
          Width: '100'
        },
        {
          label: '场站id',
          prop: 'station',
          Width: '500'
        },
        {
          label: '相别',
          prop: 'phase'
        }
      ],
      dgUrl: '/fault/device/',
      dgData: [],
      dgtData: [],
      dgParams: {},
      dgtParams: {}
    }
  },
  mounted () {
    this.dgParams = {}
    this.dgtParams = {}
  }
}
</script>

<style scoped>

</style>
