import * as types from './mutationsTypes'
// 提交mutation
function makeAction (type) {
  return ({ commit }, ...args) => commit(type, ...args)
}

export const setUser = makeAction(types.SETUSER)

export default{
  aStudent (context, num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit({
          type: 'addCounter',
          num
        })
        resolve('lkdsjfj')
      }, 1000)
    })
  }
}
