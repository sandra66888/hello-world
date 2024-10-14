// function promiseAll(promises){
//   return new Promise((resolve,reject) => {
//     if(!Array.isArray(promises)){
//       throw new TypeError('Argument must be an Array')
//     }

const { resolve } = require("path")

//     let results = []
//     let computed = 0
    
//     promises.forEach((promise,index) => {
//       Promise.resolve(promise).then((value) => {
//         results[index] = value;
//         computed++  
//         if(computed === promises.length){
//           resolve(results)
//         }
//       }).catch((err) => {
//         reject(err)
//       })
//     })
//   })
// }

function PromiseAll(promises){
  return new Promise((resolve,reject) => {
    let count = 0
    const results = []
    for(const promise of promises){
      Promise.resolve(promise).then((value) => {
        results[count] = value
        count++
        if(count === promises.length){
          resolve(results)
        }
      }).catch((err) => {
        reject(err)
      })
    }
  })
}
const promise1 = new Promise((resolve,reject) => {
  setTimeout(() => {
    if(Math.random() < 1) {
      resolve('success')
    }else{
      reject('error')
    }
  }, 1000);
})
const promise2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    if(Math.random() < 1) {
      resolve('success')
    }else{
      reject('error')
    }
  }, 1000);
})
const promise3 = new Promise((resolve,reject) => {
  setTimeout(() => {
    if(Math.random() < 1) {
      resolve('success')
    }else{
      reject('error')
    }
  }, 1000);
})
PromiseAll([promise1,promise2,promise3]).then((results)=>{
  console.log(results)
}).catch((err)=>{
  console.log(err)
})
// const fetchData = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { url, status: 'success' };
//       if (Math.random() < 0.3) { // 模拟失败的情况
//         reject(new Error(`请求失败: ${url}`));
//       } else {
//         resolve(data);
//       }
//     }, 1000);
//   });
// };

// const urls = [
//   'https://api.example.com/data1',
//   'https://api.example.com/data2',
//   'https://api.example.com/data3',
//   'https://api.example.com/data4',
// ];

// Promise.all(urls.map(fetchData))
//   .then((results) => {
//     console.log('所有请求都完成了：', results);
//   })
//   .catch((error) => {
//     console.error('请求过程中出现了错误：', error);
//   });

//   console.log(urls.map(fetchData),'promises')
// function promiseAll(promises){
//   return new Promise((resolve,reject) => {
//     let count = 0
//     const results = []
//     for(const promise of promises){
//       Promise.resolve(promise).then((res) => {
//         results[count] = res
//         count++
//         if(count === promises.length) {
//           resolve(results)
//         }
//       }).catch((err) => {
//         reject(err)
//       })
//     }
    
//   })
// }
promiseAll([promise1,promise2,promise3]).then((results)=>{
  console.log(results)
}).catch((err)=>{
  console.log(err)
})

function myPromiseAll(promises){
  return new Promise((resolve,reject) => {
    let count = 0
    const results = []
    for(const promise of promises){
      Promise.resolve(promise).then((res)=>{
        results[count] = res
        count++
        if(count === promises.length) {
          resolve(results)
        }
      }).catch((err) => {
        reject(err)
      })
    }
  })
}




