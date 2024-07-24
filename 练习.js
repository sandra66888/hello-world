function instanceOf(left,right){
  // 先检查是不是复杂数据类型
  if(typeof left !== 'object' || left === null) return false;
  // 拿到left的原型对象
  const proto = Object.getPrototypeOf(left)
  while(true){
    if(proto === null) return false
    if(proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto)
  }
}

console.log(instanceOf(222,Number))
console.log(instanceOf('99',String))
console.log(instanceOf([1,2,3],Array))
console.log(instanceOf({name:'youlingyu',age:'18'},Object))