<template>
    <div class="wrapper" ref="wrapper">
<!--        组件的使用方法将要滑动的内容放入组件中即可，注意在scroll组件设置固定高度-->
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'scroll',
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {

    })
  }
}
</script>

<style scoped>

</style>
