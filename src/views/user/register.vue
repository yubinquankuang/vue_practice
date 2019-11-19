<template>
    <div>
        <h2>注 册</h2>
        <el-form ref="loginForm" :model = "registData" :rules="rule" label-width="80px">
            <el-row>
                <el-col :span="5" :offset="9">
                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="registData.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="5" :offset="9">
                    <el-form-item label="密码" prop="pwd">
                        <el-input v-model="registData.pwd"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="5" :offset="9">
                    <el-form-item label="重复密码" prop="checkPwd">
                        <el-input v-model="registData.checkPwd"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="5" :offset="9">
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="registData.email"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="5" :offset="9">
                    <el-form-item label="手机号" prop="phone">
                        <el-input v-model="registData.phone"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="80">
                <el-form-item>
                    <el-col :span="2" :offset="9">
                        <el-button type="primary" @click="reLogin" >完成注册</el-button>
                    </el-col>
                    <el-col :span="1">
                        <el-button @click="cancel">取 消</el-button>
                    </el-col>
                </el-form-item>
            </el-row>
        </el-form>
    </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      name: 'register',
      registData: {
        name: 'register',
        pwd: 'register',
        checkPwd: '',
        phone: '',
        email: ''
      }
    }
  },
  methods: {
    reLogin () {
      this.$store.commit({
        type: 'setCurrentUser',
        username: this.registData.name,
        pwd: this.registData.pwd,
        isActive: false
      })
      this.$router.push({name: 'login'})
    },
    cancel () {
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped>

</style>
