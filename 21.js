//Merge Two Sorted Lists
const list1 = {
  val: 2,
  next: {
    val: 3,
    next: {
      val: 4,
      next: {
        val: 8,
        next: null,
      },
    },
  },
};
const list2 = {
  val: 1,
  next: {
    val: 6,
    next: {
      val: 7,
      next: {
        val: 9,
        next: null,
      },
    },
  },
};
var mergeTwoLists = function (h1, h2) {
  if (!h1 || !h2) {
    return h1 ? h1 : h2;
  }
  if (h1.val < h2.val) {
    h1.next = mergeTwoLists(h1.next, h2);
    return h1;
  } else {
    h2.next = mergeTwoLists(h1, h2.next);
    return h2;
  }
};
console.dir(mergeTwoLists(list1, list2), { depth: null });
