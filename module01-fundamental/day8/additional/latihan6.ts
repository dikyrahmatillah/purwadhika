class PaymentProcessor {
  processPayment(amount: number): void {
    throw new Error("Eworr");
  }
}
class PaypalProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing $${amount} payment through Paypal`);
  }
}

class StripeProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing $${amount} payment through Stripe`);
  }
}
// const processors = new PaymentProcessor();
// processors.processPayment(100);

const paypalProcessor = new PaypalProcessor();
const stripeProcessor = new PaypalProcessor();

paypalProcessor.processPayment(50);
stripeProcessor.processPayment(70);

const processor = [paypalProcessor, stripeProcessor];
processor.forEach((processor) => processor.processPayment(100));
