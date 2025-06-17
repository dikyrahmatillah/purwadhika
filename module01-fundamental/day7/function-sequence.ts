// const sayMantap = (name: string): string => {
//   return `Mantap ${name}`;
// };

// const sayHello = (name: string): string => {
//   return `Hello ${name}`;
// };

// const sayGoodbye = (name: string): string => {
//   return `Goodbye ${name}`;
// };

// sayMantap("Budi");
// sayHello("Budi");
// sayGoodbye("Budi");

console.log(1);
console.log(2);

setTimeout(() => {
  console.log("ASYNC2!");
}, 20);
// Heavy process
for (let i = 0; i < 1000_000_000; i++) {}

setTimeout(() => {
  console.log("ASYNC!");
}, 0);
console.log(3);
console.log(4);
console.log(5);
