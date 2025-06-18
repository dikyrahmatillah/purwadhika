// const user = {
//   name: "Mika",
//   email: "mika@mail.com",
//   roles: ["Developer", "Illustrator"],
// };

// Object.freeze(user);

// user.name = "Shahnaz";
// user.roles.push("Doctor");

// console.log("Frozen user: ", user);

// const clonedUser = { ...user };
// clonedUser.name = "Amelia";

// console.log("Cloned User", clonedUser);

// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello, my name is ${this.name}`;
//   }
// }

// const person1 = new Person("Davina");
// console.log(person1.greet());

// const personPrototype = {
//   greet: function () {
//     return `HI, I'm ${this.nama}`;
//   },
// };

// const person2 = Object.create(personPrototype);
// person2.nama = "Erina";
// console.log(person2.greet());

// console.log(person1 instanceof Person);
// console.log(Object.getPrototypeOf(person2) === personPrototype);

class calculator {
  value: number;
  constructor() {
    this.value = 0;
  }

  regularMethod() {
    setTimeout(function () {
      console.log(this.value);
    }, 100);

    setTimeout(() => {
      console.log(this.value);
    }, 100);
  }
}

const calc = new calculator();
calc.regularMethod();
