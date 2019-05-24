<template>
    <div class="error-page">
        <div class="error" v-if="error.statusCode==404">
            <img src="@/assets/img/error.png" alt="">
            <div class="error-desc">
                <h1>Whoops!</h1>
                <p>Looks like you've made a wrong turn</p>
                <p>抱歉您访问的页面不存在！</p>
            </div>
        </div>
        <div class="error" v-if="error.statusCode==500">
            <img src="@/assets/img/error.png" alt="">
            <div class="error-desc">
                <h1>Whoops!</h1>
                <p>Looks like you've made a wrong turn</p>
                <p>服务器内部出错，请联系管理员！</p>
            </div>
        </div>
        <div class="link">
            <nuxt-link to="/">BACK HOME</nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    props:["error"],
    layout:"default"
}
</script>
<style lang="less" scoped>
    .error-page{
        .center(100);
        text-align: center;
        .error{
            img{
                max-width:400px;
            }
            .error-desc{
                font-size: 14px;
                padding-top: 15px;
            }
        }
        .link{
            text-align: center;
            font-size: 13px;
            padding-top: 40px;
            a{
                height:35px;
                line-height:35px;
                display: inline-block;
                background: @primary-color;
                color: #fff;
                padding: 0 @space-width * 2;
                border-radius: 50px;
                .shadow();
            }
        }
    }
    @media screen and (max-width: @mobile-width) {
        .error-page{
            width: 100%;
            .error{
                img{
                    width:100%;
                }
                .error-desc{
                    font-size: 14px;
                    padding-top: 15px;
                }
            }
            .link{
                text-align: center;
                font-size: 13px;
                padding-top: 40px;
                a{
                    height:35px;
                    line-height:35px;
                    display: inline-block;
                    background: @primary-color;
                    color: #fff;
                    padding: 0 @space-width * 2;
                    border-radius: 50px;
                    .shadow();
                }
            }
        }
    }
</style>

