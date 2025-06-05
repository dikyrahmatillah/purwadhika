function difference(arr1: number[], arr2: number[]) {
  const newArr = arr1.filter((v, index) => arr2.indexOf(v) == -1);
  const newArr2 = arr2.filter((v, index) => arr1.indexOf(v) == -1);

  return newArr.concat(newArr2);
}

console.log(difference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// console.log([3, 4, 5, 6, 7].indexOf(2));
