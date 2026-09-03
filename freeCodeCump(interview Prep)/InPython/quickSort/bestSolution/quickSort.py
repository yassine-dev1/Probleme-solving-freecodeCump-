def partition(arr, low, high):
    pivot = arr[high]
    i = low
    
    for j in range(low, high):
        if arr[j] <= pivot:
            # Swap en une ligne en Python
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
            
    arr[i], arr[high] = arr[high], arr[i]
    return i

def quick_sort_in_place(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort_in_place(arr, low, pi - 1)
        quick_sort_in_place(arr, pi + 1, high)

def main():
    arr=[1,5,6,2,32,65,5,5,65,55,558,66,566,566]
    quick_sort_in_place(arr,0,len(arr)-1)
    print(arr)

if __name__ == "__main__":
   main()