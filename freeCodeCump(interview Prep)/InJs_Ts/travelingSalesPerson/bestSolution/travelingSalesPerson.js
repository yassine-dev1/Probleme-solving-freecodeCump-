const distances = {
  A: { B: 10, C: 15, D: 20 },
  B: { A: 10, C: 35, D: 25 },
  C: { A: 15, B: 35, D: 30 },
  D: { A: 20, B: 25, C: 30 }
};

const entrepots = ['A', 'B', 'C', 'D'];

function trouverMeilleurTrajet(villes) {
  let meilleureDistance = Infinity; // On commence avec l'infini pour que le 1er trajet devienne le meilleur
  let meilleurTrajet = [];

  // 1. Fonction utilitaire pour calculer le coût d'un trajet précis
  function calculerDistance(trajet) {
    let total = 0;
    for (let i = 0; i < trajet.length - 1; i++) {
      const villeActuelle = trajet[i];
      const villeSuivante = trajet[i + 1];
      total += distances[villeActuelle][villeSuivante];
    }
    return total;
  }

  // 2. L'algorithme de Heap
  function generate(n, heapArr) {
    if (n === 1) {
      // Dès qu'une combinaison est prête, on calcule sa distance
      const distanceActuelle = calculerDistance(heapArr);
      
      // Si on bat le record, on le sauvegarde
      if (distanceActuelle < meilleureDistance) {
        meilleureDistance = distanceActuelle;
        // ⚠️ TRÈS IMPORTANT : On doit faire une copie du tableau [...heapArr]
        // Sinon on sauvegarde une référence qui va continuer d'être modifiée par Heap !
        meilleurTrajet = [...heapArr]; 
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      generate(n - 1, heapArr);

      if (n % 2 === 0) {
        [heapArr[i], heapArr[n - 1]] = [heapArr[n - 1], heapArr[i]];
      } else {
        [heapArr[0], heapArr[n - 1]] = [heapArr[n - 1], heapArr[0]];
      }
    }
  }

  // On lance l'algorithme sur une copie de notre tableau de base
  generate(villes.length, [...villes]);

  return {
    trajet: meilleurTrajet.join(' ➔ '),
    distanceTotal: meilleureDistance + ' km'
  };
}

console.log(trouverMeilleurTrajet(entrepots));
// Résultat attendu : { trajet: 'C ➔ A ➔ B ➔ D', distanceTotal: '50 km' }
// (Note : 'D ➔ B ➔ A ➔ C' donne aussi 50 km)