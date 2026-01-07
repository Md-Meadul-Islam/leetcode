//3Sum Closest
var threeSumClosest_bruitForce = function (nums, target) {
  const n = nums.length;
  let closestSum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum;
        }
      }
    }
  }

  return closestSum;
};

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let closestSum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < n; i++) {
    let j = i + 1,
      k = n - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      } else {
        return sum;
      }
    }
  }
  return closestSum;
};
// console.log(threeSum_BruitForce([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
