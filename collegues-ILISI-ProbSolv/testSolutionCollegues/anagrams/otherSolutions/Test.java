 
import java.util.*;

public class Test {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> groups = new HashMap<>();
        
        for (String str : strs) {
            String key = getFrequencyKey(str);
            groups.computeIfAbsent(key, k -> new ArrayList<>()).add(str);
        }
        
        return new ArrayList<>(groups.values());
    }
    
    private String getFrequencyKey(String str) {
        int[] freq = new int[26];
        for (char c : str.toCharArray()) {
            freq[c - 'a']++;
        }
        
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 26; i++) {
            if (freq[i] > 0) {
                sb.append((char)('a' + i)).append(freq[i]);
            }
        }
        return sb.toString();
    }
    
    public static void main(String[] args) {
        Solution solution = new Solution();
        String[] input = {"eat", "ate", "drink", "tea", "nat", "tan"};
        List<List<String>> result = solution.groupAnagrams(input);
        System.out.println(result);
        // [[eat, ate, tea], [drink], [nat, tan]]
    }
}


// --------------------------   solution  2 -----------------------

 class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> groups = new HashMap<>();
        
        for (String str : strs) {
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            
            groups.computeIfAbsent(key, k -> new ArrayList<>()).add(str);
        }
        
        return new ArrayList<>(groups.values());
    }
    
    public static void main(String[] args) {
        Solution solution = new Solution();
        String[] input = {"eat", "ate", "drink", "tea", "nat", "tan"};
        List<List<String>> result = solution.groupAnagrams(input);
        System.out.println(result);
        // [[eat, ate, tea], [drink], [nat, tan]]
    }
}