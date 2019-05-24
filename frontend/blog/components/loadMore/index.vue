<template>
    <div class="load-more">
        <div class="load-more-inner">
            <div class="loading-icon">
                <i class="iconfont icon-loading"></i>
            </div>
            点击载入更多
        </div>
    </div>
</template>
<style lang="less" scoped>
    .load-more{
        font-size: 12px;
        text-align: center;
        padding: 30px 0;
        .load-more-inner{
            display: inline-block;
            border: 1px solid @border-color;
            border-radius: 18px;
            height: 30px;
            line-height: 30px;
            padding:2px 20px;
            box-sizing: content-box;
            cursor: pointer;
            user-select: none;
            transition: all .2s;
            &:hover{
                background: @primary-color;
                color: #fff;
                border-color: @primary-color;
                .loading-icon{
                    .icon-loading{
                        font-size: 12px;
                        color: #fff;
                    }
                }
            }
            .loading-icon{
                animation: rotate linear infinite 1s;
                display: inline-block;
                .icon-loading{
                    font-size: 12px;
                    color: @primary-color;
                }
            }
        }
    }

    @keyframes rotate {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(960deg);
        }
    }
</style>
