///////////////////////////  polynomial rolling hash    ////////////////////
function hash(key: string, size: number): number {
  let total = 0;
  const PRIME = 31;   // nombre premier

  for (let i = 0; i < key.length; i++) {
    total = (total * PRIME + key.charCodeAt(i)) % size;
  }
  return total;
}

///////////////////   Variante populaire : djb2  /////////////////

function hash2(key: string, size: number): number {
  let h = 5381;
  for (let i = 0; i < key.length; i++) {
    h = ((h << 5) + h) + key.charCodeAt(i);   // h * 33 + c
  }
  return Math.abs(h) % size;
}

console.log(hash2("abc", 10))
console.log(hash2("bca", 10))