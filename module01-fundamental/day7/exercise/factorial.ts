function factorial(inputNumber: number) {
  let multiplication = inputNumber;
  let countNum: string = String(inputNumber) + " x ";
  for (let i = inputNumber - 1; i > 1; --i) {
    console.log(i);
    multiplication *= i;
    countNum += i + " x ";
  }
  console.log(multiplication, countNum);
  return `${inputNumber}! = ${countNum}1 = ${multiplication}`;
}

console.log(factorial(5));
