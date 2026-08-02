function mergeSort(array, low, high) {

 if(high-low > 1)
 {
    const milieuIdx=parseInt((high+low)/2);

    mergeSort(array,low, milieuIdx);
    mergeSort(array, milieuIdx+1, high);
  
  
    for(let idx=low+1; idx<=high; idx++)
    {
       const currItem = array[idx];
       let idx2=idx-1;
       while(idx2>=low && array[idx2]>currItem)
       {
         array[idx2+1]=array[idx2];
         idx2--;
       }
       array[idx2+1]=currItem;
     }

  }
    return array ;
}

const arrayTest = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];  
console.log('length before sorting',arrayTest.length)
console.log(mergeSort(arrayTest, 0, arrayTest.length-1))
console.log('length after sorting',arrayTest.length)


//other solution in uses arrays temporary

function mergeSortEasy(array) {
  if(array.length<=1)
    return array;
  
  const milieuIdx=parseInt(array.length/2);

  let leftArray=mergeSort(array.slice(0, milieuIdx));
  let rightArray=mergeSort(array.slice(milieuIdx));
  
  let result=[...leftArray];
  
  for(let idx=0; idx<rightArray.length; idx++)
  {
     let idx2=result.length-1;
     while(idx2>=0 && result[idx2]>rightArray[idx])
     {
        result[idx2+1]=result[idx2];
        idx2--;
     }
     result[idx2+1]=rightArray[idx];
  }

  return result;

}

console.log(mergeSortEasy([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))