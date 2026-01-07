//Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function (s) {
  const hashMap = new Map();
  let left = 0;
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i]) && hashMap.get(s[i]) >= left) {
      left = hashMap.get(s[i]) + 1;
    }
    hashMap.set(s[i], i);
    maxLen = Math.max(maxLen, i - left + 1);
  }
  return maxLen;
};
const longestSubstring = (s) => {
  const n = s.length;
  const hashMap = new Map();
  let left = 0;
  let right = 0;
  let maxLength = 0;
  while (right < n) {
    if (hashMap.has(s[right]) && hashMap.get(s[right]) >= left) {
      left = hashMap.get(s[right]) + 1;
    }
    hashMap.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
  return maxLength;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
