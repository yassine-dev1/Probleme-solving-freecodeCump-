
/**
 * 
 * @principe Étant donné un tableau d'entiers nums (contenant des nombres positifs, négatifs ou zéro), 
 *    il faut trouver le sous-tableau contigu (qui se suivent sans interruption) 
 *    ayant la plus grande somme possible, et retourner cette valeur. 
 * @parameters nums:array 
 * @returns maxSumValue or indexes(startIndex, endIndex, maxSum, subArray)
 */


// for max sum value
function maxSubArray(nums: number[]): number {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Est-ce qu'on s'ajoute à la suite ou est-ce qu'on recommence ici ?
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // On garde la trace du maximum absolu croisé jusqu'ici
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}





// for indexes subArray
interface SubarrayResult {
  maxSum: number;
  startIndex: number;
  endIndex: number;
  subarray: number[];
}

function maxSubArrayWithIndices(nums: number[]): SubarrayResult {
  let maxSum = nums[0];
  let currentSum = nums[0];

  let tempStart = 0;
  let bestStart = 0;
  let bestEnd = 0;

  for (let i = 1; i < nums.length; i++) {
    // Si l'élément actuel est supérieur à lui-même + la somme précédente,
    // on abandonne le passé et on redémarre un nouveau sous-tableau à l'index i.
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      tempStart = i; 
    } else {
      currentSum += nums[i];
    }

    // Dès qu'on bat le record global, on fixe les indices définitifs
    if (currentSum > maxSum) {
      maxSum = currentSum;
      bestStart = tempStart;
      bestEnd = i;
    }
  }

  return {
    maxSum,
    startIndex: bestStart,
    endIndex: bestEnd,
    subarray: nums.slice(bestStart, bestEnd + 1)
  };
}

// Exemple
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArrayWithIndices(nums));
// Résultat : { maxSum: 6, startIndex: 3, endIndex: 6, subarray: [4, -1, 2, 1] }