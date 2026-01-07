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
const list3 = {
  val: 11,
  next: {
    val: 16,
    next: {
      val: 17,
      next: {
        val: 19,
        next: null,
      },
    },
  },
};
const list4 = {
  val: 4,
  next: {
    val: 6,
    next: {
      val: 12,
      next: {
        val: 13,
        next: null,
      },
    },
  },
};
function mergeTwoLists(h1, h2) {
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
}
function mergeRange(lists, left, right) {
  if (left > right) return null;
  if (left === right) return lists[left];

  const mid = Math.floor((left + right) / 2);

  const l1 = mergeRange(lists, left, mid);
  const l2 = mergeRange(lists, mid + 1, right);

  return mergeTwoLists(l1, l2);
}
var mergeKLists_Repeatedly = function (lists) {
  //Repeatedly Merge Two Lists
  if (!lists && lists.length == 0) return;
  if (lists.length == 1) return lists[0];
  let merged = null;
  if (lists.length >= 2) {
    merged = mergeTwoLists(lists[0], lists[1]);
  }
  if (lists.length > 2) {
    for (let i = 2; i < lists.length; i++) {
      merged = mergeTwoLists(merged, lists[i]);
    }
  }
  return merged;
};
var mergeKLists_Devide_and_Conquer = function (lists) {
  //Divide & Conquer
  if (!lists && lists.length == 0) return null;

  return mergeRange(lists, 0, lists.length - 1);
};

console.dir(mergeKLists_Devide_and_Conquer([list1, list2, list3, list4]), {
  depth: null,
});
