// function addTwoNumbers(l1, l2) {
//     let nums = []

//     function iterateNested(obj) {
//         Object.values(obj).forEach(val => {
//             { nums.push(val) }
//             if (typeof val === 'object' && val !== null) {
//                 iterateNested(val)
//             }
//         })
//     }
//     iterateNested(l1)
//     const numL1 = []
//     for (let i = 0; i < nums.length; i++) {
//         if (typeof nums[i] == 'number') { numL1.push(nums[i]) }
//     }
//     const numbersL1 = numL1.reverse().join('')
//     nums = []

//     iterateNested(l2)
//     const numL2 = []
//     for (let i = 0; i < nums.length; i++) {
//         if (typeof nums[i] == 'number') { numL2.push(nums[i]) }
//     }

//     const numbersL2 = numL2.reverse().join('')
//     nums = []

//     let float = (Number(numbersL1) + Number(numbersL2))
//     let format = float.toString().split('').reverse()

//     const final = format.map((x) => { return Number(x) })

//     function linkedList(arr) {
//         return arr.reduceRight((next, val) => ({ val, next }), null);
//     }

//     return linkedList(final)

// }      

// Solution above fails when large integers (over 16 digits) are used. 
// Below solution uses a manual addition style (as opposed to JS Number).

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);

        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
}
