// function concat(arr: string[]) {
//   let str: string = "";
//   arr.forEach((el, index) => {
//     if (index < arr.length - 1) {
//       str += el + ",";
//     } else {
//       str += " and " + el;
//     }
//   });
//   return str;
// }

// function concat(arr: string[]) {
//   return arr.slice(0, -1).join(",") + " and " + arr[arr.length - 1];
// }

function concat(arr: string[]) {
  const lastItem = arr.pop();
  return arr.join(",") + ", and " + lastItem;
}

console.log(concat(["apple", "banana", "cherry", "date"]));
