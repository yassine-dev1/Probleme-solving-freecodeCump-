package leetcode.zigzagPattern.mySolution;

public class Solution {

    private String display (StringBuilder[] strBfrs) {

      StringBuilder result = new StringBuilder();
      for (StringBuilder row : strBfrs) {
         result.append(row);
      }
       return result.toString();
    }

    public String convert(String s, int numRows) {

        StringBuilder[] zigzag = new StringBuilder[numRows];
        boolean descendent= true;
        int  ascenseurIdx = 0;

        if (numRows == 1 || numRows >= s.length()) {
             return s;
         }

        //initialisation
        for (int i = 0; i < numRows; i++) {
           zigzag[i] = new StringBuilder();
        }

        for(int idx=0; idx<s.length(); idx++)
        {

         if (ascenseurIdx == 0) {
            descendent = true;
         } else if (ascenseurIdx == numRows - 1) {
            descendent = false;
         }
            zigzag[ascenseurIdx].append(s.charAt(idx));
            ascenseurIdx += descendent ? 1: -1 ;

        }

        return display(zigzag);
    }
  
     public static void main(String[] args) {
        Solution sol = new Solution();
        String str = sol.convert("PAYPALISHIRING",3);
        System.out.print(str.equals("PAHNAPLSIIGYIR"));
    
     }
}
