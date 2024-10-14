console.log(this)   // node环境中this指向控对象 ，不在函数中
function fn(...args){
  console.log(this,args);
}
let obj = {
  myname:"张三"
}

fn.apply(obj,[1,2]); // this会变成传入的obj，传入的参数必须是一个数组；
fn(1,2) // this指向window



const promise = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);