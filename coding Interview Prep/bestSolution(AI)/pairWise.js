function pairwise(arr, arg) {
  let sumIdxs = 0;
  let usedIndices = []; // Pour stocker TOUS les index brûlés

  for (let i = 0; i < arr.length; i++) {
    // Si l'index 'i' est déjà utilisé, on passe au suivant
    if (usedIndices.includes(i)) continue;

    // On cherche un partenaire 'j' uniquement parmi les éléments suivants
    for (let j = i + 1; j < arr.length; j++) {
      
      // Si 'j' est dispo ET que la somme est bonne
      if (!usedIndices.includes(j) && arr[i] + arr[j] === arg) {
        
        sumIdxs += (i + j);
        
        // On "brûle" les deux index
        usedIndices.push(i, j);
        
        // On stoppe la recherche pour ce 'i' (très important !)
        break; 
      }
    }
  }

  return sumIdxs;
}

// --- Tests ---
console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); // 11
console.log(pairwise([1, 1, 1, 1], 2));       // 6 (Correction de ton bug)
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // 10
console.log(pairwise([5, -2], 3));            // 1 (Correction des nombres négatifs)