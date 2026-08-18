function binarySearch(searchList:number[], target:number):number {
    let startIdx = 0;
    let endIdx = searchList.length - 1;

    // 1. Attention au "<=" 
    while (startIdx <= endIdx) {
        // Optionnel : Math.floor(startIdx + (endIdx - startIdx) / 2) 
        // est encore plus sécurisé pour les très grands nombres en Java/C++
        const midIdx = Math.floor((startIdx + endIdx) / 2);
        const midValue = searchList[midIdx];

        if (target === midValue) {
            return midIdx; // On retourne directement l'index trouvé
        }

        if (target < midValue) {
            endIdx = midIdx - 1; // On cherche à gauche
        } else {
            startIdx = midIdx + 1; // On cherche à droite
        }
    }

    return -1; // Standard : on retourne -1 si la valeur n'existe pas
}

// Test
const arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(arr, 7)); // Retourne l'index 3