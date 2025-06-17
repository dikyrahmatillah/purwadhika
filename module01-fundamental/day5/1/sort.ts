function sort(arr: number[]) {
  arr.sort((a, b) => a - b);

  return {
    lowest: arr[0],
    highest: arr[arr.length - 1],
    average: arr.reduce((prev, current) => prev + current) / arr.length,
  };
}

function sort2(arr: number[]) {
  let sum: number = 0;
  const length: number = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    sum += arr[i];
  }

  return {
    lowest: arr[0],
    highest: arr[length - 1],
    average: sum / length,
  };
}

function sort3(arr: number[]) {
  return {
    lowest: Math.min(...arr),
    highest: Math.max(...arr),
    average: arr.reduce((prev, current) => prev + current) / arr.length,
  };
}

console.log(sort3([12, 5, 23, 18, 4, 45, 32]));
