<template>
    <div class="note-page page">
        <layoutContainer>
            <div class="note-list">
                <articleListItem class="note-item"/>
                <articleListItem class="note-item"/>
                <articleListItem class="note-item"/>
                <articleListItem class="note-item"/>
                <articleListItem class="note-item"/>
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
export default {
    components:{
        articleListItem
    }
}
</script>
<style lang="less" scoped>
    .note-page{
        .note-list{
            .note-item{
                padding: 15px;
                .shadow();
            }
        }
    }
</style>

