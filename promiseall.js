function promiseAll(promises){
  return new Promise((resolve,reject) => {
    if(!Array.isArray(promises)){
      throw new TypeError('Argument must be an Array')
    }

    let results = []
    let computed = 0
    
    promises.forEach((promise,index) => {
      Promise.resolve(promise).then((value) => {
        results[index] = value;
        computed++  
        if(computed === promises.length){
          resolve(results)
        }
      }).catch((err) => {
        reject(err)
      })
    })
  })
}