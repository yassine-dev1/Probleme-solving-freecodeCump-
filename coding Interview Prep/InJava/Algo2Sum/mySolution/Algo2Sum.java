import java.util.HashMap;

public class Algo2Sum {

    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> numMap = new HashMap<>();

        for (int idx = 0; idx < nums.length; idx++) {
            int complement = target - nums[idx];

            // 1. On vérifie si le complément existe déjà
            if (numMap.containsKey(complement)) {
                return new int[] { numMap.get(complement), idx };
            }

            // 2. Sinon, on enregistre l'élément actuel
            numMap.put(nums[idx], idx);
        }

        throw new IllegalArgumentException("No two sum solution");
    }
}








































  public int[] twoSum(int[] nums, int target) {

    HashMap<Integer, Integer> numMap = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      int complement = target - nums[i];
      if (numMap.containsKey(complement)) {
        return new int[] { numMap.get(complement), i };
      }
      numMap.put(nums[i], i);
    }
    throw new IllegalArgumentException("No two sum solution");

  }

  public static void main(String[] args) {
    Algo2Sum algo2Sum = new Algo2Sum();
    int[] nums = { 2, 7, 11, 15 };
    int target = 9;
    int[] result = algo2Sum.twoSum(nums, target);
    System.out.println(result[0] + " " + result[1]);
  }

}