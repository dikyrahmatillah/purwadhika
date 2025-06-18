class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, My name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name: string, public jobTitle: string) {
    super(name);
  }

  greet() {
    console.log(
      `Hello, My name is ${this.name} and i work as Software Engineer`
    );
  }
}

let person = new Person("Rosemary");
person = new Employee("Kimi", "Software Developer");

person.greet();
// employee.greet();
