// 这样继承的缺陷是
// 1.子类实例化的时候不能给父lei构造函数传递参数





// 父亲
function Ainimal() {
  this.colors = ["black", "red"];
}

// 在父类的原型链上添加一个方法
Ainimal.prototype.getColor = function () {
  return this.colors
};

// 子类
function Dog(){
  
}

// 实现继承，父类别new出来的实例duixiang直接赋值给子类的构造函数的原型
Dog.prototype = new Ainimal()

let dog1 = new Dog()
dog1.colors.push('blue')


let dog2 = new Dog()
console.log(dog2.getColor())