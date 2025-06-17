console.log("Hello, World!");
const message = "This is my first JavaScript code!";
const count = 1;
const bigInt = 9007199254740990n;
const isTrue = true;
const noData = null;
let noAssigned;
const person = {
    name: "Andi",
    age: 26
};

console.log(typeof message); // string
console.log(typeof count); // number
console.log(typeof bigInt); // bigint
console.log(typeof isTrue); // boolean
console.log(typeof noData); // object (null is a special case in JavaScript)
console.log(typeof noAssigned); // undefined
console.log(typeof person); // object