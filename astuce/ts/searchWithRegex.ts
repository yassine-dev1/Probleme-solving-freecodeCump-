// ------------------------------------- 1---------------------------------
const map = new Map<string, number>();
map.set("user_123", 100);
map.set("user_456", 200);
map.set("admin_789", 300);

// Chercher toutes les clés qui commencent par "user_"
const regex = /^user_/;
const resultats: [string, number][] = [];

for (const [key, value] of map) {
  if (regex.test(key)) {
    resultats.push([key, value]);
  }
}


// ----------------------------------------------- 2-----------------------
const map2 = new Map<string, number>();
map2.set("user_123", 100);
map2.set("user_456", 200);
map2.set("admin_789", 300);

const regex2 = /^user_/;

const resultats2 = Array.from(map2).filter(([key]) => regex2.test(key));
// const resultatsbyValue = Array.from(map2).filter(([_, value]) => regex2.test(value)); // if want search by value