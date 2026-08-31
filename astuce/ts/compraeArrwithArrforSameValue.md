**Comparer deux tableaux de caractères (ordre ignoré)**

*Solution 1 : Trier les deux tableaux*

```typescript
function sontEgaux(arr1: string[], arr2: string[]): boolean {
  if (arr1.length !== arr2.length) return false;
  
  const sorted1 = [...arr1].sort();
  const sorted2 = [...arr2].sort();
  
  return sorted1.every((char, index) => char === sorted2[index]);
}

// Test
console.log(sontEgaux(['a', 'b', 'c'], ['c', 'b', 'a'])); // true
console.log(sontEgaux(['a', 'b', 'c'], ['c', 'b', 'a', 'd'])); // false
console.log(sontEgaux(['a', 'b', 'c'], ['c', 'b', 'd'])); // false
```
*Solution 2 : Compter les occurrences (Map)*

```typescript
function sontEgaux(arr1: string[], arr2: string[]): boolean {
  if (arr1.length !== arr2.length) return false;
  
  const count = new Map<string, number>();
  
  // Compter les occurrences dans arr1
  for (const char of arr1) {
    count.set(char, (count.get(char) || 0) + 1);
  }
  
  // Soustraire les occurrences de arr2
  for (const char of arr2) {
    const val = count.get(char);
    if (!val) return false; // caractère manquant
    if (val === 1) count.delete(char);
    else count.set(char, val - 1);
  }
  
  return count.size === 0;
}

// Test
console.log(sontEgaux(['a', 'b', 'c'], ['c', 'b', 'a'])); // true
console.log(sontEgaux(['a', 'b', 'a'], ['a', 'b', 'c'])); // false (différents caractères)
console.log(sontEgaux(['a', 'b', 'a'], ['a', 'a', 'b'])); // true
```

*Solution 3 : Trier + join() + comparaison*

```typescript
function sontEgaux(arr1: string[], arr2: string[]): boolean {
  if (arr1.length !== arr2.length) return false;
  
  return [...arr1].sort().join('') === [...arr2].sort().join('');
}

// Test
console.log(sontEgaux(['a', 'b', 'c'], ['c', 'b', 'a'])); // true
console.log(sontEgaux(['a', 'b', 'c'], ['c', 'b', 'd'])); // false
```