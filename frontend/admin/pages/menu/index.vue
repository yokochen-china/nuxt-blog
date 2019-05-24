<template>
    <div class="menu-page">
        <pageHeader :list="[{title:'权限控制',path:'/menu'},{title:'菜单管理',path:'/menu'}]"/>
        <div class="page-action">
            <div class="page-action-item">
                <Button type="dashed" title="新增"  @click="changeModal"><i class="iconfont icon-add"></i> </Button>
            </div>
            <div class="page-action-item">
                <Select >
                    <Option value="1">组管理</Option>
                    <Option value="2">菜单管理</Option>
                </Select>
            </div>
        </div>
        <div class="menu-page-container">
            <div class="page-body">
                <Table :loading="loading"  :columns="columns" :data="datas" class="yoko-table">
                    <template slot-scope="{ row, index }" slot="action">
                        <Button type="primary" size="small" style="margin-right: 5px" @click="changeModal">编辑</Button>
                        <Button type="warning" size="small" style="margin-right: 5px" >删除</Button>
                    </template>
                    <template slot="status">
                        <Tag type="border" color="warning">禁用</Tag>
                    </template>
                </Table>
            </div>
        </div>

        <Modal 
            ok-text="保存"
            cancel-text="取消"
            title="菜单管理" 
            :width="400"
            v-model="shoaModal"
        >
            <Form label-position="top" class="form">
                <FormItem label="菜单名称">
                    <Input placeholder="菜单名称"></Input>
                </FormItem>
                <FormItem label="路由地址">
                    <Input placeholder="路由地址"></Input>
                </FormItem>
                <FormItem label="所属组">
                    <Select  placeholder="所属组">
                        <Option value="1" >顶级菜单</Option>
                        <Option value="2" >权限控制</Option>
                    </Select>
                </FormItem>
                <FormItem label="所需权限">
                    <CheckboxGroup >
                        <Checkbox label="1">访问</Checkbox>
                        <Checkbox label="2">增加</Checkbox>
                        <Checkbox label="3">删除</Checkbox>
                        <Checkbox label="4">修改</Checkbox>
                    </CheckboxGroup>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>
<script>
export default {
    layout:"console",
 
    data(){
        return {
            loading:false,
            shoaModal:false,
            columns:[
                {
                    title: 'ID',
                    key: 'id',
                    width:100
                },
                {
                    title: '类型',
                    key: 'type',
                    width:140
                },
                {
                    title: '组名/菜单',
                    key: 'menu_name',
                    width:140
                },
                {
                    title: '路由',
                    key: 'router',
                    minWidth:150
                },
                {
                    title:"操作",
                    slot: 'action',
                    width: 150,
                    align: 'center'
                }
            ],
            datas:[
                {
                    id:1001,
                    menu_name:"控制台",
                    router:"/console",
                    group_name:"-",
                    type:"路由",
                    scope:"访问、增加、修改、删除"
                },
                {
                    id:10023,
                    menu_name:"权限控制",
                    router:"",
                    group_name:"-",
                    type:"组",
                    groups:[
                        {
                            id:1002,
                            menu_name:"控制台",
                            router:"/console",
                            group_name:"-",
                            type:"路由",
                            scope:"访问、增加、修改、删除"
                        }
                    ]
                }
                
            ]
        }
    },
    methods:{
        changeModal(){
            this.shoaModal=!this.shoaModal
        }
    }
}
</script>
<style lang="less" scoped>
.menu-page{
    .menu-page-container{
        
    }
}
</style>
