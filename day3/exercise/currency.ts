const inputNum: number = 100000;
let numStr: string = inputNum.toString();
let result: string = "";
let count: number;

for (let i = numStr.length - 1, count = 0; i >= 0; i--, count++) {
  if (count > 0 && count % 3 === 0) {
    result = "." + result;
  }
  result = numStr[i] + result;
}

console.log(`Rp. ${result},00`);

// const inputNum: number = 10000000000000;
// let x: number = inputNum.toString().length;
// let result: string = "";

// while (x > 3) {
//   result += ".000";
//   x -= 3;
// }
// console.log(`Rp. ${inputNum.toString().slice(0, x) + result},00`);
