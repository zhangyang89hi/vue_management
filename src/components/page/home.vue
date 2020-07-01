<template>
    <el-container style="position: relative;height: 100%;">
        <el-header>
            <div>
                <el-row>
                    <el-col :span="16">
                        <div style="text-align:center">XYZ</div>
                    </el-col>
                    <el-col :span="8">
                        <div style="float:right;">
                            <span></span>
                            <el-dropdown 
                                type="primary" 
                                @command="handleCommand" 
                                split-button trigger="click"
                            >
                                User
                                <!-- <span class="el-dropdown-link">
                                    User<i class="el-icon-caret-bottom el-icon--right"></i>
                                </span> -->
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="user" divided>用户</el-dropdown-item>
                                    <el-dropdown-item command="cart" divided>购物车</el-dropdown-item>
                                    <el-dropdown-item command="login" divided>退出</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-header>
        <el-container>
            <el-aside style="width: 100px;">
                <el-menu 
                    default-active="/home" 
                    style="height:100%" 
                    @open="handleopen" 
                    @close="handleclose" 
                    @select="handleselect" 
                    router unique-opened
                    :collapse="false"
                >
                    <template v-for="menu in menuItems" >
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


                    <!-- <el-menu-item index="home">Home</el-menu-item>
                    <el-submenu index="form">
                        <template slot="title">Form</template>
                        <el-menu-item index="2-1">Form1</el-menu-item>
                        <el-menu-item index="2-2">Form2</el-menu-item>
                        <el-menu-item index="2-3">Form3</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">Table</template>
                        <el-menu-item index="3-1">Table1</el-menu-item>
                        <el-menu-item index="3-2">Table2</el-menu-item>
                        <el-menu-item index="3-3">Table3</el-menu-item>
                    </el-submenu>
                    <el-submenu  index="4">
                        <template slot="title">Chart</template>
                        <el-menu-item index="3-1">Chart</el-menu-item>
                        <el-menu-item index="3-2">Chart</el-menu-item>
                        <el-menu-item index="3-3">Chart</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="5">设置</el-menu-item> -->
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        <el-footer height="40px">
            <div style="font-size:12px;color:rgba(7, 17, 27,0.6);margin-top:10px;">
                Copyright 1989 - 2018 ZYX. All Rights Reserved
            </div>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    props:{

    },
    data(){
        return{
            value1:'',
            menuItems:[
                {
                    name:'Readme',
                    icon:'',
                    index:'/home/readme'
                },
                {
                    name: 'News',
                    icon: '',
                    index: '/home/news'
                },
                {
                    name: 'blog',
                    icon: '',
                    index: '/home/blog'
                },
                {
                    name:'Form',
                    icon:'',
                    index:'/home/form',
                    subs: [
                        {
                            name:'form',
                            icon:'',
                            index:'/home/form'
                        }
                    ]
                },
                {
                    name:'Table',
                    icon:'',
                    index:'/home/table',
                    subs: [
                        {
                            name:'table',
                            icon:'',
                            index:'/home/table'
                        }
                    ]
                },
                {
                    name:'Chart',
                    icon:'',
                    index:'/home/chart',
                    subs: [
                        {
                            name:'chart',
                            icon:'',
                            index:'/home/chart'
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        handleCommand(command){
            switch(command){
                case 'user': this.$router.push('/home/readme');console.log('user');break;
                case 'cart': this.$router.push('/cart');console.log('cart');break;
                case 'login': this.$router.push('/login');console.log('login');break;
                default:;
            }
        },
        handleopen(){

        },
        handleclose(){

        },
        handleselect(){

        },
        to_login(){
            this.$router.push('/login');
        },
        to_user(){
            console.log("user");
            this.$router.push('/user');
        },
        to_cart(){
            this.$router.push('/cart');
        },
        to_form(){
            this.$router.push('/home/form')
        },
        to_table(){
            this.$router.push('/home/table')
        },
        to_chart(){
            $router.push('/home/chart');
        }
    },
    computed:{

    },
    mounted(){
        console.log("this: ");
        console.log(this);
        console.log("this.$router: ");
        console.log(this.$router);
        console.log("$route: ");
        console.log();
    }
}
</script>

<style lang="scss" scoped>
    .el-container{
        .el-header{
            padding: 10px;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 100;
            border-radius: 5px;
            background-color:#f3f5f7;
        }
        .el-container{
            // height: 100%;
            position: absolute;
            width: 100%;
            top: 60px;
            bottom: 40px;
        }
        .el-aside{
            position: relative;
            height: 100%;
            z-index: 50;
        }
        .el-main{
            position: relative;
            height: 100%;
            width: 100%;
            z-index: 30;
            // height: 100%;
        }
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
    }
</style>
