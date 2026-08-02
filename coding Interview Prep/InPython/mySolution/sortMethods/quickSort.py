def quick_sort_easy(arr):
    if len(arr) <= 1:
        return arr
        
    pivot = arr[-1]
    
    # arr[:-1] signifie "tout le tableau sauf le dernier"
    left = [x for x in arr[:-1] if x < pivot]
    right = [x for x in arr[:-1] if x >= pivot]
    
    return quick_sort_easy(left) + [pivot] + quick_sort_easy(right)