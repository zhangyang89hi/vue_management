import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '../components/test/test.vue'
import Login from '../components/page/login.vue'
import Home from '../components/page/home.vue'
import Readme from '../components/page/readme.vue'
import Chart from '../components/page/chart.vue'
import Form from '../components/page/form.vue'
import Table from '../components/page/table.vue'
import User from '../components/page/userInfo.vue'
import UserBase from '../components/page/userbase.vue'
import UserCart from '../components/page/usercart.vue'
import News from '../components/page/news.vue'

import store from '../store/store.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
		path: '/hello',
		name: 'HelloWorld',
		component: HelloWorld
    },
    {
		path: '/test',
		name: 'Test',
		component: Test
    },
    {
		path: '/',
		redirect: '/login'
    },
    {
		path: '/login',
		component: Login
	},
	{
		path: '/cart',
		component: UserCart
	},
    {
		path: '/user',
		component: User,
		meta: {
			requireAuth: true,
		},
		children:[
			{
				path:'base',
				component:UserBase
			},{
				path:'/cart',
				component:UserCart
			}
		]
    },
    {
		path: '/home',
		component: Home,
		meta:{
			requireAuth: true
	  	},
      	children:[
        {
          	path: 'readme',
		  	component: Readme,
		  	meta:{
				requireAuth: true
	  		},
		},
		{
			path:'news',
			component:News,
			meta:{
				requireAuth: true
			}
		},
        {
          path: 'chart',
		  component: Chart,
		  meta:{
			requireAuth: true
		  },
        },
        {
          path: 'form',
		  component: Form,
		  meta:{
			requireAuth: true
		  },
        },
        {
          path: 'table',
		  component: Table,
		  meta:{
			requireAuth: true
		  },
        }
      	]
    }
  ]
})

router.beforeEach((to, from, next) => {
	if(to.meta.requireAuth) {
		if(store.state.token){
			next();
		}
		else{
			next({
				path: '/login',
				query: {redirect: to.fullPath}
			})
		}
	}
	else{
		next();
	}
})

export default router;
