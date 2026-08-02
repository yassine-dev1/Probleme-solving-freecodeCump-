import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

public class QuickSort {

    public QuickSort(){

    }

    public static int partition(int arr[] , int low, int high)
    {
        int pivot=arr[high];
        int idxLess=low;

        for(int idxGreater=low; idxGreater<high; idxGreater++)
        {
            if(arr[idxGreater]<=pivot)
            {
                int cnsrValue=arr[idxGreater];
                arr[idxGreater]=arr[idxLess];
                arr[idxLess]=cnsrValue;
                idxLess++;
            }
        }

        int temp = arr[high];
        arr[high] = arr[idxLess];
        arr[idxLess] = temp;

        return idxLess;

    }

    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(arr, low, high);
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }

    public static void main(String[] args) {
        
        int[] testArr={4,5,5,0,258,3,82,44,384,38,23,2,6};
        quickSort(testArr, 0, testArr.length-1);

        System.out.println(Arrays.toString(testArr));
    }
    }


//solution with ArrayList

 class QuickSortEasy {
    public static List<Integer> quickSort(List<Integer> list) {
        if (list.size() <= 1) {
            return list;
        }

        int pivot = list.get(list.size() - 1);
        List<Integer> left = new ArrayList<>();
        List<Integer> right = new ArrayList<>();

        // On ignore le dernier élément (le pivot)
        for (int i = 0; i < list.size() - 1; i++) {
            if (list.get(i) < pivot) {
                left.add(list.get(i));
            } else {
                right.add(list.get(i));
            }
        }

        // Assemblage final
        List<Integer> result = new ArrayList<>(quickSort(left));
        result.add(pivot);
        result.addAll(quickSort(right));
        
        return result;
    }
}