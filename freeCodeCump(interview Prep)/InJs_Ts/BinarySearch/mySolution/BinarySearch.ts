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

function binarySearchRec(
  searchList: number[], 
  target: number, 
  low: number = 0, 
  high: number = searchList.length - 1
): number {
  // ✅ Vérifier d'abord la condition d'arrêt
  if (low > high) {
    return -1;
  }

  const midIdx = Math.floor((high + low) / 2);
  const valueIdx = searchList[midIdx];

  if (valueIdx === target) {
    return midIdx;
  }

  if (valueIdx < target) {
    // ✅ Recherche dans la partie droite
    return binarySearchRec(searchList, target, midIdx + 1, high);
  } else {
    // ✅ Recherche dans la partie gauche
    return binarySearchRec(searchList, target, low, midIdx - 1);
  }
}
// Test
const arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearchRec(arr,7)); // Retourne l'index 3