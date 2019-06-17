// 加载配置文件
const conf = require("../config/config.json")
const config = conf[conf.env].oauth2
const DB = require("../models")
const axios = require("axios")

const {makeJWT} = require("../utils/webToken")

module.exports=class CommentController{
    static async githubLoign(ctx){

        const {code} = ctx.request.body
        if(!code){
            ctx.state.sendResult({},"400")
            return
        }

        const  access_token_url =  "https://github.com/login/oauth/access_token"
        try{
            const {data} = await axios.post(access_token_url,{
                client_id:config.github.client_id,
                client_secret:config.github.client_secret,
                code
            })

            const res = data.split("&")[0].split("=")

            if(res[0]=="error"){
                ctx.state.sendResult({},"1002")
                return
            }

            const access_token = res[1]

            var url = `https://api.github.com/user?access_token=${access_token}&scope=user`
            
            const res2 = await axios.get(url)
            const userInfo= res2.data
            const user_github_id = userInfo.id

            const user = await DB.UserThirdLogin.findOne({
                where:{
                    third_id:user_github_id
                },
                attributes:[],
                include:{
                    model:DB.User,
                    attributes:["id","name","email","blog","github","avatar"],
                    as:"user"
                }
            })
            let payload={}
            // 该用户已经注册
            if(user){
                payload={
                    ...user.dataValues
                }
                const token = makeJWT(payload)
                ctx.state.sendResult({
                    token,
                    ...payload
                })
            }else{
                const userSchema = new DB.User({
                    name:userInfo.name,
                    email:userInfo.email,
                    blog:userInfo.blog,
                    github:userInfo.html_url,
                    avatar:userInfo.avatar_url,
                })

                await userSchema.save()

                const userThirdSchema = new DB.UserThirdLogin({
                    user_id:userSchema.dataValues.id,
                    third_id:user_github_id
                })

                await userThirdSchema.save()
                payload={
                    id:userSchema.dataValues.id,
                    name:userSchema.dataValues.name,
                    email:userSchema.dataValues.email,
                    blog:userSchema.dataValues.blog,
                    github:userSchema.dataValues.github,
                    avatar:userSchema.dataValues.avatar
                }

                const token = makeJWT(payload)
                ctx.state.sendResult({
                    token,
                    ...payload
                })
            }

        }catch(e){
            console.log(e)
            ctx.state.sendResult({},"110")
        }
    }
}

