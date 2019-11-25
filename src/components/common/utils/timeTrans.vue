<template>
    <div>
        <el-row>
            <el-col :span="5">
                <el-input v-model="dateTimeNum" label="时间戳"></el-input>
            </el-col>
            <el-col :span="2">
                <el-button @click="transToFormat">转换为标准时间</el-button>
            </el-col>
            <el-col :span="5">
                <el-input v-model="dateTime" label="标准时间"></el-input>
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
  name: 'timeTrans',
  data () {
    return {
      dateTime: '',
      dateTimeNum: 1553547600000
    }
  },
  methods: {
    transToFormat () {
      var date = new Date(this.dateTimeNum)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      this.dateTime = date.toLocaleString()
    }
  }
}
</script>

<style scoped>

</style>
