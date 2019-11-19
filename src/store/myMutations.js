import Vue from 'vue'
import {INCREMENT} from '@/store/mutationsTypes'

export default {
  [INCREMENT] (state) {
    state.counter++
  },
  decrement (state) {
    state.counter--
  },
  addCounter (state, num) {
    // state.counter += num
    state.counter += num.num
  },
  addAddress (state, paylout) {
    Vue.set(state.student, 'address', paylout.address)
    Vue.delete(state.student, 'name')
  },
  setCurrentUser (state, paylout) {
    state.user.username = paylout.username
    state.user.pwd = paylout.pwd
    state.user.isLogin = paylout.isActive
  },
  logout (state, paylout) {
    state.user.username = 'admin'
    state.user.pwd = 'admin'
    state.user.isLogin = false
  }
}
