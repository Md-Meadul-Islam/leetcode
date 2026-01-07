//757. Set Intersection Size At Least Two
var intersectionSizeTwo = function (intervals) {
  // Sort intervals by end point in ascending order.
  // If end points are the same, sort by start point in descending order.
  // This sorting strategy helps in making greedy choices by prioritizing intervals
  // that end sooner, and among those, prioritizing wider intervals that start later.
  intervals.sort((a, b) => {
    console.log(a, b);
    console.log(a[1] - b[1]);
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });
  console.log(intervals);
  let count = 0;
  // p1 and p2 will store the two largest distinct numbers chosen so far
  // that are part of the intersection set S, with p1 < p2.
  // Initialize them to -1 to ensure any valid interval will need new points.
  let p1 = -1;
  let p2 = -1;

  for (const [start, end] of intervals) {
    // Case 1: The current interval [start, end] does not contain p2.
    // This means it also does not contain p1 (since p1 < p2).
    // We need to add two new points to cover this interval.
    // The most optimal choice is to add the two largest possible points within the interval,
    // which are end - 1 and end, to maximize their chances of covering subsequent intervals.
    if (start > p2) {
      count += 2;
      p2 = end;
      p1 = end - 1;
    }
    // Case 2: The current interval [start, end] contains p2 but not p1.
    // This means start <= p2 but start > p1.
    // We need to add one new point to cover this interval.
    // The most optimal choice is to add 'end'.
    // We update p1 to p2 (the previously largest point) and p2 to 'end'.
    else if (start > p1) {
      count += 1;
      p1 = p2; // The previous 'p2' becomes the new 'p1'
      p2 = end; // 'end' becomes the new 'p2'
    }
    // Case 3: The current interval [start, end] contains both p1 and p2.
    // This means start <= p1 (and thus start <= p2).
    // No new points are needed for this interval.
  }

  return count;
};
// console.log(intersectionSizeTwo([[1, 3], [3, 7], [8, 9]]));
console.log(
  intersectionSizeTwo([
    [1, 3],
    [1, 4],
    [2, 5],
    [3, 5],
  ])
);
