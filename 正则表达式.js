// const regex = /hello/;
// console.log(regex.test('world'))

// {m,n} 表示连续出现最少m次，最多n次
var regex = /a[123]b/g;
var string = 'a0b a1b a12b a3b'
console.log(string.match(regex))
// var regex = /ab{2,5}c/g;
// var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
// console.log( string.match(regex) ); 
// => ["abbc", "abbbc", "abbbbc", "abbbbbc"]
