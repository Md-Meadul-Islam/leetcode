//Valid Anagram
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   const hashArr = new Array(26).fill(0);
//   for (let i = 0; i < s.length; i++) {
//     let sIdx = s.charCodeAt(i) - 97;
//     let tIdx = t.charCodeAt(i) - 97;
//     hashArr[sIdx]++;
//     hashArr[tIdx]--;
//   }
//   return hashArr.every((val) => val === 0);
// };
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sIdx = 0,
    tIdx = 0;
  for (let i = 0; i < s.length; i++) {
    sIdx = sIdx + s.charCodeAt(i);
    tIdx = tIdx + t.charCodeAt(i);
  }
  console.log(sIdx, tIdx);
  if (sIdx === tIdx) return true;
  return false;
};
console.log(isAnagram("ggii", "eekk"));
