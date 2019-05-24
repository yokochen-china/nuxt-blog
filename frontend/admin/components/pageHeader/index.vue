<template>
    <h2 class="page-header">
        <slot>
            <nuxt-link :to="item.path" v-for="(item,index) in list" :key="index" v-text="item.title"></nuxt-link>
        </slot>
    </h2>
</template>
<script>
export default {
    props:{
        link:{
            type:Boolean,
            default:false
        },
        list:{
            type:Array,
            default(){
                return [
                    {
                        title:"控制台",
                        path:"/"
                    }
                ]
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .page-header{
        font-size: 16px;
        padding: @space-width 0;
        font-weight: 500;
        a{
            color: @text-color-label;
            display: inline-block;
            vertical-align: middle;
            &::after{
                content: "/";
                color: @border-color;
                padding: 0 @space-width / 2px;
                display: inline-block;
                vertical-align: middle;
            }
            &:last-child{
                &::after{
                    display:none;
                }
            }
            &:first-child{
                font-size: 14px;
            }
        }
    }
</style>
