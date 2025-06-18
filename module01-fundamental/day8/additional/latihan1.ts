class Car {
  brand: string;
  year: number;
  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }

  start(): void {
    console.log("Car Started");
  }
}

const myCar = new Car("Toyota", 2020);
console.log(myCar.brand);
console.log(myCar.year);
myCar.start();
