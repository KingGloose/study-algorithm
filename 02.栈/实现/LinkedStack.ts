import StackType from "./StackType";

class LinkedStack<T> implements StackType<T> {
  push(ele: T): void {
    throw new Error("Method not implemented.");
  }
  pop(): T | undefined {
    throw new Error("Method not implemented.");
  }
  peek(): T | undefined {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
}

function getStack(stack: StackType<any>) {
    
}

export {}