// 方法 1 json.stringfy
let a = { a: 1, b: 2 };
let b = JSON.parse(JSON.stringify(a));
console.log(b);

let old = {
  name: "Jack",
  age: 18,
  hobbit: ["sing", { type: "sports", value: "run" }],
  score: {
    math: "A",
  },
  run: function () {},
  walk: undefined,
  fly: NaN,
  cy: null,
  date: new Date(),
};

console.log(JSON.parse(JSON.stringify(old)));

// 这种方式的缺陷是 1. 取不到value值undefined 的key 2.如果对象里面有函数，函数无法被拷贝下来 3.无法拷贝原对象原型链上的属性和方法 4。new Date对象直接转成字符串

// 方法 2 普通递归函数实现深拷贝

function myObject(){
  this.myProperty  = 'add'
}
myObject.prototype.inherit = 'pro'
const source = [1, 2, 3];
const obj = new myObject()
function cloneDeep(source) {
  if(typeof source !== 'object' || source == null ){
    return source
  }
  const target = Array.isArray(source) ? [] : {}
  for (const key in source) {
    if(Object.prototype.hasOwnProperty.call(source,key)){
      if(typeof source[key] === 'object' || source[key] !== null){
        target[key] = cloneDeep(source[key])
      }else{
        target[key] = source[key]
      }
    }
  }
  return target
}
console.log(cloneDeep(old))
