// 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
//

const num: number = 15;
let fibonacci: number = 1;
let x: number = 0;
for (let i = 1; i < num; i++) {
  const y: number = x + fibonacci;
  x = fibonacci;
  fibonacci = y;
}
console.log(fibonacci);
