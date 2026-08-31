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
