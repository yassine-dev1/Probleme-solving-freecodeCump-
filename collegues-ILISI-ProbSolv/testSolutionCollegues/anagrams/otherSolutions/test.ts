export {}
// const map = new Map<Map<string, number>, string>();

// const innerMap1 = new Map<string, number>();
// innerMap1.set("a", 1);
// innerMap1.set("b", 2);

// const innerMap2 = new Map<string, number>(); // Même contenu
// innerMap2.set("a", 1);
// innerMap2.set("b", 2);

// map.set(innerMap1, "valeur");

// // Vérifications
// console.log(map.has(innerMap1)); // true  ✅ (même référence)
// console.log(map.has(innerMap2)); // false ❌ (référence différente)
// console.log(map.get(innerMap1)); // "valeur"
// console.log(map.get(innerMap2)); // undefined



// ------------------------------- solution -----------------------
const mainMap = new Map<string, any>();

const innerMap1 = new Map<string, number>();
innerMap1.set("a", 1);
innerMap1.set("b", 2);

const innerMap2 = new Map<string, number>();
innerMap2.set("a", 1);
innerMap2.set("b", 2);

const key1 = JSON.stringify(Array.from(innerMap1.entries()));
const key2 = JSON.stringify(Array.from(innerMap2.entries()));

mainMap.set(key1, "valeur");

console.log(mainMap.has(key1)); // true
console.log(mainMap.has(key2)); // true
console.log(mainMap.get(key2)); // "valeur"