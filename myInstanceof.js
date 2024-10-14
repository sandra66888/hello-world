// function myInstanceOf(left,right){
//   // 先判断数据类型，如果是基础数据类型直接返回false
//   if(typeof left !== 'object' || left === null) return false
//   // 拿到对象的原型
//   let proto  = Object.getPrototypeOf(left)
//   while(true){
//     if(proto === null) return false
//     if(proto === right.prototype) return true; 
//     proto = Object.getPrototypeOf(proto)
//   }
// }



function myInstanceOf(left,right){
  if(typeof left !== 'object' || left === null) return false
  let proto = Object.getPrototypeOf(left)
  while(true){
    if(proto === null) return false
    if(proto === right.prototype) return true
    prpto = Object.getPrototypeOf(proto)
  }
}
console.log(myInstanceOf(222,Number))
console.log(myInstanceOf('99',String))
console.log(myInstanceOf([1,2,3],Array))
console.log(myInstanceOf({name:'youlingyu',age:'18'},Object))

console.log(Object.prototype.toString.call(0))
console.log(Object.prototype.toString.call('ppp'))
console.log(Object.prototype.toString.call([]))
console.log(Object.prototype.toString.call({0:0}))
console.log(Object.prototype.toString.call(myInstanceOf))


console.log(typeof 1)

function myInstance(left,right){
  if(typeof left !== 'object' || typeof left === null) return false
  let proto = Object.getPrototypeOf(left)
  while(true){
    if(proto === null) return false
    if(proto === right.prototype) return true
    proto === Object.getPrototypeOf(proto)
  }

}