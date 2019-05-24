<template>
    <div class="home-page ">
        <!-- home banner -->
        <blogDesc/>
        <layoutContainer>
            <div class="home-article-list">
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
                <articleListItem/>
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
import articleListItem from "@/components/articleListItem"
import blogDesc from "@/components/blogDesc"
export default {
    components: {
        articleListItem,
        blogDesc
    }
}
</script>

<style lang="less">
    .default-layout{
        .default-main-container{
            padding-top: 0;
        }
    }
    .home-page{
       
    }
</style>
