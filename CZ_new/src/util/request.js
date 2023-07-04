import axios from 'axios'
// import { Notification, MessageBox, Message } from 'element-ui'
import store from '@/store'
// import { getToken } from '@/util/auth'
import errorCode from '@/util/errorCode'
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
// import {
//     Message
// } from 'element-ui'
const Server = axios.create({
    timeout: 10000,
    baseURL: window.baseUrl
})

// const token1=getToken()
const token1=window.localStorage.getItem("token")
      // ? (token1 = window.localStorage.getItem("token"))
      // : "";

Server.interceptors.request.use(req => {
    const isToken = (req.headers || {}).isToken === false
    if (token1 && !isToken) {
      req.headers['Authorization'] = 'Bearer ' + token1 // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    // get请求映射params参数
    if (req.method === 'get' && req.params) {

      let url = req.url + '?';
      for (const propName of Object.keys(req.params)) {
        const value = req.params[propName];
        var part = encodeURIComponent(propName) + "=";
        if (value !== null && typeof(value) !== "undefined") {
          if (typeof value === 'object') {
            for (const key of Object.keys(value)) {
              let params = propName + '[' + key + ']';
              var subPart = encodeURIComponent(params) + "=";
              url += subPart + encodeURIComponent(value[key]) + "&";
            }
          } else {
            url += part + encodeURIComponent(value) + "&";
          }
        }
      }
      url = url.slice(0, -1);
      req.params = {};
      req.url = url;
    }
    return req
    // req.cancelToken = source.token;
    // const token = window.localStorage.getItem('token')
    // const url = ["/refreshToken"]
    // if (token && url.includes(req.url)) {
    //     req.headers['Authorization'] = token
    // }
    // return req
}, err => {
    return Promise.reject(err);
})
Server.interceptors.response.use(res => {
  // console.log(res)
    // if (res.code == "888") {
    //   console.log(res)
    //     Message.error('未进行企业认证，请进入企业认证界面进行认证')
    //     // this.$alert('请前往企业认证页面中填写企业认证信息，填写完毕后注意提交信息，关注企业认证动态。', '系统提示', {
    //     //   confirmButtonText: '确定',
    //     //   callback: action => {
    //     //     this.$router.push('/MyMessage'),
    //     //     this.$message({
    //     //       type: 'info',
    //     //       message: `去进行企业认证: ${ action }`
    //     //     });
    //     //   }
    //     // });
    //     // token过期清除所有请求
      
    //     router.push('/MyMessage')
     
    // }
    if(res.code==403){
      console.log(res)
    }
    if (res.data.code == 401) {
        // Message.error('登录过期，请重新登录')
        // token过期清除所有请求
        // source.cancel();
        localStorage.clear()
        // router.push('/login')
        window.location.reload()
    }
    return res.data
}, error => {
    if (axios.isCancel(error)) { // 取消请求的情况下，终端Promise调用链
        return new Promise(() => {});
    } else {
        return Promise.reject(error);
    }
})

export default Server