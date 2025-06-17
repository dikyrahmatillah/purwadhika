const inputNum: number = 100000;
let numStr: string = inputNum.toString();
let result: string = "";

for (let i = numStr.length - 1, count = 1; i >= 0; i--, count++) {
  result = numStr[i] + result;
  if (i > 0 && count % 3 === 0) {
    result = "." + result;
  }
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

// const inputNum: number = 100000;
// const formatted = inputNum.toLocaleString('id-ID');
// console.log(`Rp. ${formatted},00`);
