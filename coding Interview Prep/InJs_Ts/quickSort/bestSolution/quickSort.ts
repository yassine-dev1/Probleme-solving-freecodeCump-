function quickSortFacile(array: number[]): number[] {
  if (array.length <= 1) return array;

  const pivot = array[array.length - 1];
  const gauche: number[] = [];
  const droite: number[] = [];

  // On boucle jusqu'à l'avant-dernier (pour ignorer le pivot)
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      gauche.push(array[i]);
    } else {
      droite.push(array[i]);
    }
  }

  // Récursivité et assemblage direct
  return [...quickSortFacile(gauche), pivot, ...quickSortFacile(droite)];
}


//solution with same origin table

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low;
    
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            // Swap moderne en une ligne
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[high]] = [arr[high], arr[i]];
    return i;
}

function quickSortInPlace(arr: number[], low = 0, high = arr.length - 1): number[] {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSortInPlace(arr, low, pi - 1);
        quickSortInPlace(arr, pi + 1, high);
    }
    return arr; // Modifié sur place
}
