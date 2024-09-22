import QueueType from "./QueueType";

class ArrayQueue<T> implements QueueType<T> {
  private data: T[] = [];

  enqueue(ele: T): void { this.data.push(ele); }
  dequeue(): T | undefined { return this.data.shift(); }
  front(): T | undefined { return this.data[0]; }
  isEmpty(): boolean { return this.data.length === 0; }
  size(): number { return this.data.length; }
}

// const aq = new ArrayQueue();
// aq.enqueue("ls");
// aq.enqueue("zs");
// aq.enqueue("zl");

// console.log(aq.dequeue(), aq.dequeue(), aq.dequeue());

export default ArrayQueue;
