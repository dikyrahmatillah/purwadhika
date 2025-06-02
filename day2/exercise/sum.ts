const num: number = 5;
let sum: number = 0;
let sumStr: string = "";

for (let i: number = 1; i <= num; i++) {
  sum += i;
  sumStr += i !== num ? `${i} + ` : i;
}

console.log(`${sumStr} = ${sum}`);
