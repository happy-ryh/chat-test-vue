//专门用于创建路由器

//引入VueRouter
import VueRouter from 'vue-router';
//引入组件
import user from "../pages/User/User";
import news from "../pages/News/News";
import view from "../pages/View/View";
//创建路由器
 const router = new VueRouter({
    routes:[
        {
            name:view,
            path:'/view',
            component:view
        },
        {
            name:news,
            path:'/news',
            component:news
        },
        {
            name:user,
            path:'/User',
            component:user
        }
    ]
})
router.beforeEach((to,from,next)=>{
    console.log(to,from);
    next();
})

export default router
