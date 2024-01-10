module.export={
    //关闭es6校验
    lintOnSave:false,
    //开启代理服务器
    //方式1
    devServer:{
        proxy:'http://localhost:8088'
    }
    //方式2
    // devServer:{
    //     proxy:{
    //         '/api':{
    //             target:
    //         }
    //
    //     }
    // }
}