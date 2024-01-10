<template>
<!--  结构-->
  <div id="HeaderBok">

  </div>
</template>

<script>
// 函数等逻辑
export default {
name: "header",
  data() {
    return {
      // activeIndex: '1',
      // activeIndex2: '1'
      isLogin:false,
      username:''
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
  this.$bus.$on('ChangeLoginType',(data)=>{
    this.isLogin=data;
  })
  }
}
</script>

<style scoped>


</style>