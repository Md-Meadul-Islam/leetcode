//3Sum
var threeSum_BruitForce = function (nums) {
  const arrLength = nums.length;
  let tripletSet = new Set();
  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      for (let k = j + 1; k < arrLength; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const sortedArr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          tripletSet.add(JSON.stringify(sortedArr));
        }
      }
    }
  }
  return [...tripletSet].map((trip) => JSON.parse(trip));
};

var threeSum_Hashing = function (nums) {
  const arrLength = nums.length;
  const tripletSet = new Set();
  for (let i = 0; i < arrLength; i++) {
    const hashSet = new Set();
    for (let j = i + 1; j < arrLength; j++) {
      const target = -(nums[i] + nums[j]);
      if (hashSet.has(target)) {
        const sortedArr = [nums[i], nums[j], target].sort((a, b) => a - b);
        tripletSet.add(JSON.stringify(sortedArr));
      }
      hashSet.add(nums[j]);
      console.log(hashSet);
    }
  }
  return [...tripletSet].map((arr) => JSON.parse(arr));
};

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const triplets = [];
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1,
      k = n - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        triplets.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      }
    }
  }
  return triplets;
};
// console.log(threeSum_BruitForce([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
