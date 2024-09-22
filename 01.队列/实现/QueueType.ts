import ListType from "../../Type/ListType";

interface QueueType<T> extends ListType<T> {
  enqueue(ele: T): void;
  dequeue(): T | undefined;
  front(): T | undefined;
}

export default QueueType;
