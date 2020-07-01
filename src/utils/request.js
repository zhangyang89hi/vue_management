import axios from 'axios'

// axios.defaults.baseURL = '';
// axios.defaults.timeout = 5000;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const fetch = axios.create({
    // baseURL: '', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// 添加请求拦截器
fetch.interceptors.request.use(
    function(config) {
        console.log("axios interceptors request");
        console.log(config)
        return config
    }, 
    function(error) {
        console.log(error)
        return Promise.reject(error)
    }
)

// 添加响应拦截器
fetch.interceptors.response.use(
    function(response) {
        console.log("axios interceptors response");
        console.log(response)
        return response
    },
    function(error) {
        if (error.response) {
            console.log(error.response)
        }
        return Promise.reject(error)
    }
)
export default fetch