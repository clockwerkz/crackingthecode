function Memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) return cache[args];
        else {
            results = fn.apply(this, args);
            cache[args] = results;
            return results;
        }
    }
}

function SlowLDS (str, k, res='', map={}) {
    if (str.length === 0) return res;
    let firstChar = str.slice(0,1);
    let kCopy;
    if (!map[firstChar]) {
        if (k<=0) {
            return res;
        }
        kCopy = k === 0 ? 0 : k-1;

    } else {
        kCopy = k;
    }
    res += firstChar;
    map[firstChar] = firstChar;
    let subString1 = LDS(str.slice(1), kCopy, res, map);
    let subString2 = LDS(str.slice(1), k);
    return subString1.length >= subString2.length ? subString1 : subString2;
}

const LDS = Memoize(SlowLDS);

console.log(LDS('abdbaaac', 2)); //returns 'baaa'
console.log(LDS('abcba', 2)); //returns 'bcb'
console.log(LDS("aabbcc", 3)); //returns 'aabbcc'
console.log(LDS("aabbcc", 2)); //returns 'aabb'