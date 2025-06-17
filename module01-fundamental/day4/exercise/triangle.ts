//Triangle
// 01
// 02 03
// 04 05 06
// 07 08 09 10

function triangle(numInput: number) {
  let current = 1;
  let row = 1;

  while (current <= numInput) {
    let line = "";
    for (let i = 1; i < row && current <= numInput; i++) {
      if (current < 10) {
        line += "0" + current + " ";
      } else {
        line += current + " ";
      }
      current++;
    }
    console.log(line.trim());
    row++;
  }
}
triangle(10);

// function triangle(num: number) {
//   let result: string = "";
//   for (let i = 1; i <= num; i++) {
//     if (i < 10) {
//       result += "0" + i + " ";
//     } else {
//       result += i + " ";
//     }
//     console.log(result);
//   }
// }

// triangle(10);
