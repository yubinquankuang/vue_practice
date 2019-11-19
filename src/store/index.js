import Vue from 'vue'
import Vuex from 'vuex'
import myMutations from './myMutations'
import myActions from './myActions'
import myGetters from './myGetters'
import userModel from './modules/userModel'
// 1.安装插件
Vue.use(Vuex)

// 全局状态
let state = {
  name: 'json',
  counter: 1,
  student: {
    name: 'suffer Smith'
  },
  username: 'admin',
  pwd: 'admin',
  isLogin: false
}

// 2.创建对象
const store = new Vuex.Store({
  state: state,
  mutations: myMutations,
  actions: myActions,
  getters: myGetters,
  modules: {
    user: userModel
  }

})

// 3.导出store对象
export default store
