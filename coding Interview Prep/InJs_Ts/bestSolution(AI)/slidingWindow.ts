//  fix version with k lenght subArray

function maxSumSubarray(nums: number[], k: number): number {
  if (nums.length < k) return 0;

  let windowSum = 0;

  // 1. Calcul de la première fenêtre de taille K
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  // 2. Glissement de la fenêtre
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k]; // + Élément entrant - Élément sortant
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Résultat : 9


// various version with k is not defined 
//"challenge: Find the longest length of a substring that does not contain a repeated character."
//------------------------------------ My solution-----------------------------------------------

function maxLengthOfSubstring(expression:string):number {

    let idLeft=0;
    let idRight=0;
    let maxLength=0;

    while(idRight<expression.length)
    {
        const subString=[...expression].slice(idLeft,idRight);
        
        if(subString.includes(expression[idRight]))
        {
            idLeft++;
        }
        else
        {
            idRight++;
            maxLength=Math.max(maxLength,idRight-idLeft+1);
        }
    }

     return maxLength;
}




//------------------------- AI Solution ---------------------------------
function lengthOfLongestSubstring(s: string): number {

    let maxLength = 0;
    let left = 0;
    let right = 0;
    const charSet = new Set<string>();
    
    while (right < s.length) {
        const rightChar = s[right];
        
        // Si le caractère est déjà dans la fenêtre, on rétrécit par la gauche
        while (charSet.has(rightChar)) {
            charSet.delete(s[left]);
            left++;
        }
        
        // On ajoute le nouveau caractère
        charSet.add(rightChar);
        
        // On met à jour la longueur maximale trouvée
        maxLength = Math.max(maxLength, right - left + 1);
        
        right++;
    }
    
    return maxLength;
}




