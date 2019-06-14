<template>
    <div class="article-comment-item">
        <div class="user-ico">
            <img src="http://q1.qlogo.cn/g?b=qq&nk=8144064&s=640"/>
        </div>
        <div class="article-comment-item-container">
            <div class="article-comment-item-container-header">
                <div class="user-name"><a href="#">张三</a></div>
                <div class="comment-time">·<span>5月6日</span></div>
                <span class="reported" title="举报" @click="reported(1,2)">
                    <i class="iconfont icon-jubao1"></i>
                </span>
            </div>
            <div class="article-comment-item-container-content">
                本文主要讨论以下几种攻击方式: XSS攻击、CSRF攻击、点击劫持以及URL跳转漏洞。
            </div>
            <div class="article-comment-item-controll">
                <div class="article-comment-item-controll-item">
                    <i class="iconfont icon-zan"></i>
                     12
                </div>
                <div class="article-comment-item-controll-item" @click="toggleReplyForm">
                    <span v-if="showReplyForm">取消回复</span>
                    <span v-else>回复(<i>4</i>)</span>
                </div>
            </div>
            <replyFrom v-if="showReplyForm" />
            <div class="reply-list">
                <replyItem @reported="reported"/>
                <replyItem @reported="reported"/>
                <replyItem @reported="reported"/>
                <div class="reply-more">查看更多回复...</div>
            </div>
        </div>
    </div>
</template>
<script>
import replyFrom from "./replyForm"
import replyItem from "./reply"
export default {
    components:{
        replyFrom,
        replyItem
    },
    data(){
        return {
            showReplyForm:false
        }
    },
    methods:{
        toggleReplyForm(){
            this.showReplyForm=!this.showReplyForm
        },
        reported(user_id,comment_id){
            this.$emit("reported",{
                user_id,
                comment_id
            })
        }
    }
}
</script>

<style lang="less" scoped>
.article-comment-item{
    display: flex;
    padding: 15px 0;
    border-bottom: 1px dashed @border-color;
    &:last-child{
        border: none;
    }
    .user-ico{
        width: 60px;
        overflow: hidden;
        img{
            width: 40px;
            height: 40px;
            overflow: hidden;
            border-radius: 50%;
        }
    }
    .article-comment-item-container{
        flex: 1;
        .article-comment-item-container-header{
            display: flex;
            font-size: 13px;
            padding-bottom: 6px;
            position: relative;
            .user-name{
                margin-right: 5px;
                a{
                    color: @primary-color!important;
                }
            }
            .comment-time{
                font-weight: bold;
                span{
                    padding-left: 5px;
                    font-weight: normal;
                }
            }
            .reported{
                position: absolute;
                right: 0;
                top: 0;
                float: right;
                font-size: 12px;
                color: #ccc;
                cursor: pointer;
                &:hover{
                    color: @primary-color;
                }
            }
            
        }
        .article-comment-item-container-content{
            font-size: 14px;
            font-weight: 500;
            
        }
        .article-comment-item-controll{
            display: flex;
            align-items: center;
            padding-top: 16px;
            .article-comment-item-controll-item{
                font-size: 12px;
                margin-right: 12px;
                user-select: none;
                cursor: pointer;
                .iconfont{
                    font-size: 12px;
                }
            }
        }
        .reply-list{
            padding-top: 10px;
            margin-top: 10px;
            border-top: 1px dashed @border-color;
            
            .reply-more{
                cursor: pointer;
                user-select: none;
                &:hover{
                    text-decoration: underline;
                    color: @primary-color;
                }
            }
        }
    }
}
</style>
