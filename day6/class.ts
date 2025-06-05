// const obj1 = {
//   name: "Ara",
//   age: 25,
//   greet() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   },
// };

class Person {
  name: string;
  #email: string;
  age: number;
  static species: string = "Human";

  constructor(nama: string, surel: string, umur: number) {
    this.name = nama;
    this.#email = surel;
    this.age = umur;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1: Person = new Person("Ara", "ara@gmail.com", 25);
const person2: Person = new Person("Exa", "exa@gmail.com", 27);

for (let key in person1) {
  console.log(`${key}: ${person1[key as keyof Person]}`);
}

console.log(person1);
console.log(Person.species);

// Encapsulation

class Employee {
  #name: string = "";

  setName(nama: string) {
    if (nama.length <= 3) {
      throw new Error("Nama min 5 karakter");
    } else {
      this.#name = nama;
    }
  }
  getName(): string {
    return this.#name;
  }
}

// inheritance
const employee1 = new Employee();
employee1.setName("Ara");
console.log(employee1.getName()); // Ara

class Product {
  name: string;
  price: number;

  constructor(nama: string, harga: number) {
    this.name = nama;
    this.price = harga;
  }
}

class Book extends Product {
  author: string;

  constructor(nama: string, harga: number, penulis: string) {
    super(nama, harga);
    this.author = penulis;
  }
}

const book1 = new Book("Belajar TypeScript", 150000, "Ara");

console.log(book1 instanceof Book); // true
console.log(book1 instanceof Product); // true
console.log(book1 instanceof Person); // false
