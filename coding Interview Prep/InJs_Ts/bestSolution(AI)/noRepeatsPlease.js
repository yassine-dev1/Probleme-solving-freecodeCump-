/**
 * 
Analyse du problème
Générer toutes les permutations possibles :Si la chaîne fait $N$ caractères, 
il y a $N!$ (factotielle de $N$) permutations possibles (ex: pour "aab", $3! = 6$ permutations).
L'algorithme de Heap (Heap's Algorithm) :C'est la méthode la plus efficace et la plus populaire en JS/TS pour générer toutes les permutations d'un tableau/chaîne.
Filtrer avec une Regex :Pour chaque permutation générée, on vérifie si deux caractères consécutifs sont identiques avec une expression régulière très simple : /(.)\1/.(.) : capture n'importe quel caractère.\1 : v
érifie si le même caractère se répète immédiatement après.
 */



function permAlone(str) {
  // Regex qui détecte 2 lettres identiques consécutives (ex: "aa", "bb")
  const regex = /(.)\1/;

  // On convertit la chaîne en tableau de caractères
  const arr = str.split('');
  let count = 0;

  // Algorithme de Heap pour générer les permutations de façon récursive
  function generate(n, heapArr) {
    if (n === 1) {
      // On reconstruit la chaîne et on vérifie si elle N'A PAS de répétitions
      const currentStr = heapArr.join('');
      if (!regex.test(currentStr)) {
        count++;
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      generate(n - 1, heapArr);

      // Si n est pair, on échange le i-ème et le dernier élément
      // Si n est impair, on échange le 1er (index 0) et le dernier élément
      if (n % 2 === 0) {
        [heapArr[i], heapArr[n - 1]] = [heapArr[n - 1], heapArr[i]];
      } else {
        [heapArr[0], heapArr[n - 1]] = [heapArr[n - 1], heapArr[0]];
      }
    }
  }

  generate(arr.length, arr);

  return count;
}

// --- Tests ---
console.log(permAlone("aab")); // ➔ 2 (aba, aba)
console.log(permAlone("aaa")); // ➔ 0
console.log(permAlone("aabb")); // ➔ 8
console.log(permAlone("abcdefa")); // ➔ 3600