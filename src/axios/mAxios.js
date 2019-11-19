import axios from 'axios'

// export function request (config, success, failure) {
//   // 创建实例
//   const instance = axios.create({
//     baseURL: 'https://api.apiopen.top/',
//     timeout: 5000
//   })
//   instance(config)
//     .then(res => {
//       console.log(res)
//       success(res)
//     }).catch(err => {
//       console.log(err)
//       failure(err)
//     })
// }

// export function request (config) {
//   // 创建实例
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'https://api.apiopen.top/',
//       timeout: 5000
//     })
//     instance(config)
//       .then(res => {
//         console.log(res)
//         resolve(res)
//       }).catch(err => {
//         console.log(err)
//         reject(err)
//       })
//   })
// }

export function request (config) {
  // 创建实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 5000
  })
  // 拦截器
  // axios.interceptors 全局
  instance.interceptors.request.use(res => {
    return res // 必须返回
  }, error => {
    console.log(error)
  })
  instance.interceptors.response.use(res => {
    console.log(res)
    return res
  }, error => {
    console.log(error)
  })

  return instance(config)
}
