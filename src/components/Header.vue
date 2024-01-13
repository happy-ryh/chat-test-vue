<template>
<!--  结构-->
  <div id="HeaderBok">
    <el-menu  class="el-menu-demo" mode="horizontal" :router="router_v" text-color="#01212A" active-text-color="#e6a23c" style="background-color: rgba(0,0,0,0);">
      <el-menu-item style="background: 0 0!important;"><el-image
          style="width: 46px; height: 46px"
          :src="'favicon.ico'"></el-image></el-menu-item>
      <el-menu-item style="color: #01212A;background: 0 0!important;">消息演示项目</el-menu-item>
      <el-menu-item index="view">展示页面</el-menu-item>
      <el-menu-item index="user">用户中心</el-menu-item>
      <el-menu-item index="news">消息管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// 函数等逻辑
export default {
name: "header",
  data() {
    return {
      username:'',
      router_v:true
    };
  },
  methods: {
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    errorHandler() {
      return true
    },
    logout(){
      console.log('账户已注销')
      this.isLogin=false;
    }
  },
  mounted() {

  }
}
</script>

<style scoped>


</style>