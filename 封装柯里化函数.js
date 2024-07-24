// 求一个长方形面积的函数
function getArea(width, height) {
  return width * height;
}
// 如果我们碰到的长方形的宽老是10
const area1 = getArea(10, 20);
const area2 = getArea(10,30)
const area3 = getArea(10,70)


// 我们可以使用闭bao柯里化这个计算面积的函数
function getArea(width){
  return function(height){
    return width * height
  }
}

const getTenWidthArea = getArea(10)
// 之后碰到宽度为10的就可以这么计算
const area11 = getTenWidthArea(20)

console.log(area11)
//  如果遇到宽度偶尔改变也可以轻松复用
const getTwentyWidthArea = getArea(20)

const area12 = getTwentyWidthArea(20)

console.log(area12)