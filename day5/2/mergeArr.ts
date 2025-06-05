function mergeArr(arr1: number[], arr2: number[]) {
  return arr1.concat(arr2);
}

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [3, 4, 5];
console.log(mergeArr(arr1, arr2));
