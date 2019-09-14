function editDistance(str1, str2) {
    if (str1.length===0 && str2.length ===0) return 0;
    else if (str2.length===0) return str1.length;
    if (str1.length === str2.length) {
        if (str1[0] === str2[0]) {
            return 0 + editDistance(str1.slice(1), str2.slice(1));
        }
        else { 
            return 1 + editDistance(str1.slice(1), str2.slice(1));
        } 
    } else {
        if (str1.length < str2.length) {
            [str1, str2] = [str2, str1];
        }
        let left, right;
        if (str1[0]===str2[0]) {
            left = editDistance(str1.slice(1), str2.slice(1));
            right = editDistance(str1.slice(1), str2);
        } else {
            left = 1 + editDistance(str1.slice(1), str2.slice(1));
            right = 1 + editDistance(str1.slice(1), str2);
        }
        return left < right ? left : right;
    }
}

console.log(editDistance('abcd','abcd'));