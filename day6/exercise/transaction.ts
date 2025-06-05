class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  total: number;
  product: {
    allProduct: string[];
    qty: number;
  };

  constructor(total: number, product: { allProduct: string[]; qty: number }) {
    this.total = total;
    this.product = product;
  }

  addToCart(product: Product) {
    this.product.allProduct.push(product.name);
    this.product.qty += 1;
    this.total += product.price;

    console.log(`Added ${product.name}`);
  }

  showTotal(): string {
    return `Current Transactions = ${this.total}`;
  }

  checkout(): string {
    return `
    Total: ${this.total}
    Product: ${this.product.allProduct.join(", ")}
    Quantity: ${this.product.qty}`;
  }
}

const product1 = new Product("book", 150000);
const product2 = new Product("pen", 25000);
const product3 = new Product("pencil", 20000);

const transaction = new Transaction(0, { allProduct: [], qty: 0 });

transaction.addToCart(product1);
transaction.addToCart(product2);
transaction.addToCart(product3);

console.log(transaction.showTotal());
console.log(transaction.checkout());
