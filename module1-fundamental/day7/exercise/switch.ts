interface Person {
  name: string;
  age: number;
}

function switchKey(arr: Person[]): any[] {
  let result: any[] = [];
  for (let person of arr) {
    const swapped: any = {};
    for (const key in person) {
      swapped[person[key as keyof Person]] = key;
    }
    result.push(swapped);
  }

  return result;
}

console.log(
  switchKey([
    { name: "David", age: 20 },
    { name: "Lucy", age: 23 },
  ])
);

// function switchKey(arr: Person[]): any[] {
//   let result: any[] = [];
//   arr.forEach((el) => {
//     const swapped: any = {};
//     for (const key in el) {
//       swapped[el[key as keyof Person]] = key;
//     }
//     result.push(swapped);
//   });

//   return result;
// }
