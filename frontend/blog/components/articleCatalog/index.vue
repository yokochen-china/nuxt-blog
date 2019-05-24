<template>
    <div class="catalog">
        <div class="catalog-header">目录</div>
        <div class="catalog-container">
            <ul>
                <li><a href="#">1. XSS攻击</a></li>
                <li><a href="#">1. XSS攻击</a></li>
                <li><a href="#">1. XSS攻击</a></li>
                <li><a href="#">1. XSS攻击</a></li>
            </ul>
        </div>
    </div>
</template>
<style lang="less" scoped>
.catalog{
    border-left: 1px solid @border-color;
    padding-left: 15px;
    .catalog-header{
        font-size: 16px;
        font-weight: bold;
    }
    .catalog-container{
        ul{
            padding-left: 16px;
            list-style: square;
            font-size: 14px;
            li{
                display: list-item;
                text-align: -webkit-match-parent;
                a{
                    color:@text-color-label;
                    display: block;
                    padding: 4px 0;
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
@media (max-width:@container-width - 1px){
    .catalog{
        display: none;
    }
}
</style>
