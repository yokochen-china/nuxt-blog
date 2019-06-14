<template>
    <div class="article-section">
        <div class="article-section-header">
            <h3>热门</h3>
            <a class="more">更多»</a>
        </div>
        <div class="article-section-container">
            <div class="article-section-link">
                <div class="date">
                    <div class="date-up">MAY</div>
                    <div class="date-down">22</div>
                </div>
                <div class="link">js异步从入门到放弃（ 三）- 异步任务队列(task queues)</div>
            </div>
            <div class="article-section-link">
                <div class="date">
                    <div class="date-up">MAY</div>
                    <div class="date-down">22</div>
                </div>
                <div class="link">js异步从入门到放弃（ 三）- 异步任务队列(task queues)</div>
            </div>
            <div class="article-section-link">
                <div class="date">
                    <div class="date-up">MAY</div>
                    <div class="date-down">22</div>
                </div>
                <div class="link">js异步从入门到放弃（ 三）- 异步任务队列(task queues)</div>
            </div>
            <div class="article-section-link">
                <div class="date">
                    <div class="date-up">MAY</div>
                    <div class="date-down">22</div>
                </div>
                <div class="link">js异步从入门到放弃（ 三）- 异步任务队列(task queues)</div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>

.article-section{
    margin-bottom: 24px;
    .article-section-header{
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
    .article-section-container{
        overflow: hidden;
        .article-section-link{
            font-size: 12px;
            color: @text-color-label;
            display: flex;
            border-bottom: 1px dashed @border-color;
            padding: 12px 0;
            display: table;

            .date{
                background: #eee;
                text-align: center;
                background: @primary-color-info;
                border-radius: 4px;
                overflow: hidden;
                .date-up{
                    color: @primary-color;
                    background: @primary-color-info2;
                    padding: 0 6px;
                }
                .date-down{
                    padding: 0 6px;
                    color: @primary-color;
                    font-weight: bold;
                }
            }
            .link{
                flex: 1;
                padding-left: 12px;
                font-size: 13px;
                color: @text-color-title;
                height: 38px;
                overflow: hidden;
                display: block;
                cursor: pointer;

                display: table-cell;
                align-content: center;
                vertical-align: middle;
                &:hover{
                    text-decoration: underline;
                    color:@primary-color;
                }
            }
        }
    }
}


</style>
