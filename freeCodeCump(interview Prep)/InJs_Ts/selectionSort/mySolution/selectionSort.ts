function selectionSort(array:number[]) {
  // Only change code below this line
  const length = array.length;
  let permutIndx=0;

  for(let idx=0; idx<length-1; idx++)
  {
    permutIndx=idx;
    for(let idx2=(idx+1); idx2<length; idx2++)
    {
      if(array[idx2]<array[permutIndx])
        {
          permutIndx=idx2;
        }
    }

    if(permutIndx!=idx)
      [array[idx], array[permutIndx]] = [array[permutIndx], array[idx]] ;
  }
  return array;
  // Only change code above this line
}

console.log(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))