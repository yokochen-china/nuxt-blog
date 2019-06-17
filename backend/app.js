const Koa = require("koa")
const koaBodyParser = require("koa-bodyparser")
const router = require("./router")
const SendResult = require("./middleware/SendResult")
const config = require("./config/config.json")
const serverport = config[config.env].serverport

const app = new Koa()


app.use(async (ctx, next)=> {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200; 
    } else {
        await next();
    }
})

app.use(koaBodyParser())

app.use(SendResult())



app
.use(router.routes())
.use(router.allowedMethods())

app.listen(serverport,()=>{
    console.log(`App is running at port http://localhost:${serverport}`)
})