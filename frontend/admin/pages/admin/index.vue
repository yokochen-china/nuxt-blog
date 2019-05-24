<template>
    <div class="admin-page">
        <pageHeader :list="[{title:'权限控制',path:'/admin'},{title:'管理员',path:'/admin'}]"/>
        <div class="page-action">
            <div class="page-action-item">
                <Button type="dashed" title="新增"  @click="changeModal"><i class="iconfont icon-add"></i> </Button>
            </div>
            <div class="page-action-item">
                <Input placeholder="姓名 / 邮箱"></Input>
            </div>
            <div class="page-action-item">
                <Select >
                    <Option value="1">超级管理员</Option>
                    <Option value="2">运营管理员</Option>
                    <Option value="3">测试管理员</Option>
                </Select>
            </div>
            <div class="page-action-item">
                <Button>查询</Button>
            </div>
            <!-- <div class="add-btn" title="添加管理员" @click="changeModal">
                <i class="iconfont icon-add"></i>
            </div> -->
        </div>
        <div class="admin-page-container">
            <div class="page-body">
                <Table :loading="loading"  :columns="columns" :data="datas" class="yoko-table">
                    <template slot-scope="{ row, index }" slot="action">
                        <Button type="primary" size="small" style="margin-right: 5px" @click="changeModal">编辑</Button>
                        <Button type="warning" size="small" style="margin-right: 5px" >删除</Button>
                    </template>
                    <template slot="status">
                        <Tag type="border" color="warning">禁用</Tag>
                        <!-- <Tag type="border" color="success">正常</Tag> -->
                    </template>
                </Table>
                <div class="pagenation-warp">
                    <Page  show-elevator/>
                </div>
            </div>
        </div>

        <Modal 
            class="yoko-modal" 
            ok-text="保存"
            cancel-text="取消"
            title="管理员" 
            :width="400"
            v-model="shoaModal"
        >
            <Form label-position="top" class="form" >
                <FormItem label="真实姓名">
                    <Input placeholder="真实姓名"></Input>
                </FormItem>
                <FormItem label="电子邮箱">
                    <Input placeholder="电子邮箱"></Input>
                </FormItem>
                <FormItem label="登录密码">
                    <Input placeholder="登录密码"></Input>
                </FormItem>
                <FormItem label="账户状态">
                    <RadioGroup  type="button" >
                        <Radio label="禁用"></Radio>
                        <Radio label="正常"></Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="所属权限组">
                    <Select   multiple placeholder="所属权限组">
                        <Option value="1" >超级管理员</Option>
                        <Option value="2" >cms管理员</Option>
                    </Select>
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
                    title: '用户ID',
                    key: 'id',
                    width:100
                },
                {
                    title: '真实姓名',
                    key: 'relname',
                    width:140
                },
                {
                    title: '邮箱/账户',
                    key: 'email',
                    minWidth:200
                },
                {
                    title: '权限组',
                    key: 'group',
                    minWidth:150
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
                    relname:"陈玉巧",
                    group:"超级管理员",
                    create_at:"2019-05-26"
                },
                {
                    id:10012,
                    email:"8144062@qq.com",
                    status:10,
                    relname:"张三",
                    group:"超级管理员",
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
.admin-page{
    .admin-page-container{
        
    }
}
</style>
