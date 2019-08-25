function mergeSort (arr) {
    if (arr.length<=1) return arr;
    let midpoint = Math.floor(arr.length/2);
    const leftArr = mergeSort(arr.slice(0,midpoint));
    const rightArr = mergeSort(arr.slice(midpoint));
    const res = merge(leftArr, rightArr);
    return res;
}

function merge(arr1, arr2) {
    let [ptr1, ptr2] = [0,0];
    const res = [];
    while (ptr1 < arr1.length && ptr2 < arr2.length) {
        if (arr1[ptr1] < arr2[ptr2]){
            res.push(arr1[ptr1++]);
        } else {
            res.push(arr2[ptr2++]);
        }
    }
    return res.concat(arr1.slice(ptr1)).concat(arr2.slice(ptr2));
}

module.exports = mergeSort;