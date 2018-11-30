// get url参数方法
function getUrlParam(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') //构造一个含有目标参数的正则表达式对象
  let r = window.location.search.substr(1).match(reg) //匹配目标参数
  if (r != null)
    return decodeURI(r[2])
  return null //返回参数值
}

// 获取全部url参数
function getUrlQuery(decode = true) {
  let query = {}
  let search = window.location.search
  search = search.replace('?', '')
  let queryArr = search.split('&')
  queryArr.forEach(item => {
    const arr = item.split('=')
    const key = arr[0]
    const val = arr[1]
    if (decode) {
      query[key] = decodeURIComponent(val)
    } else {
      query[key] = val
    }
  })
  return query
}
