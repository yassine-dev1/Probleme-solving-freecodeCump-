def merge(arr, low, mid, high):
   idxStartLeft=low;
   idxStartRight=mid+1;
   temp=[];

   while idxStartLeft<=mid and idxStartRight<=high:
      if arr[idxStartLeft]<arr[idxStartRight]:
          temp.append(arr[idxStartLeft])
          idxStartLeft += 1;
      else:          
          temp.append(arr[idxStartRight])
          idxStartRight += 1;  

   if idxStartLeft<=mid:
     temp.extend(arr[idxStartLeft:mid+1]);

   if idxStartRight<=high:
     temp.extend(arr[idxStartRight:high+1]);

   for i in range(low,high+1):
      arr[i]=temp[i-low];

def mergeSort(arr, low, high):
   if low<high:
      medium=(low+high)//2
      mergeSort(arr, low, medium);
      mergeSort(arr, medium+1, high);

      merge(arr, low, medium, high);



def main():
    arr=[1,5,6,2,32,65,5,5,65,55,558,66,566,566]
    mergeSort(arr,0,len(arr)-1)
    print(arr)

if __name__ == "__main__":
   main()

       
      
      