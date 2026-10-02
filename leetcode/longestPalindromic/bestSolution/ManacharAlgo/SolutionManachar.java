package leetcode.longestPalindromic.bestSolution.ManacharAlgo;

 public class SolutionManachar {

    public static String longestPalindrome(String s) {
        if (s == null || s.isEmpty()) return "";

        // 1. Transformation: "aba" -> "^#a#b#a#$" (^ et $ gèrent les bords)
        StringBuilder sb = new StringBuilder("^");
        for (char c : s.toCharArray()) {
            sb.append("#").append(c);
        }
        sb.append("#$");
        String t = sb.toString();

        int n = t.length();
        int[] P = new int[n]; // P[i] = rayon du palindrome centré en i
        int C = 0, R = 0;     // Centre et bord droit du palindrome courant

        for (int i = 1; i < n - 1; i++) {
            int iMirror = 2 * C - i;

            // Si i est dans la zone R, on copie la valeur du miroir
            if (R > i) {
                P[i] = Math.min(R - i, P[iMirror]);
            }

            // Extension manuelle si nécessaire
            while (t.charAt(i + 1 + P[i]) == t.charAt(i - 1 - P[i])) {
                P[i]++;
            }

            // Si le palindrome dépasse R, on met à jour le centre C et le bord R
            if (i + P[i] > R) {
                C = i;
                R = i + P[i];
            }
        }

        // Recherche du rayon maximal
        int maxLen = 0;
        int centerIndex = 0;
        for (int i = 1; i < n - 1; i++) {
            if (P[i] > maxLen) {
                maxLen = P[i];
                centerIndex = i;
            }
        }

        // Conversion des indices vers la chaîne originale
        int start = (centerIndex - maxLen) / 2;
        return s.substring(start, start + maxLen);
    }
} 
