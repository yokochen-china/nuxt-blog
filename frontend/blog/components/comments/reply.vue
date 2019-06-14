<template>
    <div class="reply-item">
        <div class="reply-header">
            <div class="reply-users">
                <span class="reply-user">般若</span>
                <span class="reply-label">回复</span>
                <span class="reply-user">哒哒兔</span>：
            </div>
            <div class="reported" title="举报" @click="reported(1,2)">
                <i class="iconfont icon-jubao1"></i>
            </div>
        </div>
        <div class="reply-content">
            古时候没有水泥，老百姓为防墙漏风，用泥水泼墙就是这样泼的。这位大师傅的手艺应该就是由此演变而来，这是非物质文化遗产的传承。你懂吗？
        </div>
        <div class="reply-footer">
            <div class="reply-info">
                2·天前
            </div>
            <div class="reply-controll">
                <span class="reply-controll-item">
                    <i class="iconfont icon-zan"></i> 12
                </span>
                <span class="reply-controll-item" title="回复" @click="toggleReplyForm">
                    <!-- <i class="iconfont icon-weibiaoti--"></i> -->
                    <span v-if="showReplyForm">取消回复</span>
                    <span v-else>回复</span>
                </span>
            </div>
        </div>
        <replyFrom v-if="showReplyForm" />
    </div>
</template>
<script>
import replyFrom from "./replyForm"
export default {
    components:{
        replyFrom
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
.reply-item{
    margin-bottom: 15px;
    line-height: 20px;
    &:last-child{
        margin: 0;
    }
    .reply-header{
        display: flex;
        justify-content: space-between;
        .reply-users{
            .reply-label{
                color: #999;
            }
            .reply-user{
                color: @primary-color;
                cursor: pointer;
                user-select: none;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
        .reported{
            color: #ccc;
            cursor: pointer;
            &:hover{
                color: @primary-color;
            }
        }
    }
    .reply-content{
        font-size: 13px;
    }
    .reply-footer{
        display: flex;
        padding-top: 5px;
        .reply-info{
            margin-right: 15px;
            color: #999;
        }
        .reply-controll{
            .reply-controll-item{
                margin-right: 15px;
                cursor: pointer;
                color: #999;
                &:hover{
                    color: @primary-color;
                }
                .iconfont{
                    font-size: 14px;
                }
                .icon-zan{
                    font-size: 12px;
                }
            }
        }
        
    }
}
</style>
