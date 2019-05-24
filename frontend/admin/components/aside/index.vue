<template>
    <div :class="['aside',{'show':value}] ">
        <brand/>
        <sideNav/>
        <sideFooter/>
    </div>
</template>
<script>
import brand from "./brand"
import sideNav from "./nav"
import sideFooter from "./sideFooter"
export default {
    props:{
        value:{
            type:Boolean,
            default:false
        }
    },
    components:{
        brand,
        sideNav,
        sideFooter
    }
}
</script>
<style lang="less" scoped>
    .aside{
        transition: all .4s;
        width: @side-width;
        height: 100%;
        position: relative;
        position: fixed;
        background: #fff;
        z-index: 1000;
        opacity: 1;
        .shadow();
    }
    

    @media screen and(max-width: @mobile-width){
        .aside{
            margin-left: -@side-width;
            opacity: 0;
        }
        // .hide{
        //     margin-left: -@side-width;
        // }
        .show{
            margin-left: 0;
            opacity: 1;
        }
    }
</style>
