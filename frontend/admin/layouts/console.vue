<template>
    <div class="default-layout">
        <BackTop :bottom="70">
            <div class="back-top">
                <i class="iconfont icon-huojianxianxing"></i>
            </div>
        </BackTop>
        <div class="aside-controll" @click="changeShowSide">
            <i class="iconfont icon-nav"></i>
        </div>
        <side v-model="showSide"/>
        <div :class="['main-container',{'show-side':showSide}]">
            <nuxt />
        </div>
    </div>
</template>
<script>
import side from "@/components/aside"
import mainHeader from "@/components/mainHeader"
export default {
    components:{
        side,
        mainHeader
    },
    data(){
        return {
            showSide:false
        }
    },
    watch:{
        $route(val){
            this.showSide=false
        }
    },
    methods:{
        changeShowSide(){
            this.showSide=!this.showSide
        }
    }
}
</script>
<style lang="less" scoped>

    .default-layout{
        display: flex;
        height: 100%;
        .back-top{
            background: #eee;
            width: 34px;
            line-height: 34px;
            text-align: center;
            padding: 0;
            border-radius: 50%;
            .iconfont{
                display: block;
                font-size: 24px;
                color: #fff;
                padding: 0;
                margin: 0;
            }
        }
        .aside-controll{
           display: none;
        }
        .main-container{
            background: #fff;
            flex: 1;
            transition: all .4s;
            padding: @space-width ;
            padding-top: 0;
            padding-bottom: 0;
            padding-left: @side-width + @space-width;
            overflow: hidden;
            padding-bottom: 50px;
        }
        .show-side{
            // padding-left: @side-width + @space-width;
            // border-top-left-radius: @space-width;
            // border-bottom-left-radius: @space-width;
        }
    }

    @media screen and (max-width: @mobile-width){
        .default-layout{
            .show-side{
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                padding-left: @space-width!important;
                padding-right: @space-width!important;
                // transform:translate(@side-width);
                // border-top-left-radius: @space-width;
                // border-bottom-left-radius: @space-width;
            }
            .main-container{
                padding-left: @space-width!important;
                padding-right: @space-width!important;
            }
            .aside-controll{
                display: block;
                position: fixed;
                width: 34px;
                height: 34px;
                text-align: center;
                line-height: 34px;
                z-index: 998;
                cursor: pointer;
                bottom: 30px;
                right: 30px;
                margin: auto;
                border-radius: 17px;
                background: @primary-color;
                .iconfont{
                    display: block;
                    font-size: 16px;
                    color: #fff;
                }
                &:hover{
                    .shadow();
                }
            }
        }
    }
</style>
