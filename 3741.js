var minimumDistance = function (nums) {
  const map = {};
  let prevDist = Infinity;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!map[num]) map[num] = [];
    const arr = map[num];
    arr.push(i);
    if (arr.length > 3) arr.shift();

    if (arr.length === 3) {
      const firstIdx = arr[0];
      const lastIdx = arr[2];
      const distance = 2 * (lastIdx - firstIdx);
      prevDist = Math.min(prevDist, distance);
    }
  }
  return prevDist === Infinity ? -1 : prevDist;
};

console.log(minimumDistance([1, 1, 1, 1])); //4
console.log(minimumDistance([1, 2, 1, 1, 3])); //6
// console.log(minimumDistance([5, 5, 5, 2, 5])); //4
// console.log(minimumDistance([5, 3, 5, 5, 5])); //4
// console.log(minimumDistance([1, 1, 2, 3, 2, 1, 2])); //8
// console.log(minimumDistance([6, 1, 6, 1, 6, 6])); //6
// console.log(minimumDistance([6, 6, 3, 6, 3, 6])); //6
console.log(minimumDistance([4, 4, 3, 4, 3, 3, 4, 4, 4, 4])); //4
