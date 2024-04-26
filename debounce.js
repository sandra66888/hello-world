function debounce(fn,wait){
  let timeout = null;
  return function(...args){
    if(timeout){
      clearTimeout(timeout)
    }
    timeout = setTimeout(()=>{
      fn(args)
    },wait)
  }
}