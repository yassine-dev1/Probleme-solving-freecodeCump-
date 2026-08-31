**1- for one caractère**

```typescript
    const contientUn = caracteres.some(c => str.includes(c));
console.log(contientUn); // true (contient 'o', 'u', 'e')
```

**2- for every caractère**

```typescript
// Vérifier si TOUS les caractères sont présents
const contientTous = caracteres.every(c => str.includes(c));
console.log(contientTous); // false (manque 'a', 'i')
```