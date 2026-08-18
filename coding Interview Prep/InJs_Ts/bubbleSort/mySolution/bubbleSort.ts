function bubbleSort(array:number[]) {
  let repeatIteration = false;
  let limite = array.length - 1; // On crée une limite qui va rétrécir

  do {
    repeatIteration = false;
    
    // On boucle jusqu'à la limite, pas jusqu'à la fin !
    for (let idx = 0; idx < limite; idx++) {
      if (array[idx] > array[idx + 1]) {
        [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
        repeatIteration = true;
      }
    }
    
    // Après un tour, le plus grand est à la fin, on rétrécit la zone de vérification
    limite--; 
    
  } while (repeatIteration);
  
  return array;
}