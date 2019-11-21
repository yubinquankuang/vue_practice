<template>
    <div>
        <h2>线路</h2>
        <data-table
                :f-record-data="recordValue"
                :f-model-data="modelValue"
                :f-table-style="tableStyle"
                @removeRecord="removeRecord"
                @correctModel="correctModel"
        >

        </data-table>
    </div>
</template>

<script>
import dataTable from './pop/dataTable'

export default {
  name: 'baseLine',
  data () {
    return {
      allValue: [],
      tableStyle: [{
        prop: 'name',
        label: '姓名',
        width: 100
      }, {
        prop: 'address',
        label: '地址',
        width: 200
      }],
      recordValue: [{
        name: '测试用例0',
        address: '住址是鞥0'
      }, {
        name: '测试用例1',
        address: '住址是鞥1'
      }, {
        name: '测试用例2',
        address: '住址是鞥2'
      }],
      modelValue: [{
        name: '模型有力1',
        address: '住址是鞥0'
      }, {
        name: '模型有力2',
        address: '住址是鞥1'
      }, {
        name: '模型有力3',
        address: '住址是鞥2'
      }]
    }
  },
  computed: {

  },
  methods: {
    getTableData (id) {
      this.$ajax
        .get('/faultall/systemManager/user/getUsersByDept', {params: {deptId: id}})
        .then(res => {
          if (res.state === 'ok') {
            this.recordValue = res.data.record
            this.modelValue = res.data.model
          } else {
            this.$warning(res.msg)
          }
        })
        .catch(err => {
          this.$message(err)
        })
    },
    removeRecord (index, row) {
      this.recordValue.splice(index, 1)
    },
    correctModel (index, row) {
      this.modelValue.splice(index, 1)
    }

  },
  components: {
    dataTable
  }
}
</script>

<style scoped>

</style>
