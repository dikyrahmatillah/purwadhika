console.time("Loop");
// for (let i = 0; i < 10000000; i++) {}
// function printNumbers(num: number) {
//   for (let i = 0; i < num; i++) {
//     console.log(i);
//   }
//   for (let i = 0; i <= 10; i++) {
//     console.log(i);
//   }
// }

// printNumbers(10);

const matrix = [
  [1, 2],
  [3, 5],
];

console.log(matrix[0]);

function sumMatrix(matrixInput: number[][]) {
  let result = 0;
  for (let i = 0; i < matrixInput.length; i++) {
    for (let j = 0; j < matrixInput[i].length; j++) {
      result += matrixInput[i][j];
    }
  }
  return result;
}

function sumMatrixOptimized(matrixInput: number[][]) {
  const result = matrixInput.flat().reduce((acc, curr) => {
    return acc + curr;
  });
  return result;
}
console.log(sumMatrix(matrix));
console.timeEnd("Loop");

function reverseArray(arrayInput: any[]) {
  let reversed: any[] = [];

  for (let i = arrayInput.length - 1; i >= 0; i--) {
    reversed.push(arrayInput[i]);
  }

  return reversed;
}
// console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArrayOptimized(arrayInput: any[]) {
  let left: number = 0;
  let right: number = arrayInput.length - 1;
  while (left < right) {
    [arrayInput[left], arrayInput[right]] = [
      arrayInput[right],
      arrayInput[left],
    ];
    left++;
    right--;
  }
  return arrayInput;
}

// console.log(reverseArrayOptimized([1, 2, 3, 4, 5]));

function linearSearch(dataCollection: number[], target: number) {
  let result;
  for (let i = 0; i < dataCollection.length; i++) {
    if (dataCollection[i] === target) {
      result = dataCollection[i];
    }
  }

  if (result) {
    return result;
  } else {
    return "Not found";
  }
}
// console.log(linearSearch([12, 3, 5, 756, 32, 5, 7, 8, 123, 64, 7, 2], 8));

function binarySearch(dataCollection: number[], target: num) {
  let low = 0;
  let high = dataCollection.length - 1;
  while (low < high) {
    const mid = Math.floor((high + low) / 2);
    if (dataCollection[mid] === target) {
      return mid;
    } else if (dataCollection[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23));
