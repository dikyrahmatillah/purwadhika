function janken(sign: string) {
  const handSign: string[] = ["Rock", "Paper", "Scissor"];
  const playerIdx: number = handSign.indexOf(sign);
  const computerIdx: number = Math.floor(Math.random() * 3);

  return (playerIdx + 1) % 3 === computerIdx ? "Win" : "Lose";
}

console.log(janken("Paper"));

// function janken(sign: string) {
//   const rand = Math.floor(Math.random() * 3);
//   const handSign: string[] = ["Rock", "Paper", "Scissor"];
//   const idx: number = handSign.indexOf(sign);
//   if (idx < rand) {
//     return "Win";
//   } else if (idx === 2 && rand === 0) {
//     return "Win";
//   }
//   return "Lose";
// }
