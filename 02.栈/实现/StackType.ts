import ListType from "../../Type/ListType";

interface StackType<T> extends ListType<T> {
  push(ele: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
}

export default StackType;
