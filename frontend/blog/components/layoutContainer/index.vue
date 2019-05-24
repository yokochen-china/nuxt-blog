<template>
    <div class="layout-container main-container">
        <div class="layout-container-main"><slot></slot></div>
        <div class="layout-container-aside"><slot name="aside"></slot></div>
    </div>
</template>
<style lang="less" scoped>
    .layout-container{
        display: flex;
        .layout-container-main{
            flex: 1;
        }
        .layout-container-aside{
            width: 255px;
            overflow: hidden;
            padding: 0 @space-width;
            padding-right: 0;
        }
    }
    @media (max-width:@container-width - 1px){
        .layout-container{
            display: block;
            .layout-container-main{
                
            }
            .layout-container-aside{
                width: 100%;
                overflow: hidden;
                padding: 0 @space-width;
                padding: 0;
            }
        }
    }
</style>
