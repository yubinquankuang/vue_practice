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
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  methods: {
    // 跳转到
    scrollTo (x = 0, y = 0, time = 0) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },

    // 下拉更新
    finishPullUp () {
      setTimeout(() => {
        this.scroll.finishPullUp()
      }, 2000)
    },

    // 刷新高度
    refresh () {
      this.scroll && this.scroll.refresh()
    }
  },
  mounted () {
    // 创建better scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true, // button一直可以点击，但像div之类的不可以点击
      probeType: this.probeType, // 实时监听滚动位置
      pullUpLoad: this.pullUpLoad // 上拉更新属性
    })

    // 监听滚动事件
    this.scroll.on('scroll', position => {
      // console.log(position)
      this.$emit('scroll', position)
    })

    // 监听上拉事件
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多')
      this.$emit('pullingUp')
    })
  }
}
</script>

<style scoped>

</style>
