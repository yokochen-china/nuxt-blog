<template>
    <div class="project-list-item">
        <div class="project-author-icon">
            <img src="https://avatars2.githubusercontent.com/u/3000285?v=4"/>
        </div>
        <div class="project-main-info">
            <h2 class="project-name">
                <a href="#" target="_blank">trekhleb/javascript-algorithms</a>
            </h2>
            <div class="project-desc">
                A customizable GraphQL style query language for interacting with JavaScript objects.
            </div>
            <div class="project-infos">
                <div class="project-infos-item">
                    <i class="iconfont icon-eyes"></i>
                    <span>Watch</span>
                    <span>982</span>
                </div>
                <div class="project-infos-item">
                    <i class="iconfont icon-fork"></i>
                    <span>Fork</span>
                    <span>982</span>
                </div>
                <div class="project-infos-item">
                    <i class="iconfont icon-star"></i>
                    <span>Star</span>
                    <span>982</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .project-list-item{
        background: #fff;
        // height: 200px;
        padding: 15px;
        margin-bottom: 15px;
        display: flex;
        &:hover{
            a{
                text-decoration: underline;
                color: @primary-color!important;
            }
        }
        .shadow();
        .project-author-icon{
            width: 100px;
            height: 100px;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .project-main-info{
            padding-left: 15px;
            flex: 1;
            .project-name{
                color: @text-color-title;
                a{
                    color: @text-color-title;
                }
                
            }
            .project-desc{
                padding-top: 4px;
                font-size: 14px;
                height: 42px;
                overflow: hidden;
            }
        }
        .project-infos{
            display: flex;
            padding-top: 10px;
            .project-infos-item{
                display: flex;
                margin-right: 15px;
                font-size: 12px;
                span{
                    display: inline-block;
                    height: 20px;
                    line-height: 20px;
                    font-weight: 500;
                }
                .iconfont{
                    display: inline-block;
                    height: 20px;
                    line-height: 20px;
                    font-size: 12px;
                }
            }
        }
    }
</style>
