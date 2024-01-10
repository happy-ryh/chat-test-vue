export const hunhe ={
    //组件名称
    name:'Zhanshi',
    //方法
    methods:{
        //修饰符：<button @click.once="show"></button>
        //prevent:阻止默认事件
        //stop:阻止事件冒泡
        //once:事件只触发一次
        //capture:事件在捕获阶段触发
        //self:只有操作当前元素才触发
        //passive:事件立即执行无需等待回调
        //<button @keyup.enter="show"></button>
        //还可以加.enter等判断按键
        show(e){
            console.log(e);
        },
        updatasex(e){
            console.log(e);
        }
    },
    mounted() {
        //消息总线
        this.$bus.$on('',()=>{

        })
    },
    //数据
    data(){
        return{
            x:100,
            y:'11',
            sex:this.sex
        }
    },
    //外部数据插入,优先级高（如果需要改变可以在data中写）
    props:['sex','age'],
    //计算属性
    computed:{
      bbb:{
          //计算属性完整写法
          get(){
              return ''
          },
          set(){

          }
      },
        aaa(){
        //  计算aaa属性简写只有get
        }

    },
    //监视属性
    watch:{
        x:{
            immediate:true,//在初始化时调用一次
            // deep:true,深度监视
            //handler在x被修改时调用
            handler(newValue,oldValue){
                console.log(oldValue+" x被修改了 "+newValue);
            }
        },
        //简写
        y(newValue,oldValue){
            console.log(oldValue+" x被修改了 "+newValue);
        }

    }







}