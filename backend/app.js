// 导入基础配置
const CONFIG=require("./config/config")
// 导入koa框架 文档：https://www.npmjs.com/package/koa
const Koa=require("koa")
// 导入bodyparser 序列化post 数据 文档：https://www.npmjs.com/package/koa-bodyparser
const bodyparser=require("koa-bodyparser")
// 导入json 格式化并转换成二进制数据输出json数据 文档：https://www.npmjs.com/package/koa-json
const json=require("koa-json")
// 导入logger 打印日志中间件  文档：https://www.npmjs.com/package/koa-logger
const logger=require("koa-logger")
// 导入cors 跨域访问配置中间件 文档：https://www.npmjs.com/package/koa2-cors
const cors=require("koa2-cors")
// 导入路由 路由模块化
const router=require("./router")
// 实例化koa框架
const app=new Koa()
// 注入中间件
app
.use(bodyparser())
.use(bodyparser())
.use(json())
.use(logger())
.use(cors())
// 注入路由中间件
app
.use(router.routes())
.use(router.allowedMethods())

// 监听端口
app.listen(CONFIG.PORT,()=>{
	console.log(`App is running at http://localhost:${CONFIG.PORT}`)
})