<template>
    <div class="nav scroll">
        <div class="nav-group">
            <!-- <div class="nav-group-name">设置</div> -->
            <nuxt-link  to="/dashboard" class="nav-item ">
                <i class="iconfont icon-dashboard"></i>
                <span>控制台</span>
            </nuxt-link>
        </div>
        <div class="nav-group">
            <div class="nav-group-name">权限控制</div>
            <nuxt-link  to="/admin" class="nav-item ">
                <i class="iconfont icon-dashboard"></i>
                <span>管理员</span>
            </nuxt-link>
            <nuxt-link  to="/role" class="nav-item ">
                <i class="iconfont icon-dashboard"></i>
                <span>角色管理</span>
            </nuxt-link>
            <nuxt-link  to="/menu" class="nav-item ">
                <i class="iconfont icon-dashboard"></i>
                <span>菜单管理</span>
            </nuxt-link>
        </div>
     
    </div>
</template>

<style lang="less" scoped>
.nav{
    position: absolute;
    top: @side-brand-height;
    bottom: @side-footer-height;
    right: 0;
    left: 0;
    padding-top: @space-width * 2px;
    overflow-y: auto;
    .nav-group{
        .nav-group-name{
            padding:2px @space-width;
            font-size: 12px;
            color: @text-color-label2;
            padding-top: @space-width;
        }
        .nav-item{
            font-size: 14px;
            padding: @space-width;
            display: block;
            color: @text-color-label;
            border-bottom: 1px dashed @border-color;
            transform: all .5s;
            &:first-child{
                border-top: 1px dashed @border-color;
            }
            .iconfont{
                font-size: 16px;
                display: inline-block;
                width: 20px;
                margin-right: 10px;
            }
            &:hover{
                color: @primary-color;
            }
            &.nuxt-link-exact-active,&.this{
                color: @primary-color;
            }
        }
        
    }
    
}
</style>
