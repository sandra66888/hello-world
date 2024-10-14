function isSubset(subset,superset){
  for(let key in subset){
    if(!(key in superset) || subset[key] !== superset[key]){
      return false
    }
  }
  return true
}

const obj1 = {a:1}
const obj2 = {c:1,b:2}
console.log(isSubset(obj1,obj2))