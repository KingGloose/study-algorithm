// leecode: https://leetcode.cn/problems/merge-sorted-array/

// method1 - 使用jsapi - 64ms
function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
}

// method2 - 倒序双指针
function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
 
}

export {};
