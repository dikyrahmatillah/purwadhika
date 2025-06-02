let num1: number = 47;
let num2: number = 27;
let num3: number = 18;

// const smallest: number = Math.min(num1, num2, num3);
// const highest: number = Math.max(num1, num2, num3);
// const middle: number = num1 + num2 + num3 - smallest - highest;
// console.log(`${smallest} > ${middle} > ${highest}`);

if (num1 < num2) {
  const temp: number = num1; // 42
  num1 = num2; // 27
  num2 = temp; // 42
}

if (num2 < num3) {
  const temp: number = num2;
  num2 = num3;
  num3 = temp;
}

if (num3 < num1) {
  const temp: number = num3;
  num3 = num1;
  num3 = temp;
}

if (num1 < num2) {
  const temp: number = num1;
  num1 = num2;
  num2 = temp;
}

console.log(`${num1} > ${num2} > ${num3}`);

// console.log(one + " > " + two + " > " + three);

// for(let i = 1; i < 3; i++) {
//   if(num1 < num2){

//   }
// }

// for (let j = 0; j < araAra.length - 1; j++) {
//   let i: number = j;
//   while (i < araAra.length - 1) {
//     if (araAra[j].charCodeAt(0) < araAra[i + 1].charCodeAt(0)) {
//       const temp: string = araAra[j];
//       araAra[j] = araAra[i + 1];
//       araAra[i + 1] = temp;
//     }
//     i++;
//   }
// }
// console.log(araAra);

// let one: number = 0;
// let two: number = 0;
// let three: number = 0;

// if (num1 < num2 && num1 < num3) {
//   one = num1;
// } else if (num1 < num2 || num1 < num3) {
//   two = num1;
// } else {
//   three = num1;
// }

// if (num2 < num1 && num2 < num3) {
//   one = num2;
// } else if (num2 < num1 || num2 < num3) {
//   two = num2;
// } else {
//   three = num2;
// }

// if (num3 < num1 && num3 < num2) {
//   one = num3;
// } else if (num3 < num1 || num3 < num2) {
//   two = num3;
// } else {
//   three = num3;
// }
