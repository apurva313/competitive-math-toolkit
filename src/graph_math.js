function countEulerianPaths(graph) {
    let oddDegree = 0;
    for (let node in graph) {
        if (graph[node].length % 2 !== 0) oddDegree++;
    }
    return oddDegree === 0 || oddDegree === 2;
}

module.exports = { countEulerianPaths };
