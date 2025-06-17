let num: number = 4;
let factorial: number = num;
let sumX: string = "";
while (num >= 2) {
  sumX += num + " x ";
  factorial = factorial * --num;
}
console.log(`${sumX}1 = ${factorial}`);
