// 二叉搜索树

import { btPrint } from "hy-algokit";

class TreeNode {
  left: TreeNode | null = null;
  value: number;
  right: TreeNode | null = null;

  // 当前节点的父节点
  parent: TreeNode | null = null;

  // 当前节点是否是父节点的左节点
  get isLeft(): boolean {
    if (!this.parent) {
      console.log(`${this.value} 没有 parent`);
      return false;
    }
    return !!(this.parent.left === this);
  }

  // 当前节点是否是父节点的右节点
  get isRight(): boolean {
    if (!this.parent) {
      console.log(`${this.value} 没有 parent`);
      return false;
    }
    return !!(this.parent.right === this);
  }

  constructor(value: number) {
    this.value = value;
  }
}

class BSTree {
  // 根节点
  root: TreeNode | null;
  // 节点数
  count: number = 0;

  // 打印
  public print() {
    btPrint(this.root);
  }

  // 返回节点数
  public sizes() {
    return this.count;
  }

  // 插入
  public insert(value: number) {
    let node = this.root;
    const newNode = new TreeNode(value);

    // 如果没有根节点就创建
    if (!node) {
      this.root = newNode;
      return;
    }

    // 如果有根节点就查看左右树
    while (true) {
      if (node.value === value) break;
      if (node.value > value) {
        if (!node.left) {
          node.left = newNode;
          this.count++;
          break;
        } else {
          node = node?.left;
        }
      }
      if (node.value < value) {
        if (!node.right) {
          node.right = newNode;
          this.count++;
          break;
        } else {
          node = node?.right;
        }
      }
    }
  }

  // 先序遍历: 优先访问根节点，之后开始访问左子树，再去访问右子树
  public preOrderTraverse() {
    if (!this.root || this.count === 0) return console.log("无节点");
    this.preOrderTraverseNode(this.root);
  }
  private preOrderTraverseNode(node: TreeNode | null) {
    if (node) {
      console.log(node.value);
      this.preOrderTraverseNode(node.left);
      this.preOrderTraverseNode(node.right);
    }
  }

  // 先序遍历 - 非递归版
  public preOrderTraverseNoRecursion() {
    let stack: TreeNode[] = [];
    let current: TreeNode | null = this.root;

    while (current !== null || stack.length !== 0) {
      while (current !== null) {
        console.log(current?.value);
        stack.push(current);
        current = current?.left;
      }

      current = stack.pop()!.right;
    }
  }

  // 中序遍历：先访问左子树，再访问根节点，再访问右边子树
  public inOrderTraverse() {
    if (!this.root || this.count === 0) return console.log("无节点");
    this.inOrderTraverseNode(this.root);
  }
  private inOrderTraverseNode(node: TreeNode | null) {
    if (node) {
      this.inOrderTraverseNode(node.left);
      console.log(node.value);
      this.inOrderTraverseNode(node.right);
    }
  }

  // 后序遍历：先访问左子树，再访问右子树，再访问根节点
  public postOrderTraverse() {
    if (!this.root || this.count === 0) return console.log("无节点");
    this.postOrderTraverseNode(this.root);
  }
  private postOrderTraverseNode(node: TreeNode | null) {
    if (node) {
      this.inOrderTraverseNode(node.left);
      this.inOrderTraverseNode(node.right);
      console.log(node.value);
    }
  }

  // 层序遍历
  public levelOrderTraverse() {
    if (!this.root || this.count === 0) return console.log("无节点");
    const stack: TreeNode[] = [this.root];

    while (stack.length > 0) {
      const current = stack.shift();
      console.log(current?.value);

      if (current?.left) stack.push(current.left);
      if (current?.right) stack.push(current.right);
    }
  }

  // 最大值
  public getMax() {
    if (!this.root || this.count === 0) return console.log("无节点");
    const maxNode = this.getMaxNode(this.root);
    return maxNode.value;
  }
  // 后继节点: 寻找传入节点树中的最大值
  private getMaxNode(node: TreeNode) {
    let current = node;
    let parent: TreeNode | null = null;
    while (current && current.right) {
      parent = current;
      current = current.right;
      current.parent = parent;
    }
    return current;
  }

  // 最小值
  public getMin() {
    if (!this.root || this.count === 0) return console.log("无节点");
    const minNode = this.getMinNode(this.root);
    return minNode.value;
  }
  // 前驱节点
  private getMinNode(node: TreeNode) {
    let current = node;
    let parent: TreeNode | null = null;
    while (current && current.left) {
      parent = current;
      current = current.left;
      current.parent = parent;
    }
    return current;
  }

  // 搜索
  public search(value: number) {
    return !!this.searchNode(value);
  }
  private searchNode(value: number): TreeNode | null {
    if (!this.root || this.count === 0) {
      console.log("无节点");
      return null;
    }

    let current: TreeNode = this.root;
    let parent: TreeNode | null = null;

    while (current) {
      if (current.value === value) return current;

      parent = current;

      if (current.value < value) {
        if (current.right) {
          current = current.right;
          current.parent = parent;
          continue;
        } else {
          return null;
        }
      }

      if (current.value > value) {
        if (current.left) {
          current = current.left;
          current.parent = parent;
          continue;
        } else {
          return null;
        }
      }
    }

    return null;
  }

  // 搜索 - 递归
  public searchRecursion(value: number) {
    return this._searchRecursion(this.root, value);
  }
  private _searchRecursion(node: TreeNode | null, value: number) {
    if (!node) return false;

    if (node.value > value) {
      return this._searchRecursion(node.left, value);
    }
    if (node.value < value) {
      return this._searchRecursion(node.right, value);
    }
    if (node.value === value) {
      return true;
    }
  }

  // 删除
  public delete(value: number) {
    const current = this.searchNode(value);

    let replaceNode: TreeNode | null = null;
    if (!current?.left && !current?.right) {
      // 01 删除叶子节点
      replaceNode = null;
    } else if (!current.right) {
      // 02 存在一个子节点: 左叶子存在
      replaceNode = current.left;
    } else if (!current.left) {
      // 03 存在一个子节点: 右叶子存在
      replaceNode = current.right;
    } else {
      // 04 存在2个及以上的节点 - 这里使用后继节点来做
      const successor = this.getMinNode(current.right);

      // 如果没有父节点，那么就是当前节点为父节点
      if (!successor.parent) successor.parent = current;

      // 保留 后驱节点
      replaceNode = successor;

      // 清除 后驱节点
      if (successor.isLeft) successor.parent!.left = null;
      if (successor.isRight) successor.parent!.right = null;

      // 将 后驱节点 中携带的信息移动到 父节点 中
      if (successor.right) successor.parent.left = successor.right;

      // 继承 待删除节点的信息 到 后驱节点中
      if (current.left) successor.left = current.left;
      if (current.right) successor.right = current.right;
    }

    if (current === this.root) {
      this.root = replaceNode;
    } else if (current?.isLeft) {
      current.parent!.left = replaceNode;
    } else if (current?.isRight) {
      current.parent!.right = replaceNode;
    }
  }
}

const bsTree = new BSTree();

bsTree.insert(11);
bsTree.insert(7);
bsTree.insert(15);
bsTree.insert(5);
bsTree.insert(3);
bsTree.insert(9);
bsTree.insert(8);
bsTree.insert(10);
bsTree.insert(13);
bsTree.insert(12);
bsTree.insert(14);
bsTree.insert(20);
bsTree.insert(18);
bsTree.insert(25);
bsTree.insert(19);
bsTree.insert(21);
// bsTree.insert(6);

bsTree.delete(15);
bsTree.print();
