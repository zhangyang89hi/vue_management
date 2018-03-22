<template>
  <div class="login">
        <div class="login_title">
          <h3>XYZ</h3>
        </div>
        <div class="login_form">
            <el-form>
                <el-form-item label="用户名">
                    <el-input v-model="user.name" type="text"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="user.password" type="password"></el-input>
                </el-form-item>
                <el-form-item  label="">
                    <el-button @click="login_in" type="primary">确认</el-button>
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
            user:{
                name:'',
                password:''
            }
        }
    },
    methods:{
        login_in(){
            let token;
            let that = this;
            console.log("login_in");
            this.axios({
                // headers: '',
                url: '/static/user.json',
                method: 'get',

                // url: '/login',
                // method:'post',
                // data: {
                //     name: this.user.name,
                //     password: this.user.password
                // },
            }).then(function(response){
                console.log(response);
                if(response.data.login == 'success')
                {
                    that.$store.commit('set_token', 'token');
                    that.$router.push('/home');
                    console.log("token: "+that.$store.state.token);
                }
                else{
                    alert('login error!');
                }

            })

        }
    },
    computed:{

    },
    mounted(){

    }
}
</script>

<style lang="scss" scoped>

    .login{
        width: 100%;
        min-width: 200px;
        // background: url('/static/picture/dashboard.png') no-repeat center center;
        .login_title{
            text-align:center;
            margin:60px;
            padding: 0;
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
