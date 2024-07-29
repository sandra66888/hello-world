// 手写instance of
function mystanceof(left, right){
  // 先判断是不是复杂数据类型
  if(typeof left !== 'object' || left === null) return false;
  console.log(typeof left)
  let prop = Object.getPrototypeOf(left)
  while(true){
    if(prop === null) return false
    if(prop === right.prototype) return true
    prop = Object.getPrototypeOf(prop)
  }
}

console.log(mystanceof([],Array))
console.log(mystanceof({name:'youlingyu',age:'18'},Object))