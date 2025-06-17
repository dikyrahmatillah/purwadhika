function duplicate(arr: number[]) {
  const newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.filter((v) => v == arr[i]).length > 1) {
      if (!newArr.find((v) => v == arr[i])) {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}

// function duplicate(arr: number[]): number[] {
//   return arr.filter((v, idx) => arr.indexOf(v) !== idx);
// }

const arr: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];
// console.log(arr.indexOf(3, 3));
// console.log(arr.lastIndexOf(3, 6));
console.log(duplicate(arr));

//   return arr.filter((value, index) => {
//     // console.log(
//     //   index +
//     //     " | " +
//     //     arr.indexOf(value) +
//     //     " | " +
//     //     arr.lastIndexOf(value, index - 1) +
//     //     " | " +
//     //     arr.lastIndexOf(value, index) +
//     //     " | " +
//     //     arr.lastIndexOf(value) +
//     //     " | " +
//     //     value
//     // );
//     return (
//       index !== arr.indexOf(value) &&
//       arr.indexOf(value) === arr.lastIndexOf(value, index - 1)
//       //   arr.indexOf(value) !== index && arr.indexOf(value) === index - 1
//     );
//   });
