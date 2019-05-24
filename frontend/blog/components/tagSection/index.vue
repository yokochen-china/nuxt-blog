<template>
    <div class="tag-list">
        <div class="tag-list-header">
            <h3>标签</h3>
        </div>
        <div class="tag-list-container">
            <a href="#" class="tag-item">Javascript</a>
            <a href="#" class="tag-item">Node</a>
            <a href="#" class="tag-item">PHP</a>
            <a href="#" class="tag-item">GOLANG</a>
            <a href="#" class="tag-item">CSS</a>
            <a href="#" class="tag-item">Javascript</a>
            <a href="#" class="tag-item">Node</a>
            <a href="#" class="tag-item">PHP</a>
            <a href="#" class="tag-item">GOLANG</a>
            <a href="#" class="tag-item">CSS</a>
        </div>
    </div>
</template>
<style lang="less" scoped>
.tag-list{
    .tag-list-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        h3{
            font-size: 16px;
            font-weight: 500;
        }
        a{
            color: @primary-color;
            &:hover{
                text-decoration: underline;
            }
        }
    }
    .tag-list-container{
        display: flex;
        flex-wrap:wrap;
        .tag-item{
            // background: red;
            display: inline-block;
            padding: 5px 10px;
            border-radius: 4px;
            border:1px solid @border-color;
            margin-right: 5px;
            margin-bottom: 5px;
            color: @text-color-label;
            font-weight: 500;
            &:hover{
                color:  @primary-color;
                background: @primary-color-info2;
                border:1px solid @primary-color;
            }
        }
    }
}
</style>
