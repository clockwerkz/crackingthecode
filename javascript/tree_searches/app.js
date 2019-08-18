
//console.log(countSteps(3));

const graph = {};
graph["you"] = ["carlos"];
graph["carlos"] = ["mama", "noah", "max"];
graph["noah"] = ["jack", "corey", "dillon"];
graph["corey"] = ["gustavo", "dunger"];

//Breadth First Search : Shortest Path Algorithm
function findPerson(graph, startingPoint, nameToFind) {
    const queue = [];
    let search = 0;
    queue.push(...graph[startingPoint]);
    console.log(queue);
    while (queue.length > 0) {
        let current = queue.shift();
        if (current === nameToFind) {
            return search;
        } else {
            console.log(current);
            if (graph[current]) queue.push(...graph[current]);
            search++;
        }
    }
    return -1;
}
console.log(findPerson(graph, "you", "gustavo"));


//Depth First Search
/*function findPerson(arr, personToFind, depth=0) {
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
}*/

//console.log(findPerson(elisa, jack));