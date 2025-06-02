const text: string = "hello world! hello, world";
let result: string = "";

for (let i = 0; i < text.length; i++) {
  if (i === 0 || text[i - 1] === " ") {
    result += text[i].toUpperCase();
  } else {
    result += text[i];
  }
}
console.log(result);

// const text: string = "hello world";
// const split: string[] = text.split(" ");
// let result: string = "";

// for (let i = 0; i < split.length; i++) {
//   result += split[i].replace(split[i][0], split[i][0].toUpperCase()) + " ";
// }
// console.log(result.trim());
