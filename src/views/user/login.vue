<template>
    <div>
        <h2>登录界面</h2>
        <el-form ref="loginForm" :model = "loginData" :rules="rule" label-width="80px">
            <el-row>
                <el-col :span="5" :offset="9">
                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="loginData.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="5" :offset="9">
                    <el-form-item label="密码" prop="pwd">
                        <el-input v-model="loginData.pwd"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="80">
                <el-form-item>
                    <el-col :span="1" :offset="10">
                        <el-button type="primary" @click="loginSubmit('loginForm')">登 陆</el-button>
                    </el-col>
                    <el-col :span="1">
                        <el-button @click="toRegister('loginForm')">注 册</el-button>
                    </el-col>
                </el-form-item>
            </el-row>
        </el-form>
    </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      loginData: {
        name: this.$store.state.user.username,
        pwd: this.$store.state.user.pwd
      },
      rule: {
        name: [
          {required: true, message: '请输入用户名', tirgger: 'blur'},
          {min: 3, max: 25, message: '长度在 3-25 个字符', trigger: 'blur'}
        ],
        pwd: [
          {required: true, message: '请输入密码', tirgger: 'blur'},
          {min: 3, max: 25, message: '长度在 3-25 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    loginSubmit (formName) {
      console.log('login', formName)
      this.$store.commit({
        type: 'setCurrentUser',
        username: this.loginData.name,
        pwd: this.loginData.pwd,
        isActive: true
      })

      this.$router.push({name: 'HelloWorld'})
    },
    toRegister () {
      console.log('register jump')
      this.$router.push({name: 'register'})
    }
  }
}
</script>

<style scoped>

</style>
