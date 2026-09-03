package leetcode.longestPalindromic.mySolution;

import java.util.*;

/**
 * @omplexité O(N^3)
 * Solution
 */

public class Solution {
    
    private static  boolean isPalindrom(String str1) {

       int idxStart = 0 ;
       int idxEnd = str1.length()-1;

       while(idxEnd > idxStart)
       {
          if(str1.charAt(idxEnd) != str1.charAt(idxStart))
              return false;

          idxEnd--;
          idxStart++;
       }

       return true ;
    }

    public static String LongestPalindromicSubStr(String str)
    {
        int[] lastSeen = new int[128];

        for(int idx=0; idx<128; idx++)
          lastSeen[idx]=-1;

        final String regex="/[^a-zA-z0-9]/g";
        String cleanStr = str.trim().replaceAll(regex,"");

        int right=0;
        int maxlength=0;
        int maxStart=0;

        while(right < cleanStr.length())
        {
            final char currentChar = cleanStr.charAt(right);
            // right++;

            if(lastSeen[currentChar] != -1)
            {
                final int lastIndexCurrentCar = lastSeen[currentChar];
                final String subString = cleanStr.substring(lastIndexCurrentCar, right+1);

                System.err.println("substring :" + subString + "  lasyIndex: " + lastIndexCurrentCar + "  rigrh  :" + right);

                if(isPalindrom(subString))
                {
                    int subStringLength = (right-lastIndexCurrentCar)+1;
                    if(subStringLength > maxlength)
                    {
                        maxlength = subStringLength;
                        maxStart = lastIndexCurrentCar;
                    }
                    right++;
                    continue;
                }
            }

            // this line had access only 
            // 1- if current caracter index is not presence in lasrseen table 
            // 2- if the subString tested isn't a palindrom
            lastSeen[currentChar] = right ;
            right++;
        }

        if(maxlength==0)
            return "";

        return cleanStr.substring(maxStart, maxStart+maxlength);

    }


    public static String longPalindromicWithMap(String str) {

        if(str==null || str.isEmpty())
             return null ;


        final String regex="/[^a-zA-z0-9]/g";
        String cleanStr = str.trim().replaceAll(regex,"");

        HashMap<Character, List<Integer>> mapIndexes = new HashMap<>();
        int right=0;
        int maxlength=0;
        int maxStart=0;

        while(right < cleanStr.length())
        {
            final char currentChar = cleanStr.charAt(right);

            if(mapIndexes.containsKey(currentChar))
            {

                List<Integer> listIndexes = mapIndexes.get(currentChar);

                for(Integer index : listIndexes)
                {

                   final int lastIndexCurrentCar = index;
                   final String subString = cleanStr.substring(lastIndexCurrentCar, right+1);

                   if(isPalindrom(subString))
                   {
                     int subStringLength = (right-lastIndexCurrentCar)+1;
                     if(subStringLength > maxlength)
                     {
                        maxlength = subStringLength;
                        maxStart = lastIndexCurrentCar;
                     }

                     // if find a palindrom substring no profite to contine rest indexes 
                     //because indexes is stored in ordred
                     break ;
                   }
                }

                listIndexes.add(right);
               
            }else {

                List<Integer> list = new ArrayList<>();
                list.add(right);
                mapIndexes.put(currentChar, list);
            }

            right++;
        }

        if(maxlength==0)
            return ""+cleanStr.charAt(0);

        return cleanStr.substring(maxStart, maxStart+maxlength);

    }

    public static void main(String[] args) {
        
        System.out.println(longPalindromicWithMap("baba"));
        System.out.println(longPalindromicWithMap("55   caeceac"));


    }
}
