class ArrayQueue<T> {
  private data: T[] = [];

  enqueue(ele: T): void {
    this.data.push(ele);
  }
  dequeue(): T | undefined {
    return this.data.shift();
  }
  front(): T | undefined {
    return this.data[0];
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  size(): number {
    return this.data.length;
  }
}

const lastRemaining = (n: number, m: number): number => {
  const arrayQueue = new ArrayQueue<number>();

  for (let i = 0; i < n; i++) arrayQueue.enqueue(i);

  while (arrayQueue.size() > 1) {
    for (let i = 1; i < m; i++) {
      arrayQueue.enqueue(arrayQueue.dequeue()!);
    }
    arrayQueue.dequeue();
  }

  return arrayQueue.front()!;
};

console.log(lastRemaining(10, 17));
