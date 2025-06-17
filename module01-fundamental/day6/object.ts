interface ICar {
  brand: string;
  model: string;
  price: number;
}

const car: ICar = {
  brand: "BMW",
  model: "M135i xDrive",
  price: 80000000000,
};

console.log(car);

interface IPerson {
  name: string;
  age: number;
  hobbies?: string[]; // Optional property
  address?: {
    city: string;
    province: string;
  }; // Optional nested object
  greet: () => void;
  greeting?: string; // Optional getter
}

const person: IPerson = {
  name: "Ara",
  age: 25,

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },

  get greeting(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

person.hobbies = ["reading", "travelling", "watching movies"];
person.name = "Ara Ara";
person.address = {
  city: "Bandung",
  province: "West Java",
};
delete person.hobbies;

// console.log(person);
// console.log(person.name);
// console.log(person["age"]);
// console.log(person.greet());
// console.log(person.greeting); // using the getter
// console.log(person.hobbies);
// console.log(person.address?.city); // Optional chaining to avoid error if address is undefined

for (let key in person) {
  console.log(`${key}: ${person[key as keyof IPerson]}`);
}

// destructuring
const { name, age, hobbies, address, greeting } = person;
console.log(name); // Ara Ara
console.log(age); // 25
console.log(hobbies); // undefined, because hobbies was deleted
console.log(address?.city); // Bandung, using optional chaining to avoid error if address is undefined
console.log(address?.province); // West Java, using optional chaining to avoid error if address is undefined
console.log(greeting); // Hello, my name is Ara Ara and I am 25 years old.
console.log(person.greet()); // Hello, my name is Ara Ara and I am 25 years old.

const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr; // Destructuring with rest operator
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

const arr1 = [1, 2, 3];
const arr2 = arr;
arr2.push(6); // Modifying arr2 will also modify arr1 because they reference the same array
console.log(arr1); // [1, 2, 3, 6]

const arrrCopy = [...arr1]; // Creating a shallow copy of arr1

console.log(Object.keys(person)); // ['name', 'age', 'greet', 'greeting', 'hobbies', 'address']
// console.log(Object.values(person)); // ['Ara Ara', 25, ƒ, 'Hello, my name is Ara Ara and I am 25 years old.', undefined, {city: 'Bandung', province: 'West Java'}]
// console.log(Object.entries(person)); // [['name', 'Ara Ara'], ['age', 25], ['greet', ƒ], ['greeting', 'Hello, my name is Ara Ara and I am 25 years old.'], ['hobbies', undefined], ['address', {city: 'Bandung', province: 'West Java'}]]
// console.log(Object.hasOwn(person, "name")); // true, checks if the property exists in the object
// console.log(Object.hasOwn(person, "hobbies")); // false, because hobbies was deleted
// console.log(Object.hasOwn(person, "address")); // true, because address is defined
