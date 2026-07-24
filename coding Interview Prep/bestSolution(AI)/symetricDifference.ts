export default function sym(...args: number[][]): number[] {
  // Fonction auxiliaire pour la différence symétrique de 2 tableaux
  function symDiffTwo(arr1: number[], arr2: number[]): number[] {
    // 1. On nettoie les doublons dans chaque tableau individuel avec Set
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const result: number[] = [];

    // 2. Garder les éléments qui sont dans set1 mais PAS dans set2
    for (const item of set1) {
      if (!set2.has(item)) {
        result.push(item);
      }
    }

    // 3. Garder les éléments qui sont dans set2 mais PAS dans set1
    for (const item of set2) {
      if (!set1.has(item)) {
        result.push(item);
      }
    }

    return result;
  }

  // 4. Appliquer la fonction binaire à tous les tableaux de gauche à droite
  return args.reduce(symDiffTwo);
}

// --- Tests ---
console.log(sym([1, 2, 3], [5, 2, 1, 4])); 
// ➔ [3, 5, 4]

console.log(sym([1, 2, 3], [2, 3, 4], [2, 3])); 
// (A △ B) = [1, 4]
// [1, 4] △ [2, 3] ➔ [1, 4, 2, 3]

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 55])); 
// ➔ [1, 4, 55]