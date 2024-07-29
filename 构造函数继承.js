// 可以给父类的构造函数传递参数
function Ainimal(name){
  this.name = name
  this.colors = ['black','red']
  this.getName = function (){
    return this.name
  }
}

function Dog(name){
  Ainimal.call(this,name)
  this.age = 18
}


let instance1 = new Dog('小明')
instance1.colors.push('blue')
console.log(instance1.getName())