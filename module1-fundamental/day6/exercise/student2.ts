interface IStudent {
  name: string;
  email: string;
  age: Date;
  score: number;
}

const student1: IStudent = {
  name: "Ara",
  email: "ara@gmail.com",
  age: new Date("2000-08-08"),
  score: 90,
};

const student2: IStudent = {
  name: "Exa",
  email: "exa@gmail.com",
  age: new Date("1999-12-22"),
  score: 77,
};

const student3: IStudent = {
  name: "Eza",
  email: "eza@gmail.com",
  age: new Date("2004-3-1"),
  score: 85,
};

function studentData(arrStudents: IStudent[]) {
  const scores: number[] = [];
  const ages: number[] = [];
  for (let arrStudent of arrStudents) {
    scores.push(arrStudent.score);
    ages.push(new Date().getFullYear() - arrStudent.age.getFullYear());
  }
  return {
    Score: {
      Highest: Math.max(...scores),
      Lowest: Math.min(...scores),
      Average: scores.reduce((prev, curr) => prev + curr) / scores.length,
    },
    Age: {
      Highest: Math.max(...ages),
      Lowest: Math.min(...ages),
      Average: ages.reduce((prev, curr) => prev + curr) / ages.length,
    },
  };
}

console.log(studentData([student1, student2, student3]));
