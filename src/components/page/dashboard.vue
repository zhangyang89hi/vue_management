<template>
    <el-container style="height: 100%;">
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu
                    mode="vertical"
                    :collapse="false"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-colo="#ffd04b"
                    style="height:100%"
                    collapse-transition
                    router
                    unique-opened
                    default-active="/dashboard"
                    @open="handleopen" 
                    @close="handleclose" 
                    @select="handleselect" 
                >
                    <template v-for="menu in menuItems">
                        <template v-if="menu.subs">
                            <el-submenu :key="menu.name" :index="menu.index">
                                <template slot="title">{{menu.name}}</template>
                                <el-menu-item v-for="item in menu.subs" :key="item.name" :index="item.index">{{item.name}}</el-menu-item>
                            </el-submenu>
                        </template>
                        <template v-else>
                            <el-menu-item :key="menu.name" :index="menu.index">{{menu.name}}</el-menu-item>
                        </template>
                    </template>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        <el-footer height="40px">
            <div style="font-size:12px;color:rgba(7, 17, 27,0.6);margin-top:10px;">
                Copyright 1999 - 2099 ZYX. All Rights Reserved
            </div>
        </el-footer>
    </el-container>
</template>

<script>

export default {
    data () {
        return {
            menuItems:[
                {
                    name:'Readme',
                    icon:'',
                    index:'/dashboard/readme'
                },
                {
                    name: 'News',
                    icon: '',
                    index: '/dashboard/news'
                },
                {
                    name: 'blog',
                    icon: '',
                    index: '/dashboard/blog'
                },
                {
                    name:'Form',
                    icon:'',
                    index:'/dashboard/form',
                    subs: [
                        {
                            name:'form',
                            icon:'',
                            index:'/dashboard/form'
                        }
                    ]
                },
                {
                    name:'Table',
                    icon:'',
                    index:'/dashboard/table',
                    subs: [
                        {
                            name:'table',
                            icon:'',
                            index:'/dashboard/table'
                        }
                    ]
                },
                {
                    name:'Chart',
                    icon:'',
                    index:'/dashboard/chart',
                    subs: [
                        {
                            name:'chart',
                            icon:'',
                            index:'/dashboard/chart'
                        }
                    ]
                }
            ]
        }
    },
    created () {
    },
    mounted () {
        console.log('$el: ', this.$el)
        console.log('$data: ', this.$data)
    },
    methods: {
        handleopen() {

        },
        handleclose() {

        },
        handleselect() {

        }
    }
}
</script>

<style lang="scss">
@import "../../themes/app";

.el-footer{
    position: fixed;
    bottom: 0px;
    margin: 0px;
    
    width: 100%;
    text-align: center;
    z-index: 100;
    border-radius: 5px;
    background-color:#f3f5f7;
}
</style>