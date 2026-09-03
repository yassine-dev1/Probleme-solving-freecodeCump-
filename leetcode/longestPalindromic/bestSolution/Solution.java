package leetcode.longestPalindromic.bestSolution;

/**
 * @complexité O(N^2)
 * @variable start : L'expression (maxLen - 1) / 2 sert à unifier la formule de calcul de l'index de départ 
 * (start) pour les palindromes de longueur impaire ET paire en utilisant la division entière de Java.
 */


 public class Solution {

    public static String longestPalindrome(String s) {
        if (s == null || s.length() < 1) return "";

        int start = 0, end = 0;

        for (int i = 0; i < s.length(); i++) {
            // Palindrome de longueur impaire (ex: "aba", centre = 'b')
            int len1 = expandAroundCenter(s, i, i);
            // Palindrome de longueur paire (ex: "abba", centre = entre 'b' et 'b')
            int len2 = expandAroundCenter(s, i, i + 1);

            int maxLen = Math.max(len1, len2);

            if (maxLen > end - start) {
                start = i - (maxLen - 1) / 2;
                end = i + maxLen / 2;
            }
        }

        return s.substring(start, end + 1);
    }

    private static int expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1;
    }
} 
