const arr: string[] = ["A", "B", "C", "D", "E"];
const arr2: string[] = new Array("F", "G", "H", "I", "J");
const arr3: string[] = Array.from("ABCDE");
const arr4: string[] = Array.of("A", "B", "C", "D", "E");
const arr5: string[] = Array(5).fill("A");
const arr6: string[] = Array(5).fill("A", 1, 3);
const arrNumStr: (number | string)[] = [1, 2, 3, 4, 5, "A", "B", "C", "D", "E"];
const arrNum: number[] = [2, 25, 64, 77, 330];

// console.log(arr);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);
// console.log(arr6);
// console.log(arrNumStr);

// build in methods array
console.log(arr.toString()); // "A,B,C,D,E"
console.log(arr.join("-")); // "A-B-C-D-E"

console.log(arr.push("F")); // 6 (length of the array after adding "F") // arr is now ["A", "B", "C", "D", "E", "F"]
console.log(arr.pop()); // "F" (removes the last element and returns it) // arr is now ["A", "B", "C", "D", "E"]

console.log(arr.shift()); // "A" (removes the first element and returns it) // arr is now ["B", "C", "D", "E"]
console.log(arr.unshift("A")); // (adding "A" at the beginning) // arr is now ["A", "B", "C", "D", "E"]

console.log(arr.length); // 5 (length of the array)
// console.log(arr.concat(arr2)); // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"] (concatenates arr and arr2)

arr.splice(2, 1, "Y"); // ["C"] (removes 1 element at index 2 and adds "Y") // arr is now ["A", "B", "Y", "D", "E"]
console.log(arr); // ["A", "B", "Y", "D", "E"]

// console.log(arr.splice(2, 1, "Y"));

console.log(arrNum.sort((a, b) => a - b)); // [2, 25, 64, 77, 330] (sorts the array in ascending order)
console.log(arrNum.sort((a, b) => b - a)); // [330, 77, 64, 25, 2] (sorts the array in descending order)
console.log(arrNum.sort()); // [2, 25, 330, 64, 77] (sorts the array in lexicographical order)

console.log(arr2.reverse()); // ["J", "I", "H", "G", "F"] (reverses the order of the elements in arr2)

console.log(arrNum.filter((v) => v % 2 === 0)); // [2, 64, 330] (filters the array to include only even numbers)

console.log(arrNum.find((v) => v == 77)); // 77 (finds the first element that is equal to 77)
console.log(arrNum.findIndex((v) => v == 77)); // 3 (finds the index of the first element that is equal to 77)
console.log(arrNum.findIndex((v) => v == 1)); // -1 (returns -1 if no element is found)

console.log(arrNum.every((v) => v > 0)); // true (checks if all elements are greater than 0)
console.log(arrNum.some((v) => v < 100)); // true (checks if at least one element is greater than 100)

// looping through arrays

const fruits: string[] = ["Apple", "Plum", "Cherry", "Date", "Elderberry"];

// fruits.forEach((value) => {
//   console.log(value.toUpperCase());
// });

for (let fruit of fruits) {
  console.log(fruit.toUpperCase());
}

console.log(fruits[3]); // "Date" (accessing the element at index 3)

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i].toUpperCase());
}
