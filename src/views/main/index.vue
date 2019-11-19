<template>
    <div>
        <Head></Head>
        <div id="content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import Head from './Head'
export default {
  name: 'index',
  components: {
    Head
  }
}
</script>

<style scoped>
    #content{
        padding-top: 90px;
    }
</style>
