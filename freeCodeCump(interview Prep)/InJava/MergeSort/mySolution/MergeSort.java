import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

public class MergeSort {

public static void merge(int[] array, int low, int mediumIdx, int high)
{
    int idxLeft=low;
    int idxRight=mediumIdx+1;
    List<Integer> temp = new ArrayList<>();

    while(idxLeft<=mediumIdx && idxRight<=high)
    {
        if(array[idxLeft]<array[idxRight])
        {
            temp.add(array[idxLeft]);
            idxLeft++;
        }else
        {
            temp.add(array[idxRight]);
            idxRight++;
        }
    }

    while(idxLeft<=mediumIdx)
    {
        temp.add(array[idxLeft]);
        idxLeft++;
    }

    while(idxRight<=high)
    {
        temp.add(array[idxRight]);
        idxRight++;
    }

    for(int k=low; k<=high; k++)
       array[k]=temp.get(k-low);
}

public static void MergeSortFunc(int[] array, int low, int high)
{
    if(low<high)
    {
        int medium=(high+low)/2;
        MergeSortFunc(array, low, medium);
        MergeSortFunc(array, medium+1, high);

        merge(array, low, medium, high);

    }
}


public static void main(String[] args) {
        int[] testArr = {1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92};
        MergeSortFunc(testArr, 0, testArr.length - 1);
        System.out.println(Arrays.toString(testArr));
    }
}
