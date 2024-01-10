
//该文件为项目的入口文件
//引入vue 注意存在缺失模板编译器的残缺vue
import Vue from 'vue'
//引入APP组件
import App from './App.vue'
//引入ElementUI组件库
import ElementUI from 'element-ui';
//引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css'
//引入路由
import VueRouter from 'vue-router'
import router from "@/router";
//引入插件
// import plugins from "@/plugins";
Vue.use(ElementUI)
Vue.use(VueRouter)

//关闭vue生产提示
Vue.config.productionTip = false
//应用插件
// Vue.use(plugins)
//创建vm实例对象
new Vue({
  //.$mount('#app')也可以写成el:‘#app’
  //因为引入的vue缺失模板编译器的残缺，使用render解析模板
  render: h => h(App),
  router:router,
  beforeCreate() {
    Vue.prototype.$bus=this;
  }
}).$mount('#app')
