def merge_sort_easy(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort_easy(arr[:mid])
    right = merge_sort_easy(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    # On utilise les deux pointeurs i et j
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # On ajoute la fin des tableaux (avec le slicing Python)
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result

test_arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
print(merge_sort_easy(test_arr))