package leetcode.longestSubstring.mySolution;

import java.util.HashSet;
import java.util.Set;


/**
 * @algo : uses window sliding window ( idleft++ , ifRight++)
 * LongestSubstring
 */
public class Solution {

    public static int getLongestSubstring(String str) {
       
         if(str==null || str.isEmpty())
            return 0;

        int left =0 ;
        int maxStart=0;
        int maxLength=0;

         Set<Character> set = new HashSet<>();

         for(int right=0; right<str.length(); right++)
         {
              char currentCar = str.charAt(right) ;
               while(set.contains(currentCar)){
                    set.remove(str.charAt(left));
                    left++;
               }

               set.add(currentCar);

               int currentlength = (right - left) +1 ;
               if(maxLength<currentlength)
               {
                  maxStart = left;
                  maxLength=currentlength;
               }
         }

      return str.substring(maxStart, maxStart+maxLength).length();
    }

    public static void main(String[] args) {
        System.out.println(Solution.getLongestSubstring("abcabcbb"));
        System.out.println(Solution.getLongestSubstring("bbbbb"));
        System.out.println(Solution.getLongestSubstring("pwwkew"));
    }
}









    //   if (str == null || str.isEmpty()) {
    //         return "";
    //     }

    //     Set<Character> set = new HashSet<>();
    //     int left = 0;
    //     int maxStart = 0;
    //     int maxLength = 0;

    //     for (int right = 0; right < str.length(); right++) {
    //         char current = str.charAt(right);

    //         while (set.contains(current)) {
    //             set.remove(str.charAt(left));
    //             left++;
    //         }

    //         set.add(current);

    //         int currentLength = right - left + 1;
    //         if (currentLength > maxLength) {
    //             maxLength = currentLength;
    //             maxStart = left;
    //         }
    //     }

    //     return str.substring(maxStart, maxStart + maxLength);
    // }