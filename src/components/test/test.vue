<template>
    <div id="test">
        <h3 id="h3">This is a test of vue.</h3>
        <!-- <img src="./assets/logo.png"> -->
        <Element1>
            <p slot="a">插槽示例b</p>
            <p slot="b">插槽示例a</p>
        </Element1>
        <el-button type="primary" v-loading="loading_contol" @click="openFullLoading">
            Loading
        </el-button>
        <el-button type="primary" @click="message_control">message</el-button>
        <el-button type="primary" @click="notification_ctr">notification</el-button>
        <el-tooltip class="tooltip" content="tooltip 提示的一些信息和方法" placement="top-end">
            <el-button type="primary">tooltip</el-button>
        </el-tooltip>

        <el-popover ref="pop1" placement="top" width="160">
            <p>This is a p of popover.</p>
        </el-popover>
        <el-button v-popover:pop1>popover</el-button>

        <p id="datetime"></p>
        <div>
            <time class="time">{{ this.currentDate.toString() }}</time>
        </div>

        <Chart1 v-loading.fullscreen="false" >

        </Chart1>
        <!-- <MySwiper></MySwiper> -->
        <div>
            请输入 firstname：<input type="text" v-model="first">
            请输入 secondname：<input type="text" v-model="second">
        </div>
        <div>full: {{ full }}</div>
        <div>fullname:  </div>
        <div class="blue">上海市浦东机场<icon name="arrow-right"></icon></div>
        <el-button type="" @click="showAlert=true">Alert</el-button>
        <el-alert v-show="showAlert" title="happy new year" type="success" :closable="true" @close="closeAlert()" show-icon description="..."></el-alert>
        <el-button type="" @click="openMessage">message</el-button>
        <input type="text" @blur="inputName" v-model.trim="userName">
        <p>userName:{{userName}}</p>
        <el-button type="" @click="showMyAlert">My alert</el-button>
        <el-button type="" @click="showMessageBox">MessageBox</el-button>
        <el-input-number ref="elenum" v-model="num" @change="handleChange" :min="1" :max="10000000"  label="描述文字"></el-input-number>
    </div>
</template>
<script>
import Element1 from './element1.vue';
import Chart1  from './chart1.vue';
import MySwiper from './myswiper';
import icon from '../common/icon';

export default {
    props:{

    },
    components:{
        Chart1,
        Element1,
        MySwiper,
        icon
    },
    data(){
        return{
            loading_contol: false,
            currentDate: new Date(),
            first:"zyy",
            second:"lj",
            full:"",
            showAlert: false,
            userName: '',
            showMy: false,
            msgboxCount: 0,
            num: ''
        }
    },
    computed:{
        // fullname:function(){
        //     console.log("computed!");
        //     this.full = this.first + this.second;
        //     return (this.full);
        // }
    },
    watch:{
        first:function(){
            this.full = this.first + this.second; 
        }
    },
    methods:{
        showMyAlert() {
            console.log('showMyAlert')
            this.$myAlert({
                title: '温馨提示',
                btnTxt: '确定'
            })
        },
        inputName() {
            console.log('|', this.userName, '|')
        },
        notification_ctr(){
            this.$notify({
                title: '通知',
                message: '这是一条通知',
                position: 'bottom-right'
            })
        },
        openFullLoading(){
            let h3 = document.getElementById('h3');
            const load = this.$loading({
                target: h3,
                lock: true,
                text: 'loading'
            });
            setTimeout( function(){
                load.close();
            }, 3000);
        },
        message_control(){
            this.$message({
                showclose: true,
                message: '恭喜你，成功提示',
                type: 'success'
            })
        },
        closeAlert() {
            console.log('showAlert: ', this.showAlert)
            this.showAlert = false
        },
        openMessage() {
            var m = this.$message({
                message: '恭喜你获得一次抽奖机会，请跟工作人员联系021-88888888',
                type: 'success',
                center: true,
                showClose: true,
                onClose: function(el) {
                    console.log(el)
                },
                duration: 0
            })
            // setTimeout(function() {
            //     m.close()
            //     console.log('m: ', m)
            // }, 2000)
        },
        showMessageBox() {
            this.$msgbox({
                title: `msgbox${this.msgboxCount++}`,
                message: '尊敬的用户，您已欠费，请及时缴费',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            })
            this.$msgbox({
                title: `msgbox${this.msgboxCount++}`,
                message: '尊敬的用户，您已欠费，请及时缴费',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            })
            this.$msgbox({
                title: `msgbox${this.msgboxCount++}`,
                message: '尊敬的用户，您已欠费，请及时缴费',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            })
            // this.$alert('系统繁忙', {

            // })
            // this.$confirm('是否正常', {

            // })
            // this.$prompt('稍后再试', {

            // })
        },
        handleChange() {
        }
    },
    created(){
        console.log(this.currentDate);
        // var x = this.fullname;
        // console.log(this.fullname);
    },
    mounted(){
        this.$nextTick(function(){
            document.getElementById('datetime').innerHTML += this.currentDate;
        })

        var elenum = this.$refs['elenum'].$el.querySelector("input")
        // elenum.oninput = 'if(elenum.value.length>11) elenum.value=elenum.value.slice(0,11)'
        console.log(elenum)
        // elenum.setAttribute('maxlength', '2')
        // elenum.setAttribute('oninput', 'if(value.length>2) value=value.slice(0,2)');
        elenum.addEventListener("input", function(event){
            console.log(elenum.value)
            if(elenum.value.length > 3) {
                setTimeout(function() {
                    elenum.value=elenum.value.slice(0,3)
                    console.log(elenum.value.slice(0,3))
                    // console.log(event.target)
                },1)
            }
            event.stopImmediatePropagation();
        });
    },
    updated(){

    },
    destroyed(){

    }
  
}
</script>
<style lang="scss" scoped>
#test {
--color-blue: #26a2ff;
--color-white: #fff;
--color-grey: #d9d9d9;
--border-color: #c8c8cd;
--success-color: #4caf50;
--error-color: #f44336;
--warning-color: #ffc107;
}
.blue {
    color: var(--color-blue)
}

</style>
