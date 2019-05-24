<template>
    <header class="main-header">
        <div class="main-container">
            <div class="hedaer-layout-left">
                <h1 class="brand">
                    <nuxt-link to="/" class="mian-header-nav-item m-hide">YOKOCHEN</nuxt-link>
                    <nuxt-link to="/" class="mian-header-nav-item p-hide">YOKO</nuxt-link>
                </h1>
                <nav class="main-header-nav">
                    <nuxt-link to="/" class="mian-header-nav-item">
                        <i class="p-hide iconfont icon-shouye"></i>
                        <p>首页</p>
                    </nuxt-link>
                    <nuxt-link to="/note" class="mian-header-nav-item">
                        <i class="p-hide iconfont icon-project-checkx"></i>
                        <p>笔记</p>
                    </nuxt-link>
                    <nuxt-link to="/code" class="mian-header-nav-item">
                        <i class="p-hide iconfont icon-code-square"></i>
                        <p>片段</p>
                    </nuxt-link>
                    <nuxt-link to="/project" class="mian-header-nav-item">
                        <i class="p-hide iconfont icon-project-solid-list"></i>
                        <p>仓库</p>
                    </nuxt-link>
                </nav>
            </div>
            <div class="header-right">
                <div class="header-search">
                    <input type="search" @keydown.13.prevent="search" class="search-input" placeholder="搜索">
                    <i class="iconfont icon-search" @click="search"></i>
                </div>
                <a href="#" class="m-hide"><i class="iconfont icon-GitHub"></i></a>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    methods:{
        search(){
            this.$router.push("/search")
        }
    }
}
</script>
<style lang="less" scoped>
    .main-header{
        height: @header-height;
        .shadow();
        .main-container{
            height: @header-height;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .hedaer-layout-left{
                display: flex;
                align-items: center;
                .brand{
                    font-size: 26px;
                    cursor: pointer;
                    a{
                        color: @primary-color;
                    }
                }
                .main-header-nav{
                    display: flex;
                    align-items: center;
                    padding-left: 24px;
                    .mian-header-nav-item{
                        font-size: 16px;
                        font-weight: 600;
                        color: @text-color-label;
                        padding: 0 12px;
                        height: 34px;
                        line-height: 34px;
                        display: block;
                        border-radius: 4px;
                        cursor: pointer;
                        &:hover{
                            background-color: @hover-bg-color;

                        }
                    }
                    .nuxt-link-exact-active{
                        color: @primary-color;
                    }
                }
            }
            .header-right{
                display: flex;
                align-items: center;
                .header-search{
                    margin-right: 35px;
                    position: relative;
                    .search-input{
                        border: 1px solid @border-color;
                        height: 30px;
                        border-radius: 4px;
                        padding: 5px;
                        padding-right: 20px;
                        outline: none;
                        &:focus{
                            border: 1px solid @primary-color;
                        }
                    }
                    .icon-search{
                        position: absolute;
                        top: 4px;
                        right: 4px;
                        cursor: pointer;
                        color: @text-color-label;
                        &:hover{
                            color: @primary-color;
                        }
                    }
                    &:hover{
                        .icon-search{
                            color: @primary-color;
                        }
                    }
                }
                a{
                    color: @text-color-label;

                    .iconfont{
                        font-size: 24px;
                    }
                    &:hover{
                        color: @primary-color;
                    }
                }
                
            }
        }
    }

    @media (max-width:@container-width - 1px){
        .main-header{
            height: @header-height - 10px;
            .main-container{
                height: @header-height - 10px;
                .hedaer-layout-left{
                    .main-header-nav{
                        position: fixed;
                        z-index: 10000;
                        bottom: 0;
                        padding: 0;
                        left: 0;
                        right: 0;
                        height: @header-height - 10px;
                        background: #fff;
                        .shadow();
                        display: flex;
                        justify-content: space-between;
                        border-top: 1px solid @border-color;
                        .mian-header-nav-item{
                            height: 100%;
                            width: 100%;
                            text-align: center;
                            border-radius: 0;
                            padding-top: 14px;
                            .iconfont{
                                font-size: 26px;
                                display: block;
                                height: 20px;
                                line-height: 20px;
                            }
                            p{
                                display: block;
                                padding-top: 2px;
                                line-height: 12px;
                                font-size: 12px;
                            }
                            &:hover{
                                background: none;
                            }
                        }
                    }
                }
                .header-right{
                    .header-search{
                        margin-right: 0!important;
                        position: absolute;
                        right:@space-width;
                        .search-input{
                           width: 60px;
                           opacity: 0.5;
                           transition: all .3s;
                           &:focus{
                               width: 120px;
                           }
                        }
                        .iconfont{
                        }
                    }
                }
            }
        }
    }
</style>
