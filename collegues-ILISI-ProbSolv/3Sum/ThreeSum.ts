function ThreeSum(arr:number[], target:number) {

     const map = new Map();
     const arrLength = arr.length; 

     if(arrLength < 3 )
        return null ;

     // function for verifier two items is they sum close targert
     function TwoSum(arr:number[], target:number, indexExclut:number): number[] {
     
         if(arrLength < 2 || (indexExclut < 0 && indexExclut >= arrLength))
             return [];

         for(let idx=0; idx<arr.length; idx++)
        {
            if(idx==indexExclut)
                 continue;

            const  COMPLEMENT = (target - arr[idx]);
            if(map.has(COMPLEMENT))
            {
                return [map.get(COMPLEMENT), idx];
            }

            map.set(arr[idx], idx);
        }

        return [];      
     }

     for(let idx=0; idx<arrLength; idx++)
    {
        const COMPLEMENT = (target - arr[idx]);
        const twoSumResult = TwoSum(arr, COMPLEMENT, idx);

        if(twoSumResult.length == 2)
        {
            return [idx, ...twoSumResult];
        }
    }

    throw Error("no idexes find for close this target");
}

const arr = [1,2,5,8,2,8,3];
console.log(ThreeSum(arr,7))