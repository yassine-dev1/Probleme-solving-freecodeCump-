package leetcode.longestSubstring.bestSolution;

public class Solution {

    public static int getLongestSubstring(String str) {
        if (str == null || str.isEmpty()) return 0;

        // Stocke la dernière position vue de chaque caractère ASCII
        int[] lastSeen = new int[128];
        for (int i = 0; i < 128; i++) {
            lastSeen[i] = -1;
        }

        int left = 0;
        int maxLength = 0;

        for (int right = 0; right < str.length(); right++) {
            char current = str.charAt(right);

            // Si le caractère a déjà été vu et se trouve dans la fenêtre actuelle
            if (lastSeen[current] >= left) {
                left = lastSeen[current] + 1; // Saut direct après le doublon
            }

            lastSeen[current] = right;
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}