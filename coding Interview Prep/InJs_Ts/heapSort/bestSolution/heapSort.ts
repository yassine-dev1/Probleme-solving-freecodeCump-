function heapSort(tas: number[]) {
    const n = tas.length;

    // Phase 1 : Construire le Tas Max (Max-Heap)
    // On commence par le dernier "parent" et on remonte jusqu'à la racine (0)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(tas, n, i);
    }

    // Phase 2 : Extraire le maximum un par un
    for (let i = n - 1; i > 0; i--) {
        // On échange la racine (le max) avec le dernier élément non trié
        [tas[0], tas[i]] = [tas[i], tas[0]];

        // On répare le tas avec la nouvelle racine (qui est un petit nombre).
        // Attention : on passe 'i' comme taille pour ignorer les éléments déjà triés à la fin.
        heapify(tas, i, 0);
    }
}

// Fonction pour faire "couler" un élément à sa bonne place
function heapify(tas: number[], length: number, i: number) {
    let largest = i; // On suppose que le parent est le plus grand
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // Si l'enfant gauche est plus grand que le parent
    if (left < length && tas[left] > tas[largest]) {
        largest = left;
    }

    // Si l'enfant droit est plus grand que le plus grand trouvé jusqu'ici
    if (right < length && tas[right] > tas[largest]) {
        largest = right;
    }

    // Si le plus grand n'est plus le parent, on échange et on continue de faire couler
    if (largest !== i) {
        [tas[i], tas[largest]] = [tas[largest], tas[i]];
        
        // Appel récursif pour continuer à faire descendre l'élément
        heapify(tas, length, largest); 
    }
}

const testArray = [0, 1, 2, 3, 9, 10, 11, 12, 15, 16, 17, 4, 5, 8, 18, 13, 14, 19, 20, 21, 22, 23, 49, 70];
heapSort(testArray);
console.log(testArray);
