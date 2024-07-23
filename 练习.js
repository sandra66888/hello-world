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


function cloneDeep(source){
  if(typeof source !== 'object' || source === null) return source;
  const target = Array.isArray(source) ? [] : {}
  for(const key in source){
    if(Object.prototype.hasOwnProperty.call(source,key)){
      if(typeof source[key] === 'object' || source !== null){
        target[key] = cloneDeep(source[key])
      }else{
        target[key] = source[key]
      }
    }
  }
  return target
}
console.log(cloneDeep(old))