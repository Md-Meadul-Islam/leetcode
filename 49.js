/**
 * Group Anagrams
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashMap = new Map();
  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (!hashMap.has(sortedStr)) {
      hashMap.set(sortedStr, []);
    }
    hashMap.get(sortedStr).push(str);
  }
  return Array.from(hashMap.values());
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
