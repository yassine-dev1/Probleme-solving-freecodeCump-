////             deep copy                //////////////////////////
const copie1 = structuredClone(obj);

// Méthode 2 : JSON (simple, mais perd Date, undefined, fonctions...)
const copie = JSON.parse(JSON.stringify(obj));

// Méthode 3 : récursive manuelle
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepCopy);
  const clone = {};
  for (const key in obj) clone[key] = deepCopy(obj[key]);
  return clone;
}


///////////: 3. Tableau 2D → objet   /////////////////////////
const keys = ["a", "b", "c"];
const values = [1, 2, 3];

const obj2 = Object.fromEntries(keys.map((k, i) => [k, values[i]]));
// { a:1, b:2, c:3 }

       ///// other option ////////////////:
const tab2D = [["a",1], ["b",2], ["c",3]];

const obj = Object.fromEntries(tab2D);
// { a:1, b:2, c:3 }


////////////////////////    2. Objet → tableau 2D      ////////////////////////////////////

const obj3 = { a: 1, b: 2, c: 3 };

const tab2D3 = Object.entries(obj);
// [["a",1], ["b",2], ["c",3]]