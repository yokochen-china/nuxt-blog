<template>
    <div class="home-blog-desc">
        <div class="main-container">
            <div class="home-blog-desc-container">
                <h2>YOKOCHEN</h2>
                <div class="home-blog-desc-desc">
                   从来没有任何一门语言的技术栈像Javascript一样，学习者拼尽全力也不让精通
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.home-blog-desc{
    background-color: @primary-color;
    color: #fff;
    height: 186px;
    margin-bottom: @space-width;
    .main-container{
        display: table;
        height: 100%;
    }
    .home-blog-desc-container{
        display: table-cell;
        align-content: center;
        vertical-align: middle;
        h2{
            font-size: 28px;
            font-weight: 500;
            max-width: 50%;
            margin-bottom: 16px;
        }
        .home-blog-desc-desc{
            font-size: 18px;
            max-width: 50%;
        }
    }
}
@media (max-width:@container-width - 1px){
    .home-blog-desc{
        background-color: @primary-color;
        color: #fff;
        height: 186px;
        margin-bottom: @space-width;
        .main-container{
            display: table;
            height: 100%;
        }
        .home-blog-desc-container{
            display: table-cell;
            align-content: center;
            vertical-align: middle;
            h2{
                font-size: 28px;
                font-weight: 500;
                max-width: 100%;
                margin-bottom: 16px;
            }
            .home-blog-desc-desc{
                font-size: 18px;
                max-width: 100%;

            }
        }
    }
}
</style>
