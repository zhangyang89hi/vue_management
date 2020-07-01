import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/store.js";

const HelloWorld = () => import("@/components/page/HelloWorld");
const Test = () => import("../components/test/test.vue");
const Login = () => import("../components/page/login.vue");
const Home = () => import("../components/page/home.vue");
const Readme = () => import("../components/page/readme.vue");
const Chart = () => import("../components/page/chart.vue");
const Form = () => import("../components/page/form.vue");
const Table = () => import("../components/page/table.vue");
const User = () => import("../components/page/userInfo.vue");
const UserBase = () => import("../components/page/userbase.vue");
const UserCart = () => import("../components/page/usercart.vue");
const News = () => import("../components/page/news.vue");
const blog = () => import("../components/page/blog.vue");

const DashBoard = () => import("../components/page/dashboard.vue")
const Ele = () => import("../components/common/ele.vue");
const Html = () => import('../components/test/html')

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/dashBoard",
      name: "DashBoard",
      component: DashBoard
    },
    {
      path: "/hello",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/html",
      name: "Html",
      component: Html,
    },
    {
      path: "/ele",
      name: "ele",
      component: Ele,
    },
    {
      path: "/test",
      name: "Test",
      component: Test,
    },
    {
      path: "/",
      redirect: "/dashBoard",
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/cart",
      component: UserCart,
    },
    {
      path: "/user",
      component: User,
      meta: {
        requireAuth: true,
      },
      children: [
        {
          path: "base",
          component: UserBase,
        },
        {
          path: "/cart",
          component: UserCart,
        },
      ],
    },
    {
      path: "/home",
      component: Home,
      meta: {
        requireAuth: true,
      },
      children: [
        {
          path: "readme",
          component: Readme,
          meta: {
            requireAuth: true,
          },
        },
        {
          path: "news",
          component: News,
          meta: {
            requireAuth: true,
          },
        },
        {
          path: "blog",
          component: blog,
          meta: {
            requireAuth: true,
          },
        },
        {
          path: "chart",
          component: Chart,
          meta: {
            requireAuth: true,
          },
        },
        {
          path: "form",
          component: Form,
          meta: {
            requireAuth: true,
          },
        },
        {
          path: "table",
          component: Table,
          meta: {
            requireAuth: true,
          },
        },
      ],
    },
  ],
});

// router.beforeEach((to, from, next) => {
// 	if(to.meta.requireAuth) {
// 		if(store.state.token){
// 			next();
// 		}
// 		else{
// 			next({
// 				path: '/login',
// 				query: {redirect: to.fullPath}
// 			})
// 		}
// 	}
// 	else{
// 		next();
// 	}
// });

export default router;
