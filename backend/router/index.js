const router=require("koa-router")()


router.get("/",async(ctx)=>{
    ctx.body="connect success"
})


module.exports=router
