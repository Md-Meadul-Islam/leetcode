var maxArea = function (height) {
  let maxArea = 0;
  let iterator = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      iterator++;
      const minHeightBar = Math.min(height[i], height[j]);
      const width = j - i;
      const area = minHeightBar * width;
      maxArea = Math.max(maxArea, area);
    }
  }
  console.log(iterator);
  return maxArea;
};
// var maxArea = function (height) {
//   let maxArea = 0;
//   let left = 0;
//   let right = height.length - 1;
//   while (left < right) {
//     const minHeightBar = Math.min(height[left], height[right]);
//     const width = right - left;
//     const area = minHeightBar * width;
//     console.log(area);
//     maxArea = Math.max(maxArea, area);
//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return maxArea;
// };
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 1]));
