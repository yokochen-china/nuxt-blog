<template>
    <div class="side-footer">
        <ul>
            <li>
                <i class="iconfont icon-shezhi"></i>设置
            </li>
            <li @click="sigout">
                <i class="iconfont icon-zhuxiao-xianxing"></i>注销
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    components:{
        
    },
    data(){
        return {
            lockScreen:false
        }
    },
    methods:{
        sigout(){
            this.$router.push("/")
        }
    }
}
</script>
<style lang="less" scoped>
    .side-footer{
       position: absolute;
       bottom: 0;
       left: 0;
       right: 0;
       height: @side-footer-height;
       line-height: @side-footer-height;
       .shadow();
       text-align: center;
       li{
           display: inline-block;
           font-size: 13px;
           color: @text-color-label;
           user-select: none;
           cursor: pointer;
           &::after{
               content: "|";
               color: @border-color;
               display: inline-block;
               padding: 0 @space-width;
           }
           &:last-child{
                &::after{
                    color: @border-color;
                    display: inline-block;
                    padding: 0 @space-width;
                    display: none;
                }
           }
           .iconfont{
               font-size: 13px;
           }
           &:hover{
               color: @primary-color;
           }
       }
    }
</style>
