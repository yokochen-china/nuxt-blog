<template>
    <article class="page article-detail-page">
        <layoutContainer>
            <div class="article-header">
                <h1 class="article-title">寒冬求职之你必须要懂的Web安全</h1>
                <div class="article-infos">
                    <div class="article-tags">
                        <div class="article-tag-item">原创</div>
                        <div class="article-tag-item">web安全</div>
                        <div class="article-tag-item">javascrtip</div>
                    </div>
                    <div class="article-info">
                        954 · 次阅读  
                    </div>
                </div>
            </div>
            <div class="article-container">
                <p>随着互联网的发展，各种Web应用变得越来越复杂，满足了用户的各种需求的同时，各种网络安全问题也接踵而至。作为前端工程师的我们也逃不开这个问题，今天一起看一看Web前端有哪些安全问题以及我们如何去检测和防范这些问题。非前端的攻击本文不会讨论(如SQL注入，DDOS攻击等)，毕竟后端也非本人擅长的领域。</p>
                <p>QQ邮箱、新浪微博、YouTube、WordPress 和 百度 等知名网站都曾遭遇攻击，如果你从未有过安全方面的问题，不是因为你所开发的网站很安全，更大的可能是你的网站的流量非常低或者没有攻击的价值。</p>
                <p>本文主要讨论以下几种攻击方式: XSS攻击、CSRF攻击、点击劫持以及URL跳转漏洞。</p>
                攻击者构造出特殊的 URL，其中包含恶意代码。
    用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。
    用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
    <a href="#">百度</a>
    恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。
            </div>
            <div class="article-controll">
                <div class="article-btn article-like">
                    <i class="iconfont icon-zan"></i>
                    <span>有用</span>
                </div>
                <div class="article-btn article-zan">
                    <i class="iconfont icon-dashang"></i>
                    <span>打赏</span>
                </div>
                <p>如果觉得我的文章对你有用，请随意赞赏</p>
            </div>
            <div class="article-comment">
                <commentForm/>
                <comments/>
            </div>
            <template slot="aside">
                <articleCatalog/>
            </template>
        </layoutContainer>
    </article>
</template>
<script>
import articleCatalog from "@/components/articleCatalog"
import commentForm from "@/components/comments/commentForm"
import comments from "@/components/comments"

export default {
    components:{
        articleCatalog,
        commentForm,
        comments
    }
}
</script>

<style lang="less" scoped>
    .article-detail-page{
        

        .article-header{
            .article-title{
                font-size: 30px;
                line-height: 42px;
                color: @text-color-title;
                font-weight: 500;
                margin-bottom: 18px;
            }
            .article-infos{
                display: flex;
                align-items: center;
                .article-tags{
                    display: flex;
                    .article-tag-item{
                        background: #eee;
                        padding: 2px 5px;
                        border-radius: 2px;
                        margin-right: 5px;
                        background: @primary-color-info;
                        color: @primary-color;
                        font-size: 12px;
                    }
                }
                .article-info{
                    font-size: 12px;
                    margin-left: 30px;
                }
            }
        }
        .article-container{
            padding-top: 32px;
            font-size: 16px;
            line-height: 28px;
            overflow: hidden;
            p{
                margin-bottom: 16px;
            }
            a{
                color: @primary-color!important;
                text-decoration: underline;
            }
        }
        .article-controll{
            padding: 30px 0;
            margin-top: 60px;
            text-align: center;
            border-top: 1px dashed @border-color;
            .article-btn{
                display: inline-block;
                background: @primary-color;
                padding: 6px 14px;
                border-radius: 4px;
                font-size: 18px;
                color: #fff;
                cursor: pointer;
                user-select: none;
                margin: 10px;
                &:hover{
                    opacity: .8;
                }
            }
            .article-zan{
                background: #d9534f;
            }
            p{
                padding-top: 15px;
                font-size: 12px;
                color: #ccc;
            }
        }
    }
</style>
