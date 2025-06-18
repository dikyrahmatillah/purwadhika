class Employee {
  constructor(
    private hour: number = 0,
    private salary1: number = 0,
    private salary2: number = 0
  ) {}

  addHours(hours: number): void {
    this.hour += hours;
  }

  salary(): number {
    if (this.hour > 6) {
      return this.salary1 * this.hour;
    } else {
      return this.salary2 * this.hour;
    }
  }
}

class FullimeEmployee extends Employee {
  constructor() {
    super(0, 100_000, 75_000);
  }
}

class ParttimeEmployee extends Employee {
  constructor() {
    super(0, 50000, 35000);
  }
}

const employee1 = new FullimeEmployee();
const employee2 = new ParttimeEmployee();
employee1.addHours(10);
console.log(employee1.salary());
employee2.addHours(7);
console.log(employee2.salary());
