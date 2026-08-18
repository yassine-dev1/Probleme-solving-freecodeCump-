function isPalindrome(expression:string):boolean {

    const toLower = expression.toLowerCase();
    const cleanExpression= toLower.replace(/[^a-zA-Z0-9]/g,'');
    let idxFromStart=0;
    let idxFromEnd=cleanExpression.length-1;

    while( idxFromStart<idxFromEnd && 
           cleanExpression.charAt(idxFromStart)===cleanExpression.charAt(idxFromEnd)
         )
    {
        idxFromStart++;
        idxFromEnd--;
    }

    if(idxFromStart>=idxFromEnd)
        return true;

    return false;
}



/**
 *  
 * 1-- cas eleminatoire
 * 2-- chiffre extraction
 * 3-- asstuce moitié (compare juste la motié du nombre)
 */
function isPalindromeNumber(num:number):boolean {
 
    if(num<0 || (num%10===0 && num!==0))
         return false;
    
    let reversedHalf=0;
    while(num>reversedHalf)
    {
        reversedHalf = reversedHalf*10+(num%10);
        num = Math.floor(num/10);
    }

    return (num===reversedHalf || num===Math.floor(reversedHalf/10));

}


console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("algorithme"))
console.log(isPalindrome("radar"))