interface Student {
  name: string;
  email: string;
}

const data1: Student[] = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const data2: Student[] = [
  { name: "Student 3", email: "student3@mail.com" },
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 4", email: "student1@mail.com" },
];

function merge(arr1: Student[], arr2: Student[]): Student[] {
  arr2.forEach((el) => {
    if (
      !arr1.some(
        (student) => student.name === el.name || student.email === el.email
      )
    )
      arr1.push(el);
  });
  return arr1;
}

console.log(merge(data1, data2));
