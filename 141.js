function ListNode(val) {
  this.val = val;
  this.next = null;
}
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
//create cycle (tail → node with value 2)
head.next.next.next.next = head.next;

var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
console.log(hasCycle(head));
