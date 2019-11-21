<template>
    <div class="modelVerify">
        <el-tabs type="border-card" value="modelVerify" @tab-click="tabClick">
            <el-tab-pane label="变电站" name="TransStation">
                <trans-station v-if="showTransStation"></trans-station>
            </el-tab-pane>
            <el-tab-pane label="变压器" name="Transformer">
                <transformer v-if="showTransformer"></transformer>
            </el-tab-pane>
            <el-tab-pane label="录波器" name="RecordWave">
                <record-wave v-if="showRecordWave"></record-wave>
            </el-tab-pane>
            <el-tab-pane label="线路" name="BaseLine">
                <base-line v-if="showBaseLine"></base-line>
            </el-tab-pane>
            <el-tab-pane label="母线" name="MoLine">
                <mo-line v-if="showMoLine"></mo-line>
            </el-tab-pane>
            <el-tab-pane label="保护" name="Protection">
                <protection v-if="showProtection"></protection>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import baseLine from './tep/baseLine'
import moLine from './tep/moLine'
import protection from './tep/protection'
import transformer from './tep/transformer'
import transStation from './tep/transStation'
import recordWave from './tep/recordWave'

export default {
  name: 'modelVerify',
  data () {
    return {
      showTransStation: true,
      showTransformer: false,
      showRecordWave: false,
      showBaseLine: false,
      showMoLine: false,
      showProtection: false
    }
  },
  methods: {
    // 防止一次加载多个组件
    tabClick (tab) {
      console.log(tab.name, `show${tab.name}`)
      if (!this[`show${tab.name}`]) {
        this[`show${tab.name}`] = true
      }
    }
  },
  components: {
    moLine,
    baseLine,
    protection,
    transStation,
    transformer,
    recordWave
  }
}
</script>

<style scoped>

</style>
