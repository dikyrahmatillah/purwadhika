// function myFunc(arr: number[], newNum: number) {
//   if (arr.indexOf(newNum) === -1) arr.push(newNum);
//   return arr;
// }

// console.log(myFunc([1, 2, 3, 4], 4));

// function myFunc(arr: number[], newNum: number) {
//   if (!arr.find((v) => v == newNum)) arr.push(newNum);
//   return arr;
// }

// function myFunc(arr: number[], newNum: number) {
//   const index = arr.findIndex((el) => el > newNum);
//   if (index === -1) {
//     arr.splice(arr.length, 0, newNum);
//   } else {
//     arr.splice(index, 0, newNum);
//   }
//   return arr;
// }

function myFunc(arr: number[], newNum: number) {
  return !arr.find((v) => v == newNum);
}

console.log(myFunc([1, 2, 3, 4, 10], 2));
