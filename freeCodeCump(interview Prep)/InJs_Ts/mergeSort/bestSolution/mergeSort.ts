export {};

function mergeSort(array:number[]):number[] {
  // Cas de base
  if (array.length <= 1) return array;
  
  const milieu = Math.floor(array.length / 2);
  
  // Appels récursifs
  const leftArray:number[] = mergeSort(array.slice(0, milieu));
  const rightArray:number[] = mergeSort(array.slice(milieu));
  
  // On fusionne intelligemment
  return merge(leftArray, rightArray);
}

function merge(left:number[], right:number[]):number[] {
  let result = [];
  let i = 0; // Pointeur pour le tableau gauche
  let j = 0; // Pointeur pour le tableau droit

  // Tant qu'on n'a pas vidé l'un des deux tableaux
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // On ajoute ce qui reste (l'un des deux sera forcément vide)
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// console.log(mergeSortEasy([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));