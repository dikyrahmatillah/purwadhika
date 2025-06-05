function newArr(maxSize: number, str: string) {
  return str.split(",", maxSize);
}

console.log(newArr(5, "5, 10, 24, 3, 6, 7, 8"));

// function newArr(maxSize: number, str: string) {
//   // const arr: number[] = [];
//   return str.split(",", maxSize);
//   // for(let i=0; i < maxSize; i++){
//   //     arr.push()
//   // }
// }
