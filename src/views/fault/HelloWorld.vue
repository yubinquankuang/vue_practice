<template>
  <div>
    <h2>{{$store.state.name}}</h2>
    <el-popover
      placement="right"
      width="400"
      trigger="click">
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期"></el-table-column>
        <el-table-column width="100" property="name" label="姓名"></el-table-column>
        <el-table-column width="300" property="address" label="地址"></el-table-column>
      </el-table>
      <el-button slot="reference">click 激活</el-button>
      <el-button @click="showPdf">打开PDF</el-button>
    </el-popover>
    <div>
      <h3 v-once>{{$store.state.counter}},counter !!!</h3>
      <h3>{{$store.getters.powerCounter}}</h3>
      <h3>{{$store.state.student}}</h3>
      <h3>{{localCount}}</h3>
    </div>
    <el-button @click="changeData(1)">增加</el-button>
    <el-button @click="changeData(-1)">减少</el-button>
    <el-button @click="addCounter(5)">增加参数</el-button>
    <el-button @click="addAddress('振华路55号')">添加地址</el-button>
    <el-button @click="changeLocalData">更改本地数据</el-button>
  </div>
</template>

<script>
import {INCREMENT} from '@/store/mutationsTypes'

export default {
  name: 'HelloWorld',
  data () {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      localCount: 255
    }
  },
  methods: {
    showPdf () {
      window.open('./static/1031.pdf')
    },
    changeData (num) {
      if (num > 0) {
        this.$store.commit(INCREMENT)
      } else {
        this.$store.commit('decrement')
      }
    },
    changeLocalData () {
      this.localCount = 0
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
          // reject('error')
        }, 1000)
      }).then(() => {
        console.log(this)
        this.localCount = 366
      }, err => {
        console.log(err)
      })
    },
    // addCounter (num) {
    //   this.$store.commit('addCounter', num)
    // },
    addCounter (num) {
      // this.$store.commit({
      //   type: 'addCounter',
      //   num
      // })
      this.$store.dispatch('aStudent', 12).then(res => {
        console.log(res)
      })
    },
    addAddress (address) {
      this.$store.commit({
        type: 'addAddress',
        address
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
