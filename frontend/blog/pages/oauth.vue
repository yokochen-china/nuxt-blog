<template>
    <div>
        oauth
    </div>
</template>
<script>
import axios from "axios"
export default {
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        // const {code} = query
        // if(code){
        //     const res= await axios.post("http://192.168.0.246:8081/v1/site/oauth/github",{
        //         code
        //     })
        //     if(res.data.code==200){
        //         redirect("/")
        //     }else{
        //         error(500)
        //     }
        //     console.log(res)
        // }
    },
    async mounted(){
        const {code} = this.$route.query
        if(code){
            const res= await axios.post("http://192.168.0.246:8081/v1/user/login/github",{
                code
            })
            console.log(res)
        }
    }
}
</script>