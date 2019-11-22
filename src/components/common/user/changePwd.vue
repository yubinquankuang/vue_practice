<template>
  <el-dialog title="修改密码" width="400px" top="25vh" append-to-body :visible.sync="visible" center>
    <el-form :model="form"  ref="ruleForm" :rules="rules" >
      <el-form-item label="原始密码：" :label-width="formLabelWidth" prop="oldPwd" v-if="type==0">
        <el-input type="password" v-model="form.oldPwd" autoComplete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" :label-width="formLabelWidth" prop="newPwd">
        <el-input type="password" v-model="form.newPwd" autoComplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" :label-width="formLabelWidth" prop="confirmPwd">
        <el-input type="password" v-model="form.confirmPwd" autoComplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" type="primary" @click="changePwd()">确 定</el-button>
      <el-button  size="small" @click="clearForm">清空</el-button>
      <el-button  size="small" @click="visible = false">取 消</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
      formLabelWidth: '100px',
      form: {
        oldPwd: '',
        newPwd: '',
        confirmPwd: ''
      },
      rules: {
        oldPwd: [
          {
            required: true,
            message: '请输入原始密码',
            trigger: 'blur'
          }
        ],
        newPwd: [
          {
            required: true,
            validator: (rule, value, callback) => {
              // let reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^\sA-Za-z0-9])\S{8,20}$/
              if (value === '') {
                callback(new Error('请输入新密码'))
              } else {
                if (this.form.newPwd !== '') {
                  this.$refs.ruleForm.validateField('confirmPwd')
                }
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        confirmPwd: [
          {
            required: true,
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.form.newPwd) {
                callback(new Error('两次输入密码不一致!'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  props: {
    type: {
      default: 0
    }
  },
  methods: {
    show () {
      this.visible = true
      this.$nextTick(this.clearForm)
    },
    clearForm () {
      this.form.oldPwd = ''
      this.form.newPwd = ''
      this.form.confirmPwd = ''
      this.$refs.ruleForm.resetFields()
    },
    changePwd () {
      this.$refs.ruleForm.validate((valid, formData) => {
        if (!valid && this.type === 1) {
          let formItems = Object.keys(formData)
          if (formItems.length === 1) {
            formItems.forEach(formItem => {
              if (formItem === 'oldPwd') {
                valid = true
              }
            })
          }
        }
        if (valid) {
          return new Promise((resolve, reject) => {
            this.$emit('save', this.form, resolve, reject)
          })
            .then(() => {
              this.visible = false
              this.$message({
                type: 'success',
                message: '修改成功'
              })
            })
            .catch(() => {
              this.$message({
                type: 'error',
                message: '修改失败'
              })
            })
        }
      })
    }
  }
}
</script>
<style lang="less">
</style>
