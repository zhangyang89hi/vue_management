<template>
    <div class="form-wrapper" style="width:600px">

			<div v-for="i in 10" v-if="!(i==5 && !isShow)" :key="i" style="bordr:solid 1px #000;">
				<p>This is {{i}} row.</p>
			</div>
			<button @click="isShow=!isShow">toggle</button>
        <el-form :model="form" label-width="100px">
					<el-form-item label="姓名">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
			<!-- <el-form-item label="性别">
				<el-radio-group v-model="form.sex">
					<el-radio :bind="1">男</el-radio>
					<el-radio :bind="2">女</el-radio>
				</el-radio-group>
			</el-form-item> -->
			<el-form-item label="年龄">
				<el-input v-model="form.old"></el-input>
			</el-form-item>
			<el-form-item label="电话">
				<el-input v-model="form.phone"></el-input>
			</el-form-item>
			<el-form-item label="地址">
				<el-input v-model="form.addr"></el-input>
			</el-form-item>
			<el-form-item label="邮箱">
				<el-input v-model="form.email"></el-input>
			</el-form-item>
			<el-form-item label="自我介绍">
				<el-input v-model="form.introduce"></el-input>
			</el-form-item>
			<el-form-item label="">
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
    			<el-button>取消</el-button>
			</el-form-item>
		</el-form>
    </div>
</template>

<script>


export default {
  components:{

  },
  props:{

  },
  data(){
    return{
		id:"1000",
		isShow: false,
		form:{
			name:'',
			// sex: '',
			old: '',
			// birthDay:'',
			date1: '',
			// date2: '',
			// delivery: false,
			// region:'',
			phone:'',
			addr:'',
			email:'',
			introduce:''
		}
    }
  },
  methods:{
	onSubmit() {
        console.log('submit!');
    }
  },
  computed:{

  },
  watch:{

  },
  created(){

  },
  mounted(){

  },
  updated(){

  },
  destroyed(){

  }

}
</script>


<style lang="scss">
  .wrapper{
    color:fuchsia;
  }
</style>
