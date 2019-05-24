<template>
    <div class="code-page page">
        <layoutContainer>
            <div class="fragment-list">
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
                <codeListItem/>
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
import codeListItem from "@/components/codeListItem"
export default {
    components:{
        codeListItem
    }
}
</script>
<style lang="less" scoped>
    .code-page{
        .fragment-list{
           
        }
    }
</style>
