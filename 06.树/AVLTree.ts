// AVL树

import { btPrint } from "hy-algokit";

class AVLTreeNode {
  left: AVLTreeNode | null = null;
  value: number;
  right: AVLTreeNode | null = null;

  // 当前节点的父节点
  parent: AVLTreeNode | null = null;

  constructor(value: number) {
    this.value = value;
  }

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

  // 获取当前节点的高度
  private getHeight() {
    const leftHeight: number = this.left ? this.left?.getHeight() : 0;
    const rightHeight: number = this.right ? this.right.getHeight() : 0;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  // 获取元素的平衡因子 (|leftHieght - rightHeight|)
  private getBalenceFactor() {
    const leftHeight: number = this.left ? this.left?.getHeight() : 0;
    const rightHeight: number = this.right ? this.right.getHeight() : 0;

    return Math.abs(leftHeight - rightHeight);
  }

  // 获取当前元素高度较高的子元素 (左/右节点)
  private getHigherChild(): AVLTreeNode | null {
    const leftHeight: number = this.left ? this.left?.getHeight() : 0;
    const rightHeight: number = this.right ? this.right.getHeight() : 0;

    if (leftHeight > rightHeight) return this.left;
    if (leftHeight < rightHeight) return this.right;
    return this.isLeft ? this.left : this.right;
  }

  // 如果平衡因子大于 1 的话就不平衡
  get isBalence(): boolean {
    return this.getBalenceFactor() >= 1;
  }

  // 右旋转
  public rightRotation() {
    // 01 获取 povint 节点
    const povint = this.left;
    const root = this;

    const rootIsLeft = root.isLeft;
    const rootIsRight = root.isRight;

    // 02 处理 povint 的右子节点
    root.left = povint!.right;
    if (povint?.right) povint.right.parent = root;

    // 03 处理 当前节点
    povint!.parent = root.parent;
    povint!.right = root;
    root.parent = povint;

    // 04 处理 povint 要挂载到父节点的那个节点
    if (rootIsLeft) povint!.parent!.left = povint;
    else if (rootIsRight) povint!.parent!.right = povint;
    else if (!povint?.parent) povint!.parent = null;

    return povint;
  }

  // 左旋转
  public leftRotation() {
    // 01 获取 povint 节点
    const povint = this.right;
    const root = this;

    const rootIsLeft = root.isLeft;
    const rootIsRight = root.isRight;

    // 02 处理 povint 的右子节点
    root.right = povint!.left;
    if (povint?.left) povint.left.parent = root;

    // 03 处理 当前节点
    povint!.parent = root.parent;
    povint!.left = root;
    root.parent = povint;

    // 04 处理 povint 要挂载到父节点的那个节点
    if (rootIsLeft) povint!.parent!.left = povint;
    else if (rootIsRight) povint!.parent!.right = povint;
    else if (!povint?.parent) povint!.parent = null;

    return povint;
  }
}

const avlNode0 = new AVLTreeNode(30);
const avlNode1 = new AVLTreeNode(20);
const avlNode2 = new AVLTreeNode(10);
const avlNode3 = new AVLTreeNode(5);

avlNode0.right = avlNode1;
avlNode1.right = avlNode2;
avlNode2.right = avlNode3;

avlNode0.parent = null;
avlNode1.parent = avlNode0;
avlNode2.parent = avlNode1;
avlNode3.parent = avlNode2;

// btPrint(avlNode0);

avlNode0.leftRotation();

btPrint(avlNode1);
