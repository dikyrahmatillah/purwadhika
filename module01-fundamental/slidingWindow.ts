function numberOfAlternatingGroups(colors: number[]): number {
  const length = colors.length;
  let counter = 0;
  let wrong = 0;
  for (let j = 0; j < 2; j++) {
    if (colors[j] === colors[(j + 1) % length]) wrong++;
  }
  for (let i = 0; i < length; i++) {
    // console.log(wrong);
    if (wrong === 0) counter++;
    console.log(
      `${(i + 2) % length}(${colors[(i + 2) % length]}) | ${(i + 3) % length}(${
        colors[(i + 3) % length]
      }) | ${i}(${colors[i]}) | ${(i + 1) % length}(${
        colors[(i + 1) % length]
      }) = ${wrong}  (${colors[i]} ${colors[(i + 1) % length]} ${
        colors[(i + 2) % length]
      })`
    );
    if (colors[(i + 2) % length] === colors[(i + 3) % length]) wrong++;
    // console.log(wrong);
    if (colors[i] === colors[(i + 1) % length]) wrong--;
    // console.log(wrong);
    // console.log("------------");
  }
  return counter;
}

console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0, 0]));

// 1(1) | 2(0) | 0(0) | 1(1) = 0  (0 1 0)
// 2(0) | 3(1) | 1(1) | 2(0) = 0  (1 0 1)
// 3(1) | 4(0) | 2(0) | 3(1) = 0  (0 1 0)
// 4(0) | 5(0) | 3(1) | 4(0) = 0  (1 0 0)
// 5(0) | 0(0) | 4(0) | 5(0) = 1  (0 0 0)
// 0(0) | 1(1) | 5(0) | 0(0) = 1  (0 0 1)

// 2(0) | 3(1) | 0(0) | 1(1) = 0  (0 1 0)
// 3(1) | 4(0) | 1(1) | 2(0) = 0  (1 0 1)
// 4(0) | 5(0) | 2(0) | 3(1) = 0  (0 1 0)
// 5(0) | 0(0) | 3(1) | 4(0) = 1  (1 0 0)
// 0(0) | 1(1) | 4(0) | 5(0) = 2  (0 0 0)
// 1(1) | 2(0) | 5(0) | 0(0) = 1  (0 0 1)
