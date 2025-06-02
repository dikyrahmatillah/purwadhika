let word: string = "Hello, World!";
let number: number = 113;
let isFalse: boolean = false;
let nothing: null = null;
let notDefined: undefined = undefined;
// let bigNumber: bigint = 1234567890123456789012345678901234567890n; //BigInt literals are not available when targeting lower than ES2020
let symbol: symbol = Symbol("unique");

// console.log(word); //
// console.log(word.toUpperCase());
// console.log(word.toLowerCase());
// console.log(word.replace("o", "a"));
// console.log(word.slice(0, 5));
// console.log(word.substring(0, 5));
// console.log(word.toUpperCase().replace("HELLO", "hi"));

const name: string = "Winston";
const message: string = "Hello ".concat(name);
const message2: string = "Hello " + name;
const message3: string = `Hello ${name}`;

// console.log(message);
// console.log(message2);
// console.log(message3);

const phone: string = "0123456789"; // Phone number as a string because it may start with a zero

const num: number = 321;
console.log(num.toString()); // Convert number to string
console.log(String(num)); // Convert number to string using String constructor
console.log(num.toExponential()); // Convert number to exponential notation

const phi: number = 3.141592653589793; // The golden ratio
console.log(phi.toFixed(2)); // Convert number to fixed-point notation rounded up when 6
console.log(phi.toPrecision(4)); // Convert number to a string with a specified precision

const nilai: string = "1000";
console.log(Number(nilai)); // Convert string to number
console.log(parseInt(nilai)); // Convert string to integer
console.log(+nilai); // Convert string to number using unary plus operator
