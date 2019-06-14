<template>
    <div class="article-comment-form">
        <div class="user-icon">
            <a href="https://github.com/login/oauth/authorize?client_id=b1cfe8d2c232907f1667&redirect_uri=http://192.168.0.246:3000/oauth/">
                <i class="iconfont  icon-GitHub" title="点击登录"></i>
            </a>
            <img src="http://q1.qlogo.cn/g?b=qq&nk=8144064&s=640" alt="">
        </div>
        <div class="article-comment-form-right">
            <textarea  class="form-input form-input-textarea" placeholder="点击左侧Github,登录后发表评论,支持markdown语法"></textarea>
            <div class="article-comment-form-footer">
                <label>Ctrl or ⌘ + Enter</label>
                <button class="submit-btn">发布</button>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.article-comment-form{
    padding:14px;
    display: flex;
    margin: 60px 0;
    border-radius: 5px;
    border: 1px dashed @border-color;
    .user-icon{
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #eee;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        img,.iconfont{
            font-size: 40px;
            display: block;
            height: 40px;
            line-height: 40px;
            color: #ccc;
        }
    }
    .article-comment-form-right{
        flex: 1;
        padding-left: 12px;
        .form-input{
            width: 100%;
            min-height: 100px;
            border-radius: 3px;
            border: 1px solid @border-color;
            padding: 5px;
            outline: none;
        }
        .article-comment-form-footer{
            text-align: right;
            // display: flex;
            // justify-content: space-between;
            padding-top: 5px;
            .submit-btn{
                height: 30px;
                padding: 0 15px;
                background: @primary-color;
                border: none;
                color: #fff;
                border-radius: 3px;
                margin-left: 15px;
                cursor: pointer;
                outline: none;
                &:hover{

                }
            }
        }
    }

    
}
@media (max-width:@container-width - 1px){
    .article-comment-form{
        
    }
}

</style>
