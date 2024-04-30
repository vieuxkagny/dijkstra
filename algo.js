function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const nodes = Object.keys(graph);

    // Initialisation des distances
    nodes.forEach(node => {
        distances[node] = node === start ? 0 : Infinity;
    });

    while (true) {
        let minNode = null;

        // Trouver le nœud non visité avec la plus petite distance
        nodes.forEach(node => {
            if (!visited[node] && (minNode === null || distances[node] < distances[minNode])) {
                minNode = node;
            }
        });

        if (minNode === null) break;

        // Marquer le nœud comme visité
        visited[minNode] = true;

        // Mettre à jour les distances de ses voisins non visités
        for (let neighbor in graph[minNode]) {
            let distance = distances[minNode] + graph[minNode][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
            }
        }
    }

    return distances;
}

// Exemple d'utilisation :
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

const startNode = 'A';
const shortestDistances = dijkstra(graph, startNode);
console.log(shortestDistances);
