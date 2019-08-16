function countSteps(n) {
    if (n<0) return 0;
    if (n<=1) return 1;
    return countSteps(n-3) + countSteps(n-2) + countSteps(n-1);
}

//console.log(countSteps(3));

const carlos = [];
const jack = []
const noah = [jack];
const max = [noah];
const elisa = [carlos, max];

function findPerson(arr, personToFind, depth=0) {
    debugger;
    if (arr.length===0) {
        return -1
    } else arr.forEach(name => {
        if (name === personToFind) {
            console.log('found person at depth', depth, name);
            return depth;
        } else {
            return findPerson(name, personToFind, ++depth);
        }
    });
}

console.log(findPerson(elisa, jack));