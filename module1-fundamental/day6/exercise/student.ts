interface IStudent {
  name: string;
  email: string;
  age: Date;
  score: number;
}

const students: IStudent[] = [
  {
    name: "Erik",
    email: "erik@gmail.com",
    age: new Date("2002-9-8"),
    score: 90,
  },
  {
    name: "Septi",
    email: "septi@gmail.com",
    age: new Date("1999-12-22"),
    score: 77,
  },
  {
    name: "Hasan",
    email: "hasan@gmail.com",
    age: new Date("2005-3-1"),
    score: 85,
  },
];

function studentData(students: IStudent[]) {
  const scores: number[] = students.map((student) => student.score); // [90, 77, 85]
  const ages: number[] = students.map(
    (student) => new Date().getFullYear() - student.age.getFullYear()
  );

  function stats(arr: number[]) {
    return {
      Highest: Math.max(...arr), // Math.max()
      Lowest: Math.min(...arr),
      Average: arr.reduce((prev, curr) => prev + curr) / arr.length,
    };
  }

  return {
    Score: stats(scores),
    Age: stats(ages),
  };
}

console.log(studentData(students));
