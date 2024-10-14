
function debounce(func,wait){
  let timeout;
  return function(){
    const context = this;
    const args = arguments;
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context,args)
    },wait);
  }
}
// 假设有一个搜索的输入框
const searchInput = document.querySelector('search')
searchInput.addEventListener('input',debounce(function(e){
  console.log('search',e.target.value)
},500))