<template>
  <el-dialog class="putDialog" :title="dialogTitle" :visible.sync="addDialogVisible" center :width="width+'px'" :top="top">
    <slot :item="item" :isAdd="isAdd"></slot>
    <div v-if="!isAdd&&changeList.length>1" style="padding-left:20px;">
      <el-slider v-model="selIndex" @change="stepChange" :max="changeList.length-1" show-stops>
      </el-slider>
    </div>
    <!-- <div style="text-align:center;margin-bottom:0;" v-if="!isAdd&&changeList.length>1">
      <el-button type="primary" :disabled="selIndex==0" @click="preSelItem" size="small" round>上一个</el-button>
      <el-button type="primary" :disabled="selIndex==changeList.length-1" @click="nextSelItem" size="small" round style="margin-left: 50px;">下一个</el-button>
    </div> -->
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" v-if="!isAdd&&changeList.length>1" :disabled="selIndex==0" @click="preSelItem" size="small" round>上一个</el-button>
      <el-button type="primary" v-if="!isAdd&&changeList.length>1" :disabled="selIndex==changeList.length-1" @click="nextSelItem" size="small" round style="margin-left: 10px;">下一个</el-button>
        <el-button @click="addDialogVisible = false" size="small" style="margin-left:20px;">取 消</el-button>
      <el-button type="primary" @click="submitForm" size="small" >确 qd 定</el-button>

    </div>
  </el-dialog>
</template>
<script>
export default {
  data () {
    return {
      item: {},
      dialogTitle: '',
      isAdd: false,
      selIndex: 0,
      addDialogVisible: false
    }
  },
  props: {
    width: {
      type: Number,
      default: 450
    },
    title: String,
    top: {
      type: String,
      default: '30vh'
    },
    changeList: {
      default () {
        return []
      }
    }
  },
  watch: {
    changeList (val) {
      this.item = this.changeList[0]
    }
  },
  methods: {
    stepChange () {
      this.item = this.changeList[this.selIndex]
    },
    showAddDialog () {
      this.dialogTitle = '新增' + this.title
      this.isAdd = true
      this.addDialogVisible = true
    },
    showPutDialog () {
      this.dialogTitle = '修改' + this.title
      this.isAdd = false
      this.selIndex = 0
      this.addDialogVisible = true
    },
    submitForm () {
      new Promise((resolve, reject) => {
        this.$emit('save', this.isAdd, resolve, reject)
      }).then(status => {
        let type = ''
        let message = this.dialogTitle
        if (status === 0) {
          type = 'success'
          message += '成功'
        } else {
          type = 'error'
          message += ''
        }
        this.$message({
          type: type,
          message: message
        })
        this.addDialogVisible = false
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    preSelItem () {
      this.selIndex--
      this.item = this.changeList[this.selIndex]
    },
    nextSelItem () {
      this.selIndex++
      this.item = this.changeList[this.selIndex]
    }
  }
}
</script>
<style lang="less">
.putDialog {
  .el-dialog__body {
    margin: 10px 20px 0;
  }
}
</style>
