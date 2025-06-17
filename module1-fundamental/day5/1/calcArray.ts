function myFunc(arr1: number[], arr2: number[]) {
  return arr1.map((v, idx) => v + arr2[idx]);
}

console.log(myFunc([1, 2, 3], [3, 2, 1]));
