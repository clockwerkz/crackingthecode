//Longest Increasing Subsequence

function memoize(fn) {
    const cache = {};
    return function(...args) {
      if (cache[args]) return cache[args];
      else {
        const results = fn.apply(this, args);
        cache[args] = results;
        return results;
      }
    }
  }
  
  function slowLIS(arr, ptr=0, selected=null) {
    if (ptr === arr.length-1) return 1;
  
    
    if (selected===null) selected = arr[ptr];
    if (arr[ptr] < arr[ptr+1]) {
      return 1 + LIS(arr,ptr+1, selected);
    } else {
      leftBranch =  0 + LIS(arr,ptr+1, selected);
      rightBranch = 0 + LIS(arr,ptr+1, null);
      return Math.max(leftBranch, rightBranch);
    }
  }
  
  const LIS = memoize(slowLIS);
  
  const arr1 = [3, 10, 2, 1, 20] //3
  const arr2 = [50, 3, 10, 7, 40, 80] //4
  const arr3 = [3,2] //1
  const arr4 = [3,4] //2
  
  console.log(LIS(arr4));