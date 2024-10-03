// leecode: https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/

// method1 82ms
// 思路: 如果存在 abcbdef 那么遇到不对的就截取数据到 cb...
function lengthOfLongestSubstring(s: string): number {
  let arr: string[] = [];
  let max: number = 0;

  for (const char of s) {
    const index = arr.indexOf(char);
    if (index === -1) {
      arr.push(char);
    } else {
      max = arr.length > max ? arr.length : max;
      arr = arr.splice(index + 1);
      arr.push(char);
    }
  }

  max = arr.length > max ? arr.length : max;

  return max;
}

// method2 


console.log(lengthOfLongestSubstring("aab"));
