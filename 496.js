var nextGreaterElement1 = function (nums1, nums2) {
  const j = nums2.length - 1;
  const stack = [];
  const nums = Array(nums1.length).fill(0);
  for (let i = j; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }

    const idx = nums1.indexOf(nums2[i]);
    if (idx !== -1) {
      nums[idx] = stack.length ? stack[stack.length - 1] : -1;
    }
    stack.push(nums2[i]);
  }
  return nums;
};
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let hashMap = new Map();
  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      hashMap.set(stack.pop(), num);
    }
    stack.push(num);
  }
  while (stack.length) {
    hashMap.set(stack.pop(), -1);
  }
  return nums1.map((num) => hashMap.get(num));
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
