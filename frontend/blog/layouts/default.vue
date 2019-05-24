<template>
    <div class="default-layout">
        <mainHeader/>
        <div class="default-main-container">
            <nuxt />
        </div>
        <backTop :bottom="80">
            <div class="back-top" title="返回顶部">
                <i class="iconfont icon-xiaohuojian"></i>
            </div>
        </backTop>
        <mainFooter class="m-hide"/>
    </div>
</template>
<script>
import mainHeader from "@/components/header"
import mainFooter from "@/components/footer"

import backTop from "@/components/backTop"
export default {
    components:{
        mainHeader,
        mainFooter,
        backTop
    }
}
</script>

<style lang="less" scoped>
    .default-layout{
        .default-main-container{
            // padding-top: @space-width;
        }
        .back-top{
            transition: all 2s;
            transform-style: preserve-3d;
            &:hover{
                transform:rotateY(360deg)  scale(1.2);
            }
            .iconfont{
                color: @primary-color;
                font-size: 30px;
            }
        }
    }
    @media (max-width:@container-width - 1px){
        .default-layout{
            padding-bottom: @header-height;
        }
    }
</style>
