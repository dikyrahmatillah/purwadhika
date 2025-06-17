const num: number = 11;
let isPrime: boolean = true;
if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log(isPrime ? "prime" : "not prime");

// const num: number = 11;
// if (num <= 1) {
//   console.log("prime");
// } else {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       console.log("not prime");
//       break;
//     }
//   }
//   console.log("prime");
// }
