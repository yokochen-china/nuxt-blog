const Router = require("koa-router")

const router = new Router({
    prefix: '/v1'
})

router.use(async (ctx,next)=>{
    // todo 签名校验
    console.log("todo 签名校验")
    await next()
})

router.use(async (ctx,next)=>{
    // 公共参数统一处理
    ctx.query.page = ctx.query.page && (parseInt(ctx.query.page)-1>0 ? parseInt(ctx.query.page)-1 : 0) || 0
    ctx.query.limit = ctx.query.limit && parseInt(ctx.query.limit) || 10
    await next()
})

const User = require("./User")

router.use("/user",User.routes())

// 导出路由
module.exports=router