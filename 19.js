const list = {
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
  val: 2,
  next: {
    val: 3,
    next: null,
  },
};

var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;
  for (let i = 0; i <= n; i++) {
    if (fast !== null) {
      fast = fast.next;
    } else if (i == n) {
      return head.next;
    }
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return head;
};

console.log(removeNthFromEnd(list2, 2));
