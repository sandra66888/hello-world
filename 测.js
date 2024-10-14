function convertToArray(arrayLike) {
  console.log(arrayLike[0],'000')
  const arr = [];
  for (let i = 0; i < arrayLike.length; i++) {
      arr.push(arrayLike[i]);
  }
  return arr;
}

// 测试函数
function test() {
  console.log(convertToArray(arguments)); // 输出 [1, 2, 3]
}

test(1, 2, 3);
