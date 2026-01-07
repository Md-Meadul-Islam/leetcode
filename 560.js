// var subarraySum = (arr, k) => {
//   let maxLength = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if (sum == k) {
//         maxLength = Math.max(maxLength, j - i + 1);
//       }
//     }
//   }
//   return maxLength;
// };

var subarraySum = (nums, k) => {
  const map = new Map();
  map.set(0, 1);

  function helper(index, sum) {
    console.log(map);
    if (index === nums.length) {
      return 0;
    }
    sum += nums[index];
    let count = map.get(sum - k) || 0;
    console.log(sum, count);

    map.set(sum, (map.get(sum) || 0) + 1);

    count += helper(index + 1, sum);

    return count;
  }

  return helper(0, 0);
};
var subarraySum2 = function (nums, k) {
  let map = new Map();
  map.set(0, 1); // base case

  let sum = 0;
  let count = 0;

  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};
console.log(subarraySum2([8, 4, 5, 4, 2], 7));
console.log(subarraySum2([3, 4, 7, -2, 2, 1, 4, 2], 7));
