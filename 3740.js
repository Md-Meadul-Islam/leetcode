var minimumDistance = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const arr = map[num] || [];
    arr.push(i);
    map[num] = arr;
  }
  let distances = [];
  for (const key in map) {
    const arr = map[key];
    const arrLen = arr.length;
    if (arrLen >= 3) {
      for (let i = 0; i < arr.length - 2; i++) {
        distances.push(2 * (Math.max(arr[i], arr[i + 1], arr[i + 2]) - Math.min(arr[i], arr[i + 1], arr[i + 2])));
      }
    }
  }
  return distances.length ? Math.min(...distances) : -1;
};

console.log(minimumDistance([1, 1, 1, 1])); //4
// console.log(minimumDistance([1, 2, 1, 1, 3])); //6
// console.log(minimumDistance([5, 5, 5, 2, 5])); //4
// console.log(minimumDistance([5, 3, 5, 5, 5])); //4
console.log(minimumDistance([1, 1, 2, 3, 2, 1, 2])); //8
console.log(minimumDistance([6, 1, 6, 1, 6, 6])); //6
console.log(minimumDistance([6, 6, 3, 6, 3, 6])); //6
console.log(minimumDistance([4, 4, 3, 4, 3, 3, 4, 4, 4, 4])); //4
