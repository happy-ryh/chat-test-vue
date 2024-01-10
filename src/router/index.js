//专门用于创建路由器

//引入VueRouter
import VueRouter from 'vue-router';
//引入组件
import Login from "@/pages/Login/Login";
import History from "@/pages/History/History";
import Register from "@/pages/Register/Register";
import Home from "@/pages/Home/Home";
//创建路由器
 const router = new VueRouter({
    routes:[
        {
            name:Login,
            path:'/Login',
            component:Login
        },
        {
            name:History,
            path:'/History',
            component:History
        },
        {
            name:Register,
            path:'/Register',
            component:Register
        },
        {
            name:Home,
            path:'/Home',
            component:Home
        },
    ]
})
router.beforeEach((to,from,next)=>{
    console.log(to,from);
    next();
})

export default router
