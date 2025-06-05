class Product {
  constructor(public name: string, public price: number) {}
}

class Transaction {
  public products: Product[] = [];
  public total: number = 0;

  addToCart(product: Product) {
    this.products.push(product);
    this.total += product.price;
    console.log(`Added ${product.name}`);
  }

  showTotal(): string {
    return `Current Transaction = ${this.total}`;
  }

  checkout(): string {
    return `
        Total: ${this.total}
        Product: ${this.products.map((p) => p.name).join(", ")}
        Quantity: ${this.products.length}`;
  }
}

const product1 = new Product("book", 150000);
const product2 = new Product("pen", 25000);
const product3 = new Product("pencil", 20000);

const transaction = new Transaction();

transaction.addToCart(product1);
transaction.addToCart(product2);
transaction.addToCart(product3);

console.log(transaction.showTotal());
console.log(transaction.checkout());
