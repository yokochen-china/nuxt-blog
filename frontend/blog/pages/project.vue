<template>
    <div class="project-page page">
        <layoutContainer>
            <div class="project-query">
                <div class="project-query-item project-query-this">我的收藏</div>
                <div class="project-query-item">我的仓库</div>
            </div>
            <div class="project-list">
                <projectListItem/>
                <projectListItem/>
                <projectListItem/>
                <projectListItem/>
                <projectListItem/>
                <projectListItem/>
                <loadMore/>

            </div>
            <template slot="aside">
                <articleSection/>
                <tagSection/>
            </template>
        </layoutContainer>
        
    </div>
</template>

<script>
import projectListItem from "@/components/projectListItem"
export default {
    components: {
        projectListItem
    }
}
</script>

<style lang="less" scoped>
    .project-page{
        .project-query{
            display: flex;
            padding-bottom: 15px;
            .project-query-item{
               font-size: 14px;
               font-weight: 500;
               padding-right: 15px;
               user-select: none;
               cursor: pointer;
               &.project-query-this,&:hover{
                   color: @primary-color;
               }
            }
        }
    }
</style>
