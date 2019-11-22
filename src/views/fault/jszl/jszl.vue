<template>
    <div>
        <h3>江苏直流</h3>
        <div>
            <el-tabs type="border-card" @tab-click="tabClick" v-model="activeName">
                <el-tab-pane label="faultPage" name="FaultPage">
                    <fault-page v-if="showFaultPage"></fault-page>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import faultPage from './faultPage'

export default {
  name: 'jszl',
  components: {
    faultPage
  },
  data () {
    return {
      activeName: 'FaultPage',
      showFaultPage: false
    }
  },
  methods: {
    tabClick (tab) {
      if (!this[`show${tab.name}`]) {
        this[`show${tab.name}`] = true
      }
    }
  }
}
</script>

<style scoped>

</style>
