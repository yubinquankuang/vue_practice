<template>
    <div id = "head">
        <el-row>
            <el-col :span="6">
                <p class="title">游戏攻略收录站</p>
            </el-col>
            <el-col :span="4" :offset="12">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#096D75" text-color="white"  active-text-color="#ffd04b">
                    <el-menu-item index="strategy">攻略</el-menu-item>
                    <el-menu-item index="modifier">修改器</el-menu-item>
                    <el-menu-item index="secretBook">秘籍</el-menu-item>
                    <el-menu-item index="faultIndex">故障</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="1" v-if="this.$store.state.user.isLogin">
                <h5>{{$store.state.user.username}}</h5>
            </el-col>
            <el-col :span="1" v-else><h5>游客/请登录</h5></el-col>
            <el-col :span="1" v-if="this.$store.state.user.isLogin">
                <h5 @click="logout">注销</h5>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
      activeIndex: 'faultIndex'
    }
  },
  methods: {
    logout () {
      this.$store.commit({
        type: 'logout'
      })
      this.$router.replace({name: 'login'})
    },
    handleSelect (key, keyPath) {
      this.$router.replace({name: key})
    }
  }
}
</script>

<style scoped>
    #head {
        height:80px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
    }
    .title {
        font-size: 25px;
    }
    #head{
        background: #096D75;
        color: white;
        border-bottom: 5px solid lightgray;
    }

</style>
