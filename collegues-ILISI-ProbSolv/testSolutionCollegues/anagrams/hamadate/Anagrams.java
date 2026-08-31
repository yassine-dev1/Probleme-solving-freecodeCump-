import java.util.*;

class Anagrams {

    public HashMap<Character, Integer> frequency(String str) {
        HashMap<Character, Integer> freq = new HashMap<>();
        for (char c : str.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0)+1);
        }
        
        return freq;
    }
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> groups = new HashMap<>();

        for (String str : strs) {

            var frequency = frequency(str);
            String key = frequency.toString();
            var list = groups.get(key);
            if (list == null) {
                groups.put(key, new ArrayList<>(List.of(str)));
            } else {
                list.add(str);
            }
            
        }

        List<List<String>> res = new ArrayList<>(groups.values());

        return res;
    }


    public static void main(String[] args) {
        Anagrams solution = new Anagrams();
        String[] input = {"eat", "ate", "drink", "tea", "nat", "tan"};
        List<List<String>> result = solution.groupAnagrams(input);
        System.out.println(result);
    }
}