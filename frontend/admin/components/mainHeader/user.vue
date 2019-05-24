<template>
    <div class="user">
        <Dropdown placement="bottom-end">
            <div class="user-trigger">
                <div class="user-icon">
                    <img src="https://q1.qlogo.cn/g?b=qq&nk=8144064&s=640" alt="">
                </div>
                <Icon type="ios-arrow-down"></Icon>
            </div>
            <DropdownMenu slot="list">
                <DropdownItem>设置</DropdownItem>
                <DropdownItem>退出</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>
<style lang="less" scoped>
    .user{
        
        .user-trigger{
            display: flex;
            align-items: center;
            .user-icon{
                border: 1px solid @border-color;
                padding: 1px;
                height: @header-height - 10px;
                line-height: @header-height - 10px;
                width: @header-height - 10px;
                border-radius: 50%;
                text-align: center;
                overflow: hidden;
                background: @shadow-color;
                cursor: pointer;
                user-select: none;

                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    user-select: none;
                }
            }
        }
    }
</style>
