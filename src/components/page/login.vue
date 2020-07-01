<template>
  <div class="login">
        <div class="login_title">
          <h3>XYZ</h3>
          <div class="home icon-bus-tickets" style="width:48px;height:48px;margin:auto"></div>
        </div>
        <div class="login_form" v-if="isLogin">
            <el-form>
                <el-form-item label="">
                    登陆
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input v-model="userLogin.name" type="text"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="userLogin.password" type="password"></el-input>
                </el-form-item>
                <el-form-item  label="">
                    <el-button @click="login_in" type="primary">确认</el-button>
                    <el-button @click="isLogin=false" type="primary">没有账号，去注册</el-button>
                    <el-button type="primary"><a href="/auth/github">Github</a></el-button>
                    <div id="login_container" style="width:100px;height:100px;">

                    </div>
                </el-form-item>
            </el-form>
        </div>
        <div class="login_form" v-else>
            <el-form>
                <el-form-item label="">
                    注册
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input v-model="userSignIn.name" type="text"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="userSignIn.password1" type="password"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="userSignIn.password2" type="password"></el-input>
                </el-form-item>
                <el-form-item  label="">
                    <el-button @click="sign_in" type="primary">确认</el-button>
                    <el-button @click="isLogin=true" type="primary">去登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

export default {
    props:{

    },
    data(){
        return{
            userLogin:{
                name:'',
                password:''
            },
            userSignIn: {
                name:'',
                password1:'',
                password2: ''
            },
            isLogin: true
        }
    },
    computed:{

    },
    created () {
        this.$nextTick(function() {
            // setTimeout(function() {
            //     var obj = new WxLogin({
            //         id:"login_container", // 需要显示的容器id
            //         appid: "wxb657b756e014d611",// 公众号appid wx*******
            //         scope: "name",// 网页默认即可
            //         redirect_uri: "http://localhost:8080/login/callback",     // 授权成功后回调的url
            //         state: "",            // 可设置为简单的随机数加session用来校验
            //         style: "black",       // 提供"black"、"white"可选。二维码的样式
            //         href: ""              // 外部css文件url，需要https
            //     })
            // }, 3000)
        })
    },
    mounted(){
    },
    methods:{
        login_in() {
            let token;
            const self = this;
            console.log("login_in");
            this.axios({
                // headers: '',
                url: '/login',
                method: 'post',
                data: {
                    name: this.userLogin.name,
                    password: this.userLogin.password
                },
            }).then(function(resp){
                console.log(resp)
                if (resp.data.responseCode === '000000') {
                    var m = self.$message({
                        message: '登陆成功，3s后跳转',
                        type: 'success',
                        center: true,
                        showClose: true,
                        onClose: function(el) {
                            console.log(el)
                        },
                        duration: 0
                    })
                    setTimeout(function() {
                        m.close()
                        self.$store.commit('set_token', 'token');
                        self.$router.push('/home')
                    }, 3000)
                } else {
                    self.$msgbox({
                        title: '温馨提示',
                        message: resp.data.responseMsg || '登陆失败，请稍后再试～',
                        confirmButtonText: '确定'
                    })
                }

            })

        },
        login_github() {
            // window.location.href = '/auth/github'
            this.axios({
                url: '/auth/github',
                method: 'get',
                data: {},
                responseType: 'document'
            }).then(function(resp) {
                // console.log(resp)
            })
        },
        validate() {
            if (this.userSignIn.password1 !== this.userSignIn.password2) {
                this.$msgbox({
                    title: '温馨提示',
                    message: '两次输入的密码不一致，请重新输入～',
                    confirmButtonText: '确定'
                })
            } else {
                this.sign_in()
            }
        },
        sign_in() {
            const self = this
            this.axios({
                // headers: '',
                url: '/signin',
                method: 'post',
                data: {
                    name: this.userSignIn.name,
                    password: this.userSignIn.password1
                }
            }).then(function(resp){
                console.log(resp)
                if (resp.data.responseCode === '000000') {
                    var m = self.$message({
                        message: '注册成功，3s后跳转',
                        type: 'success',
                        center: true,
                        showClose: true,
                        onClose: function(el) {
                            console.log(el)
                        },
                        duration: 0
                    })
                    setTimeout(function() {
                        m.close()
                        self.isLogin = true
                        // self.$router.push('/home')
                    }, 3000)
                } else {
                    self.$msgbox({
                        title: '温馨提示',
                        message: resp.data.responseMsg || '系统异常，请重新再试',
                        confirmButtonText: '确定'
                    })
                }
            })
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../../../static/picture/_sprites.scss';
@import '../../../static/picture/_sprites.css';

    .login{
        width: 100%;
        min-width: 200px;
        // background: url(/static/picture/dashboard.png) no-repeat center center;
        .login_title{
            text-align:center;
            margin:60px;
            padding: 0;
            .home{
                @include sprite($trolley);
            }
            // color: #409eff;
            // background-color: #f3f5f7;
        }
        .login_form{
            width:350px;
            min-width: 200px;
            margin:auto;
            padding: 20px 60px;
            border-radius: 10px;
            background-color: #f3f5f7;
        }
    }

</style>
