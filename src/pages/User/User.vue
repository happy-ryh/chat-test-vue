<template>
  <div class="">
    用户中心页面
  </div>

</template>

<script>
import axios from "axios";

export default {
name: "login",
  data() {
    return {
      input: '',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  methods:{
    loginon(){
      axios.get('http://localhost:8080/project/user/info').then(
          response =>{
            console.log(response.data);
            this.$bus.$emit('ChangeLoginType',true)
          },
          error =>{
            console.log(error.message);
          }
      )
    }
  }
}
</script>

<style scoped>
.loginBok{
  width: 30%;
  height: 50%;
  margin: 10% 0 0 35%;
  background-color: #ffffff;
  border-radius: 15px;
  /*opacity: 0.8;*/
}
.text-info{
  text-align: center;
  font-size: 24px;
  color: #e6a23c;
}
.text-info-2{
  text-align: center;
  font-size: 18px;
  color: #e6a23c;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  /*background: #99a9bf;*/
}
.bg-purple {
  /*background: #d3dce6;*/
}
.bg-purple-light {
  /*background: #e5e9f2;*/
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  /*background-color: #f9fafc;*/
}
</style>