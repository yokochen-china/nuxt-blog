<template>
    <div :class="['main-header',{'full':!value}]">
        
    </div>
</template>
<script>
import user from "./user"
export default {
    props:{
        value:{
            type:Boolean,
            default:false
        }
    },
    components:{
        user
    }
}
</script>

<style lang="less" scoped>
    .main-header{
        height: @header-height;
        padding:  @space-width;
        padding-top: 6px;
        position: fixed;
        right: 0;
        top: 0;
        left: @side-width;
        width: transparent;
        // border-top-left-radius: @space-width;
        display: flex;
        justify-content: flex-end;
        // border-bottom: 1px solid @shadow-color;
        // .shadow();
        transition: all .4s;
    }
    .full{
        left: 0;
    }
</style>
