let a = 5;
let b = 10;

a = a ^ b; // 现在 a = 15 (5 ^ 10) 
console.log(a)
b = a ^ b; // 现在 b = 5 (15 ^ 10)
a = a ^ b; // 现在 a = 10 (15 ^ 5)

console.log(`a: ${a}, b: ${b}`); // 输出 a: 10, b: 5

