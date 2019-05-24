<template>
    <div class="article-list-item">
        <div class="article-main-info">
            <div class="article-main-info-main">
                <h3 class="article-title">
                    <nuxt-link to="/p/1">马蜂窝 iOS App 启动治理：回归用户体验</nuxt-link>
                </h3>
                <div class="article-preview-words">
                    增长、活跃、留存是移动 App 的常见核心指标，直接反映一款 App 甚至一个互联网公司运行的健康程度和发展动能。启动流程的体验决定了用户的第一印象，在一定程度上影响了用户活跃度和留存率。因此，确保启动流程
                </div>
            </div>
            <div class="article-preview-img">
                <img src="https://p.ssl.qhimg.com/t017c9d3097502381ee.png"/>
            </div>
        </div>
        <div class="article-meta">
            <div class="article-meta-item">
                <i class="iconfont icon-like"></i>
                <span>44</span>
            </div>
            <div class="article-meta-item">
                <span>1200</span>
                <span>·次查看</span>
            </div>
            
            <div class="article-meta-item">
                <span>1</span>
                <span>·天前</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .article-list-item{
        margin-bottom: 30px;
        .article-main-info{
            display: flex;
            .article-main-info-main{
                flex: 1;
                .article-title{
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 20px;
                    margin-bottom: 6px;
                    color: @text-color-title;
                    cursor: pointer;
                    a{
                        color: @text-color-title;
                        &:hover{
                            color: @primary-color;
                            text-decoration: underline;
                        }
                    }
                }
                .article-preview-words{
                    font-size: 13px;
                    padding-bottom: 14px;
                    height: 40px;
                    overflow: hidden;
                }
            }
            .article-preview-img{
                height: 75px;
                width: 150px;
                overflow: hidden;
                img{
                    height: 100%;
                }
            }
        }
        .article-meta{
            display: flex;
            align-items: center;
            .article-meta-item{
                display: flex;
                align-items: center;
                height: 20px;
                margin-right: 14px;
                .iconfont{
                    display: block;
                    height: 20px;
                    line-height: 19px;
                    vertical-align: top;
                }
                span{

                    display: block;
                    height: 20px;
                    vertical-align: top;
                }
            }
        }
    }

    @media (max-width:@container-width - 1px){
        .article-list-item{
            .article-main-info{
                .article-main-info-main{
                    .article-title{

                    }
                    .article-preview-words{
                        padding-right: 15px;
                    }
                }
                .article-preview-img{
                    width: 75px;
                }
            }
        }
    }
</style>
