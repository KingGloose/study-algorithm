// 二叉搜索树

class TreeNode {
  left: TreeNode | null;
  value: any;
  right: TreeNode | null;

  constructor(value: any) {
    this.value = value;
  }
}

class BSTree {
  // 根节点
  root: TreeNode | null;
  // 节点数
  count: number = 0;

  // 插入
  public insert(value: any) {
    // 如果没有根节点就创建
    if (!this.root) return (this.root = new TreeNode(value));
  }

  // 先序遍历: 优先访问根节点，之后开始访问左子树，再去访问右子树
  // 中序遍历：先访问左子树，再访问根节点，再访问右边子树
  // 后序遍历：先访问左子树，再访问右子树，再访问根节点
  // 层序遍历
  // 最大值
  // 最小值
  // 搜索
}
