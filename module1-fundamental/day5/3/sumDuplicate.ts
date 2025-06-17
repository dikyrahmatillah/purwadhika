// function sumDuplicate(arr: number[]) {
//   return arr
//     .filter((num, i, a) => a.indexOf(num) !== i)
//     .reduce((sum, num) => sum + num, 0);
// }

function sumDuplicate(arr: number[]): number {
  const counts: { [key: number]: number } = {};
  let sum = 0;

  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  console.log(counts);

  for (const num in counts) {
    if (counts[num] > 1) {
      sum += parseInt(num) * counts[num];
    }
  }

  return sum;
}

const arr = [10, 20, 40, 10, 50, 30, 10, 60, 10, 20];
console.log(sumDuplicate(arr)); // Will output 40

// function sumDuplicate(arr: number[]): number {
//   const counts: { [key: number]: number } = {};
//   // const counts: number[] = [];
//   let sum = 0;

//   for (const num of arr) {
//     // console.log(counts[num] || 0);
//     counts[num] = (counts[num] || 0) + 1;
//   }

//   console.log(counts);

//   for (const num in counts) {
//     if (counts[num] > 0) {
//       sum += parseInt(num) * counts[num];
//     }
//   }
