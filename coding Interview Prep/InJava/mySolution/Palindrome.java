// package coding Interview Prep.InJava.mySolution;

public class Palindrome {
    
    public static boolean isPalindrome(String expression)
    {
      String regex="[^a-z1-9]";
      String toLowarCase=expression.toLowerCase();
      String cleanExpression=toLowarCase.replaceAll(regex,"");
      int idxFromStart=0;
      int idxFromEnd=cleanExpression.length();

      while(idxFromStart<idxFromEnd && cleanExpression.charAt(idxFromStart++)==cleanExpression.charAt(--idxFromEnd))

      if(idxFromStart>=idxFromEnd)
        return true;

      return false;
    }

  public static void main(String[] args) {
    
    System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
    System.out.println(isPalindrome("algorithme"));

  }
}
