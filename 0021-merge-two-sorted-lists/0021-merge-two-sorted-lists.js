/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    //set a dummy pointer
    const startNode = new ListNode();
    //set the current pointer node
    let currentNode = startNode;

    //while there are elemetns in both lists
    while (list1 && list2) {
        //compare the 2
        if (list1.val > list2.val) {
            //if 2 is smaller set current.next to 2 and move list2 up
            currentNode.next = list2;
            list2 = list2.next;
        } else {
            //if 1 is samll set cur.next to 1 and move lsit1 up
            currentNode.next = list1;
            list1 = list1.next;
        }

        //move to the current node up 
        currentNode = currentNode.next;
    }

    //if list1 remains, maek the next node list1 element
    if (list1) {
        currentNode.next = list1;
    } else {
        currentNode.next = list2;
    }

    return startNode.next;

};