const arrNum: number[] = [1, 2, 3, 4, 5];
const arrNum2: number[] = [1, 2, 3, 4, 5];

const obj1 = { name: "Ara" };
const obj2 = { name: "Ara" };

console.log(arrNum == arrNum2); // false, because they are different references
console.log(obj1 == obj2); // false, because they are different references

const name1 = "ara";
const name2 = "ara";

console.log(name1 === name2); // true, because they are the same value

console.log(typeof arrNum); // "object", because arrays are objects in JavaScript
console.log(typeof null); // "object", because null is considered an object in JavaScript
