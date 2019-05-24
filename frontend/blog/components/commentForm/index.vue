<template>
    <div class="article-comment-form">
        <div class="form-row">
            <input type="text" placeholder="* 称呼" class="form-input">
            <input type="text" placeholder="* 邮箱" class="form-input">
            <input type="text" placeholder="网址" class="form-input">
        </div>
        <div class="form-row form-reply">
            <div class="form-input">
                <span class="lebel">回复</span> 
                <span class="floor">#1</span>
                <span class="author">@张三</span>
            </div>
            <div class="comment-content">
                智哥威武
            </div>
        </div>
        <div class="form-row">
            <textarea class="form-input form-input-textarea" placeholder="文明社会，理性评论"></textarea>
        </div>
        <div class="form-row">
            <input type="button" class="form-submit-btn" value="发布">
        </div>
    </div>
</template>
<style lang="less" scoped>
.article-comment-form{
    padding:60px 0;
    .form-submit-btn{
        height: 40px;
        padding: 0 15px;
        background: @primary-color;
        border: none;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 8px;
        outline: none;
        &:hover{
            opacity: .8;
        }
    }
    .form-input{
        height: 40px;
        line-height: 40px;
        border: 1px solid @border-color;
        padding: 0 6px;
        border-radius: 4px;
        outline: none;
    }
    .form-input-textarea{
        height: 80px;
        width: 100%;
        line-height: 25px;
        font-size: 14px;
    }
    .form-row{
        display: flex;
        flex-wrap: wrap;
        .form-input{
            flex: 1;
            margin-right: 5px;
            &:last-child{
                margin: 0;
            }
        }
    }
    .form-reply{
        padding: 6px 0;
        display: block;
        user-select: none;
        .form-input{
            margin-right: 0;
            .lebel{
                color: #aaa;
            }
            .floor{
                font-weight: bold;
            }
            .author{
                font-weight: bold;
            }
            span{
                margin-right: 5px;
            }
        }
        .comment-content{
            width: 100%;
            padding: 5px;
            margin-top: 6px;
            background: #fafafa;
            border-radius: 4px;
        }
    }
}
@media (max-width:@container-width - 1px){
    .article-comment-form{
        .form-row{
            display: block;
            .form-input{
                display: block;
                margin-right: 0;
                width: 100%;
                margin-bottom: 10px;
            }
        }
    }
}

</style>
