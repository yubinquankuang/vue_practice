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
