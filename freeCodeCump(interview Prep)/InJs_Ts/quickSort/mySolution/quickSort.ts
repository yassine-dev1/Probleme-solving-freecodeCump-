function quickSort(array: number[]) {
  // Only change code below this line
  if(array.length<=1)
     return array;
  
  let idxLess=0;
  let idxGreater=-1;
  let pivot=array[array.length-1];

  // algorithme du lomuto
  while(idxLess<array.length)
  {
     if(array[idxLess]>pivot)
        idxLess++;
     else
     {
        idxGreater++;
        [array[idxGreater], array[idxLess]]=[array[idxLess], array[idxGreater]]
        idxLess++;
     }
  }

  let array1:number[] = quickSort(array.slice(0, idxGreater));
  let array2:number[] = quickSort(array.slice(idxGreater + 1));

  console.log('left array(less values)', array.slice(0, idxGreater))
  console.log('right array(greater values)',array.slice(idxGreater + 1))

  return array1.concat([pivot], array2);
  // Only change code above this line
}

console.log(quickSort([ 1,4, 6, 3, 7, 0,9 ]))