// function ParseUrlParams(url) {
//   // 用于存储解析的结果
//   const params = {};
//   // 查找查询字符串的位置
//   const queryParamsStart =  url.indexOf('?')
//   if(queryParamsStart == -1){
//     return params
//   }
//   // 截取出来参数部分
//   const paramsString = url.slice(queryParamsStart+1)
//   // 用&符号分隔开，组成数组
//   const paramsArr = paramsString.split('&')
//   paramsArr.forEach( item=>{
//     [key,value] = item.split('=')
//     params[key] = value
//   });
//   return params
// }
function ParseUrlParams(url){
  const results = {}
  const params = new URLSearchParams(new URL(url).search)
  console.log(params.entries())
  for(const [key,value] of params){
    results[key] = value
  }
  return results
}
console.log(ParseUrlParams('https://example.com? name=yupi&age=25&location=shanghai'))