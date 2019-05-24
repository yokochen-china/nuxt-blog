<template>
    <div class="role-page">
        <pageHeader :list="[{title:'权限控制',path:'/role'},{title:'角色管理',path:'/role'}]"/>
        <div class="page-action">
            <div class="page-action-item">
                <Button type="dashed" title="新增"  @click="changeModal"><i class="iconfont icon-add"></i> </Button>
            </div>
            <div class="page-action-item">
                <Input placeholder="角色名称 / 角色ID"></Input>
            </div>
            <div class="page-action-item">
                <Button>查询</Button>
            </div>
            <!-- <div class="add-btn" title="添加管理员" @click="changeModal">
                <i class="iconfont icon-add"></i>
            </div> -->
        </div>
        <div class="page-body">
            <Table :loading="loading"  :columns="columns" :data="datas" class="yoko-table">
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="changeModal">编辑</Button>
                    <Button type="warning" size="small" style="margin-right: 5px" >删除</Button>
                </template>
                <template slot="status">
                    <!-- <Tag type="border" color="warning">禁用</Tag> -->
                    <Tag type="border" color="success">正常</Tag>
                </template>
            </Table>
            <div class="pagenation-warp">
                <Page  show-elevator/>
            </div>
        </div>

        <Modal 
            title="管理员"
            ok-text="保存"
            cancel-text="取消"
            :width="400"
            v-model="shoaModal"
        >
            <Form label-position="top" class="form">
                <FormItem label="真实姓名">
                    <Input placeholder="真实姓名"></Input>
                </FormItem>
                <FormItem label="电子邮箱">
                    <Input placeholder="电子邮箱"></Input>
                </FormItem>
                <FormItem label="登录密码">
                    <Input placeholder="登录密码"></Input>
                </FormItem>
                <FormItem label="所属权限组">
                    <Select  multiple placeholder="所属权限组">
                        <Option value="1" >超级管理员</Option>
                        <Option value="2" >cms管理员</Option>
                    </Select>
                </FormItem>
                <FormItem label="账户状态">
                    <RadioGroup  type="button" >
                        <Radio label="禁用"></Radio>
                        <Radio label="正常"></Radio>
                    </RadioGroup>
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
                    title: '角色ID',
                    key: 'id',
                    width:100
                },
                {
                    title: '角色名称',
                    key: 'role_name',
                    width:140
                },
                {
                    title: '描述',
                    key: 'role_desc',
                    minWidth:200
                },
                {
                    title: '状态',
                    slot: 'status',
                    width:100
                },
                {
                    title: '创建时间',
                    key: 'create_at',
                    width:100
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
                    email:"8144064@qq.com",
                    status:10,
                    role_name:"超级管理员",
                    role_desc:"super admin",
                    create_at:"2019-05-26"
                },
                {
                    id:10012,
                    email:"8144062@qq.com",
                    status:10,
                    role_name:"超级管理员",
                    role_desc:"super admin",
                    create_at:"2019-05-26"
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
.role-page{
    .role-page-container{
        
    }
}
</style>
