function insertionSort(array:number[]) {
  const length = array.length;
  
  // Correction : On va bien jusqu'à "idx < length"
  for (let idx = 1; idx < length; idx++) {
    let currItem = array[idx];
    
    // On déclare idx2 avant la boucle pour y accéder plus tard (sans utiliser var)
    let idx2 = idx - 1;
    
    // La boucle while est parfaite pour ce cas de décalage conditionnel
    while (idx2 >= 0 && array[idx2] > currItem) {
      array[idx2 + 1] = array[idx2];
      idx2--;
    }
    
    // idx2 pointe maintenant sur l'élément plus petit, on insère juste après (+1)
    array[idx2 + 1] = currItem;
  }
  
  return array;
}

console.log(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));