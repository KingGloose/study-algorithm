// 2024.4.13 https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

// method - 59ms
function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

// method1 - KMP(不懂啊) - 
function strStr1(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

console.log(strStr("leetcode", "leeto"));
