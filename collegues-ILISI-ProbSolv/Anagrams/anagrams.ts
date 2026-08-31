function anagrams(arrStr:string[]):any
{
    const map = new Map<string, string[]>();
    
    arrStr.forEach((item)=> {
        
        const splitSortedStr = item.toLowerCase()
                                    .split('')
                                    .sort()
                                    .join('');
                                    
        // console.log(item.split('').sort().join(''))
        const arrValue = (map.get(splitSortedStr)) || [];
        arrValue.push(item);
        map.set(splitSortedStr, arrValue);
    })
   
    return Array.from(map.values());
}

console.log(anagrams(["eat", "tea" , "Tan", "ate", "nat", "bat"]))

//     const contientUn = caracteres.some(c => str.includes(c));
// console.log(contientUn); // true (contient 'o', 'u', 'e')

// // Vérifier si TOUS les caractères sont présents
// const contientTous = caracteres.every(c => str.includes(c));
// console.log(contientTous); // false (manque 'a', 'i')
// }