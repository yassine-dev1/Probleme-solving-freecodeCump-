import java.util.HashSet;
import java.util.Set;

public class Solution {
    public static int maxLengthOfSubstring(String expression) {
        Set<Character> charSet = new HashSet<>();
        int idLeft = 0;
        int maxLength = 0;

        for (int idRight = 0; idRight < expression.length(); idRight++) {
            while (charSet.contains(expression.charAt(idRight))) {
                charSet.remove(expression.charAt(idLeft));
                idLeft++;
            }

            charSet.add(expression.charAt(idRight));
            maxLength = Math.max(maxLength, idRight - idLeft + 1);
        }

        return maxLength;
    }
}