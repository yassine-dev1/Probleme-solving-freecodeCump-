package leetcode.MergeIntervals.MySolution;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {

    public int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) {
            return intervals;
        }

        // 1. Tri obligatoire par la borne de DÉBUT (index 0)
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        List<int[]> result = new ArrayList<>();
        
        // 2. On ajoute le premier intervalle APRÈS le tri
        result.add(intervals[0]);

        for (int i = 1; i < intervals.length; i++) {
            int[] current = intervals[i];
            int[] lastMerged = result.get(result.size() - 1);

            // Si chevauchement : current.start <= lastMerged.end
            if (current[0] <= lastMerged[1]) {
                // On met à jour la borne de fin directement dans l'objet existant
                lastMerged[1] = Math.max(lastMerged[1], current[1]);
            } else {
                // Pas de chevauchement : nouvel intervalle distinct
                result.add(current);
            }
        }

        // Conversion de List<int[]> en int[][]
        return result.toArray(new int[result.size()][]);
    }

    public static void main(String[] args) {
        int[][] testArr = {
            {1, 3},
            {2, 6},
            {8, 10},
            {15, 18}
        };
        
        Solution sol = new Solution();
        int[][] res = sol.merge(testArr);
        
        for (int[] interval : res) {
            System.out.println(Arrays.toString(interval));
        }
    }
}