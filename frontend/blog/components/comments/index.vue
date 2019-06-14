<template>
    <div class="article-comment-container">
        <div class="article-comment-header">
            <div class="article-comment-header-left">2条评论</div>
            <div class="article-comment-header-right">2条评论</div>
        </div>
        <div class="comment-list">
            <comment @reported="changeReportedForm"/>
            <loadMore/>
        </div>
        <reportedForm @submit="submit" v-model="showReportedForm"/>
    </div>
</template>
<script>
import comment from "./comment"
import reportedForm from "./reportedForm"
export default {
    components:{
        comment,
        reportedForm
    },
    data(){
        return {
            showReportedForm:false
        }
    },
    methods:{
        submit(data){
            console.log(data)
            this.changeReportedForm()
        },
        changeReportedForm(){
            this.showReportedForm=!this.showReportedForm
        }
    }
}
</script>

<style lang="less" scoped>
.article-comment{
    .article-comment-container{
        .article-comment-header{
            display: flex;
            justify-content: space-between;
            padding: 6px 0;
            border-top: 1px dashed @border-color;
            border-bottom: 1px dashed @border-color;
            margin-bottom: 15px;
        }
    }
}
</style>
