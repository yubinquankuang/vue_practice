<template>
    <div>
<!--        <div style = "background: aqua"></div>-->
        <el-tabs v-model="activeName" @tab-click="handleClick" class = tab-control>
            <el-tab-pane label="fault" name="fault">
                <fault></fault>
            </el-tab-pane>
            <el-tab-pane label="station" name="station">
                <station></station>
            </el-tab-pane>
            <el-tab-pane label="HelloWorld" name="HelloWorld">
                <hello-world></hello-world>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import fault from './fault'
import station from './station'
import HelloWorld from './HelloWorld'
export default {
  name: 'faultIndex',
  data () {
    return {
      activeName: 'station'
    }
  },
  methods: {
    handleClick (tab) {
      console.log(tab)
    }
  },
  components: {
    fault,
    station,
    HelloWorld
  }
}
</script>

<style scoped>
    .tab-control {
        position: sticky;
        top: 150px;
    }

</style>
