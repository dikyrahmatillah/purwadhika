// <  18.5 = less
//    18.5 - 24.9 = ideal
//    25 - 29.9 = overweight
//    30.0 - 39.9 = very overweight
// >  39.9  = obesity

function calculateBMI(weight: number, height: number): string {
  const bmi: number = weight / (height * height);

  let category: string;
  if (bmi < 18.5) {
    category = "less weight";
  } else if (bmi <= 24.9) {
    category = "ideal";
  } else if (bmi <= 29.9) {
    category = "overweight";
  } else if (bmi <= 39.9) {
    category = "very overweight";
  } else {
    category = "obesity";
  }
  return `${bmi.toFixed(1)} = ${category}`;
}

console.log(calculateBMI(55, 1.7));
