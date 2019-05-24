<template>
    <div class="search-page page">
        <layoutContainer>
            <div class="query">
                <div class="query-item  query-this">全部</div>
                <div class="query-item">笔记</div>
                <div class="query-item">片段</div>
            </div>
            <div class="search-result">
                <span class="keywords">vue</span>
                找到约 4 条结果
            </div>
            <div class="search-result-list">
                <articleListItem class="note-item"/>
                <articleListItem class="note-item"/>
                <articleListItem class="note-item"/>
                <articleListItem class="note-item"/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>

                <loadMore/>

            </div>
            <template slot="aside">
                <div class="site-search">
                    <a href="https://www.google.com/search?newwindow=1&q=site:yqchen.cn+vue%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86%E8%8F%9C%E5%8D%95&cad=h" target="_blank" class="site-search-item">在 Google 中搜索 »</a>
                    <a href="https://www.baidu.com/s?wd=site%3Asegmentfault.com%20vue%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86%E8%8F%9C%E5%8D%95" target="_blank" class="site-search-item">在 百度 中搜索 »</a>
                </div>
            </template>
        </layoutContainer>
    </div>
</template>
<script>
import articleListItem from "@/components/articleListItem"
import codeListItem from "@/components/codeListItem"

export default {
    components:{
        articleListItem,
        codeListItem
    }
}
</script>
<style lang="less" scoped>
    .search-page{
        .search-result{
            padding-bottom:  @space-width;
            .keywords{
                font-weight: bold;
                background: @border-color;
                padding:2px 5px;
                border-radius: 2px;
            }
        }
        .search-result-list{
            // .fragment-item{
            //     // background: red;
            //     padding: 0;
            //     box-shadow: none;
            // }
            .note-item{
                padding: 15px;
                margin-bottom: 20px;
                .shadow();
            }
        }
        .site-search{
            padding-top: 65px;
            .site-search-item{
                display: block;
                color: @primary-color;
                font-size: 14px;
                margin-bottom: 10px;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
    @media (max-width:@container-width - 1px){
        .search-page{
            .site-search{
                padding-top: 0px;
                .site-search-item{
                    display: block;
                    color: @primary-color;
                    font-size: 14px;
                    margin-bottom: 10px;
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>
