import axios from 'axios'
import store from './store/store.js'
import router from './router/index.js'

// axios.defaults.baseURL = '';
// axios.defaults.timeout = 5000;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("axios interceptors request");
    if(store.state.token) {
        config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log("axios success");
    return response;
  }, function (error) {
    // 对响应错误做点什么
    if(error.response){
        console.log("axios fail");
        switch (error.response.status){
            case 401:
                // store.commit('logout');
                router.replace({
                    path:'/login',
                    query:{redirect:router.currentRoute.fullPath}
                });
        }
    }
    return Promise.reject(error);
  });

export default axios;