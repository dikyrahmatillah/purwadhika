// for (let i: number = 1; i <= 10; i++) {
//   console.log("Hello World " + i);
// }

// while loop usually used when the number of iterations is not known beforehand
// let j: number = 10;
// while (j > 0) {
//   console.log(`Hello World ${j--}`);
// }

// do while loop is guaranteed to run at least once
// let k: number = 1;
// do {
//   console.log(`Hello World ${k}`);
//   k++;
// } while (k <= 10);

// let sum: number = 0;

// while (true) {
//   console.log(++sum);
//   if (sum == 10) {
//     break; // Exit the loop when sum reaches 10
//   }
// }

// continue statement skips the current iteration and continues with the next one
// for (let i: number = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue; // Skip even numbers
//   }
//   console.log(`Hello World ${i}`); // This will only print odd numbers
// }

for (let i: number = 1; i <= 5; i++) {
  let asterisks: string = "";
  for (let j: number = 1; j <= 5; j++) {
    asterisks += "*"; // Append an asterisk for each column
  }
  console.log(asterisks); // Print the row of asterisks
}
