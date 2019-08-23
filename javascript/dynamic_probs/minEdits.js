// Edit Distance | DP-5
// Given two strings str1 and str2 and below operations 
//that can performed on str1. Find minimum number of edits 
//(operations) required to convert ‘str1’ into ‘str2’.

// Insert
// Remove
// Replace
// All of the above operations are of equal cost.

function minEdits(str1, str2, ptr1=0, ptr2=0) {
    if (ptr1 === str1.length && ptr2 === str2.length) return 0;
    if (ptr1 ===str1.length-1 && ptr2===str2.length-1) {
        return str1[ptr1] === str2[ptr2] ? 0 : 1
    }
    if (ptr1 === str1.length) {
        return 1 + minEdits(str1, str2, ptr1, ptr2+1);
    }
    if (str1[ptr1] === str2[ptr2]) {
        return 0 + minEdits(str1, str2, ptr1+1, ptr2+1);
    } else {
        ptr1  = (ptr1 === str1.length) ? str1.length : ptr1 + 1;
        let replace = 1 + minEdits(str1, str2, ptr1, ptr2+1);
        let insert = 1 + minEdits(str1, str2, ptr1, ptr2+1);
        return replace < insert ? replace : insert;
    }
}

console.log(minEdits('a','a')); //0
console.log(minEdits('a','b')); //1
console.log(minEdits('a','baa')); //3
console.log(minEdits('cat','cut')) //1
console.log(minEdits('sunday','saturday')) //3