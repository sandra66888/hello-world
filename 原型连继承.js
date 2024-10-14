function Coder(name) {
  this.type = 'Coder';
  this.name = name
  this.colors = ['red', 'green', 'blue'];
}

Coder.prototype.rap = function() {
  console.log('yo yo yo');
}

// function Yupi(name) {
//   this.name = name;
//   this.age = 18;
// }
//  原型连继承
// Yupi.prototype = new Coder();
// Yupi.prototype.constructor = Yupi;

// const yupiInstance = new Yupi('Yupi');
// yupiInstance.type = '999'
// console.log(yupiInstance.type); // 输出: Coder
// yupiInstance.rap(); // 输出: yo yo yo

// 构造函数继承
// 在构造函数内部调用父类构造函数，并使用call活apply来绑定this，从而实现父类构造函数的属性
// function Parent(name,age){
//   Coder.call(this,name)
//   this.age = age
// }
// const peiqi = new Parent('youyou')
// const qiaozhi = new Parent('qiqi')
// peiqi.colors.push('peiqi')
// console.log(peiqi.name,peiqi.colors)
// console.log(qiaozhi.name,qiaozhi.colors)
// 优点：每个实例都有自己的属性，不会共享父类的属性； 缺点：不能继承父类的原型方法

//  组合继承，结合了原型连继承和构造函数继承的特点，以解决原型连和构造函数各自的问题
function Child(name,age){
  Coder.call(name)
  this.age = age
}
// Child.prototype = new Coder()
// Child.prototype.constructor = Child // 修正构造函数指向
// console.log(Child.prototype.constructor)

// 寄生组合继承，创建一个寄生构造函数来继承原型
let F = function(){}
F.prototype = Coder.prototype
Child.prototype = new F()
Child.prototype.constructor = Child
