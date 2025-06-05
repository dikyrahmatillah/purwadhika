function myFunc(arr: number[]) {
  return arr.sort((a, b) => a - b)[1];
}

console.log(myFunc([5, 4, 1, 7, 2, 6]));
