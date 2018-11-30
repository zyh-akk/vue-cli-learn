import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = 'token'
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error) {
      redirect({name: 'error'})
    }
    return Promise.reject(error)   // 返回接口返回的错误信息
  }
)

const get = function (url, param) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      params: param
    }).then(res => {
      resolve(res.data)
    })
  })
}

//post请求
const post = function (url, param) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data: param
    }).then(res => {
      resolve(res)
    })
  })
}

export {get, post}
