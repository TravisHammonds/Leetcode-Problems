/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head == null) return null;
    let curr = head
    while(curr.next != null) {
        if(curr.val == curr.next.val){
            let next_next = curr.next.next;
            delete(curr.next);
            curr.next = next_next; 
        } else {
            curr = curr.next;
        }
    }
    return head; 
};