<template>
    <Table   :columns="columns" :data="datas" class="yoko-table">
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" >编辑</Button>
            <Button type="warning" size="small" style="margin-right: 5px" >删除</Button>
        </template>
        <template slot="status">
            <Tag type="border" color="warning">禁用</Tag>
            <!-- <Tag type="border" color="success">正常</Tag> -->
        </template>
    </Table>
</template>
<script>
export default {
    props:["columns","row"],
    mounted(){
        console.log(this.row)
    }
}
</script>