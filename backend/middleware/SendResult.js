const errorCode = require("../config/errorCode.json")
module.exports=function(){
    return async (ctx,next)=>{
        ctx.state.sendResult=(data,status="200")=>{
            ctx.body={
                code:errorCode[status].code,
                msg:errorCode[status].msg,
                data
            }
        }
        await next();//运行完毕，交给下一个中间件
    }
}