function substrings(str, sub="") {
    if (str.length === 1) {
        return str;
    } 
    return [str, ...substrings(str.slice(1)), ...substrings(str.slice(0, str.length-1)) ];
    
}

console.log(substrings('abc'));