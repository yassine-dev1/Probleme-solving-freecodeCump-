def is_palindrome(expression: str) -> bool:
    # On garde uniquement les caractères valides et on passe en minuscules
    clean_expression = [char.lower() for char in expression if char.isalnum()]
    
    left = 0
    right = len(clean_expression) - 1
    
    while left < right:
        if clean_expression[left] != clean_expression[right]:
            return False
        left += 1
        right -= 1
        
    return True

print(is_palindrome("A man, a plan, a canal: Panama")) # True