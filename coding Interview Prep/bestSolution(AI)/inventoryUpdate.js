function updateInventory(arr1, arr2) {
  // 1. Créer une Map pour stocker [nom: quantité]
  const inventory = new Map();

  // 2. Charger l'inventaire actuel
  for (const [quantity, item] of arr1) {
    inventory.set(item, quantity);
  }

  // 3. Mettre à jour avec la nouvelle livraison
  for (const [quantity, item] of arr2) {
    const currentQuantity = inventory.get(item) || 0;
    inventory.set(item, currentQuantity + quantity);
  }

  // 4. Reconvertir la Map en tableau 2D [[quantité, nom], ...]
  const result = Array.from(inventory, ([item, quantity]) => [quantity, item]);

  // 5. Trier par ordre alphabétique sur le nom de l'article (index 1)
  return result.sort((a, b) => a[1].localeCompare(b[1]));
}

// --- Test ---
const curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

const newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));