// 作为线性结构的统一封装的接口
interface ListType<T> {
  isEmpty(): boolean;
  size(): number;
}

export default ListType;
