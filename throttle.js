function throttle(func,delay){
  let timer;
  return function(){
    const context = this
    const args = arguments
    if(!timer){
      func.apply(context,args)
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
      }, delay);
    }
  }
}