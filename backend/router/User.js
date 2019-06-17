const router = require("koa-router")()
const ctrls = require("../controllers")


router.post("/login/github",ctrls.UserController.githubLoign)

module.exports=router
