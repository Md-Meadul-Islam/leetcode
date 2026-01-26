//https://leetcode.com/problems/letter-combinations-of-a-phone-number?envType=problem-list-v2&envId=backtracking
var letterCombinations = function (digits) {
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  if (digits.length === 0) return [];
  if (digits.length === 1) {
    const chars = map[digits[0]];
    return chars;
  }
  let result = map[digits[0]];
  for (let d = 1; d < digits.length; d++) {
    const chars = map[digits[d]];
    const temp = [];
    for (c of chars) {
      for (let i = 0; i < result.length; i++) {
        temp.push(result[i] + c);
      }
    }
    result = temp;
  }
  return result;
};

console.log(letterCombinations("92"));

function letterCombinations2(digits) {
  if (digits.length === 0) return [];

  const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  function backtrack(index, current) {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const letters = phoneMap[digits[index]];
    for (let letter of letters) {
      backtrack(index + 1, current + letter);
    }
  }

  backtrack(0, "");
  console.log(result);
  return result;
}
