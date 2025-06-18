// contoh 1 : antrian gacoan

class GacoanQueue {
  private queue: string[] | any = [];

  public enqueue(name: string) {
    this.queue.push(name);
  }

  public dequeue() {
    return this.queue.shift();
  }

  public lastQueue() {
    return this.queue[this.queue.length - 1];
  }

  public middleQueue(): string {
    const length = this.queue.length;
    const mid = Math.floor(length / 2);

    if (length % 2 === 0) {
      return this.queue[mid - 1] + this.queue[mid] / 2;
    } else {
    }
  }
}

const queue = new GacoanQueue();
queue.enqueue("Budi");
queue.enqueue("Bambang");
queue.enqueue("Ani");
queue.enqueue("Joko");
queue.enqueue("Rudi");

console.log("Antrian pertama : ", queue.dequeue());
console.log("Antrian tengah : ", queue.middleQueue());
console.log("Antrian terakhir : ", queue.lastQueue());
