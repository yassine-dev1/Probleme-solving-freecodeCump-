/**
 * 
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
 */

function pairwise(arr, arg) {

  let sumCurrPairIdxs = 0;
  let sumAllPairsIdxs = 0;
  let idxAlreadyUses = [];

  let idxAlreadyUsesMap = new Map();

  for(let idx=0; idx<arr.length-1; idx++)
  {

     const secondItemToFindValue = arg - arr[idx];
     const lastIndexUsesForItem = idxAlreadyUsesMap.get(secondItemToFindValue);
     const idxForStartSearch = (lastIndexUsesForItem && lastIndexUsesForItem>idx) ? lastIndexUsesForItem+1 : idx+1 ;

     if(idxForStartSearch < 0 || idxForStartSearch >=arr.length)
       continue ;

     const secondItemToFindIdx = arr.indexOf(secondItemToFindValue,idxForStartSearch);

     if(secondItemToFindIdx !== -1)
     {
        if(!idxAlreadyUses.includes(idx))
        {
           sumCurrPairIdxs = idx + secondItemToFindIdx;
           sumAllPairsIdxs += sumCurrPairIdxs;
          idxAlreadyUses.push(secondItemToFindIdx);
          idxAlreadyUsesMap.set(secondItemToFindValue, secondItemToFindIdx);

        }
     }

  } 
  return sumAllPairsIdxs;
}

console.log(pairwise([1,4,2,3,0,5], 7));
console.log(pairwise([1, 3, 2, 4], 4))
console.log(pairwise([1, 1, 1], 2))
console.log(pairwise([0, 0, 0, 0, 1, 1], 1))
console.log(pairwise([], 100))
console.log(pairwise([1, 1, 1, 1], 2))