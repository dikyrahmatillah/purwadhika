class Shape {
  getArea(): void {
    // return 0;
    throw new Error("Eworrr");
  }
}

class Rectangle extends Shape {
  p: number;
  l: number;
  constructor(p: number, l: number) {
    super();
    this.p = p;
    this.l = l;
  }

  getArea(): number {
    return this.p * this.l;
  }
}
class Circle extends Shape {
  constructor(public r: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.r ** 2;
  }
}

const rectangle = new Rectangle(5, 4);
const circle = new Circle(3);

console.log(rectangle.getArea());
console.log(circle.getArea());

const shapes = [rectangle, circle];
shapes.forEach((shape) => console.log(`Area: ${shape.getArea()}`));
