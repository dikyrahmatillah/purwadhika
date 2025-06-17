function checkNum(num: number): string {
  if (num % 2 === 0) {
    return `${num} is Even`;
  } else {
    return `${num} is Odd`;
  }
}

console.log(checkNum(10)); // "Even"
console.log(checkNum(11)); // "Odd"

console.log(square(7)); // 49
function square(num: number): number {
  // function declaration (hoisting)
  return num * num;
}
console.log(square(5)); // 25

const square2 = function (num: number): number {
  // function expression (not hoisted)
  return num * num;
};

console.log(square2(6)); // 36

function multiply(a: number, b: number = 1): number {
  return a * b;
}
console.log(multiply(3, 4)); // 12

//rest parameter
function sum(x: number, y: number, ...rest: number[]): number {
  console.log(rest); // [5, 6, 7]
  return x + y;
}
console.log(sum(1, 2, 5, 6, 7)); // 3

//nested function
function getMessage(name: string): string {
  function sayHello(): string {
    return `Hello, ${name}!`;
  }

  function sayGoodbye(): string {
    return `Goodbye, ${name}!`;
  }
  return `${sayHello()} ${sayGoodbye()}`;
}
console.log(getMessage("Alice")); // "Hello, Alice! Goodbye, Alice!"

// closure function
function greeting(name: string): () => string {
  // This function returns another function that uses the variable `name`
  const defaultGreeting = "Hello";
  return function (): string {
    return `${defaultGreeting}, ${name}!`;
  };
}
const greetAlice = greeting("Alice");
console.log(greetAlice()); // "Hello, Alice!"

//currying function
function multiplyBy(factor: number): (num: number) => number {
  // This function returns another function
  return function (num: number): number {
    return num * factor;
  };
}
const double = multiplyBy(2);
console.log(double(5)); // 10
const triple = multiplyBy(3);
console.log(triple(5)); // 15

// recursive function
function countdown(fromNum: number): void {
  console.log(fromNum);
  const nextNum = fromNum - 1;
  if (nextNum > 0) {
    countdown(nextNum);
  }
}
countdown(5); // 5, 4, 3, 2, 1

//arrow function
const squareArrow = (num: number): number => num * num;
console.log(squareArrow(8)); // 64

console.log(isFinite(1 / 0)); // false
console.log(isFinite(1 / 2)); // true

const str: string = "100";
console.log(isNaN(parseInt(str))); // false
console.log(parseInt(str)); // 100
// radix = 10 (decimal) || 2 (binary) || 8 (octal) || 16 (hexadecimal) || // 36 (alphanumeric) || // 0 (auto detect)
