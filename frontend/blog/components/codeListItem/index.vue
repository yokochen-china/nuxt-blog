<template>
    <div class="fragment-item">
        <div class="fragment-like">
            <i class="iconfont icon-like"></i>
            <span>15</span>
        </div>
        <div class="fragment-name">
            <nuxt-link to="/p/1">多彩的console.log</nuxt-link>
        </div>
    </div>
</template>
<style lang="less" scoped>
.fragment-item{
    display: flex;
    margin-bottom: @space-width;
    padding: 15px;
    align-content: center;
    .shadow();
    .fragment-like{
        background: @border-color;
        width: 44px;
        line-height: 14px;
        text-align: center;
        border-radius: 4px;
        cursor: pointer;
        &:hover,&.like{
            background: #f6f6f6;
            .iconfont{
                color: @primary-color;
            }
        }
        .iconfont{
            width: 24px;
            height: 24px;
            line-height: 24px;
        }
        span{
            border-top: 1px solid #e6e6e6;
            display: block;
            padding: 2px 0;
        }
    }
    .fragment-name{
        font-size: 14px;
        height: 42px;
        font-weight: 500;
        overflow: hidden;
        padding-left: 15px;
        flex: 1;
        word-break: break-all;
        display: table;

        a{
            color: @text-color-title;
            display: table-cell;
            align-content: middle;
            vertical-align: middle;
        }
        &:hover{
            a{
                color: @primary-color;
            }
        }
    }
}
</style>
