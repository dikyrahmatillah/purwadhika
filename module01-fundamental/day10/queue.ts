class DriveThruQueue {
  private orders: { plate: string; menu: string; passTime: number }[] = [];

  public order(plate: string, menu: string, passTime: number) {
    this.orders.push({ plate, menu, passTime });
  }
  public passtime(serve: number) {
    this.orders.forEach((el) => {
      el.passTime = el.passTime - serve;
    });
  }
  public readyOrders() {
    for (let i = this.orders.length - 1; i >= 0; i--) {
      if (this.orders[i].passTime <= 0) {
        const plate = this.orders[i].plate;
        this.orders.splice(i, 1);
        return plate;
      }
    }
  }
}

const driveThru = new DriveThruQueue();
driveThru.order("A123", "Burger", 5);
driveThru.order("B456", "Fries", 2);
driveThru.passtime(3);

console.log(driveThru.readyOrders()); //["B456"]

driveThru.passtime(2);
console.log(driveThru.readyOrders()); //["A123"]
