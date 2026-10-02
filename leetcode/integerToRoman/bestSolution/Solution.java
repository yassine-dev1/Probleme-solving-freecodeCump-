package leetcode.integerToRoman.bestSolution;

import java.util.HashMap;
import java.util.Map;

class Solution {
    private Map<Integer, String> map = new HashMap<>();

    public Solution() {
        // Enregistrement des symboles de base fournis[cite: 1]
        map.put(1, "I");
        map.put(5, "V");
        map.put(10, "X");
        map.put(50, "L");
        map.put(100, "C");
        map.put(500, "D");
        map.put(1000, "M");
    }

    private int[] convertIntToTab(int num) {
        // Correction : Allouer la taille exacte du tableau basée sur le nombre de chiffres
        int len = String.valueOf(num).length();
        int[] tab = new int[len];
        int idx = 0;

        while (num != 0) {
            tab[idx++] = num % 10;
            num = num / 10;
        }

        // Inversion des éléments du début à la fin
        for (int i = 0; i < tab.length / 2; i++) {
            int t = tab[i];
            tab[i] = tab[tab.length - 1 - i];
            tab[tab.length - 1 - i] = t;
        }

        return tab;
    }

    public String intToRoman(int num) {
        int[] digits = convertIntToTab(num);
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < digits.length; i++) {
            int d = digits[i];
            if (d == 0) continue;

            // Détermination du rang (puissance de 10 : 0 = unités, 1 = dizaines, 2 = centaines, 3 = milliers)
            int power = digits.length - 1 - i;

            int unitVal = (int) Math.pow(10, power);
            int fiveVal = unitVal * 5;
            int tenVal = unitVal * 10;

            String one = map.get(unitVal);
            String five = map.get(fiveVal);
            String ten = map.get(tenVal);

            // Traitement logique selon la valeur du chiffre (d)
            if (d == 9) {
                result.append(one).append(ten);
            } else if (d >= 5) {
                result.append(five);
                for (int k = 0; k < d - 5; k++) {
                    result.append(one);
                }
            } else if (d == 4) {
                result.append(one).append(five);
            } else {
                for (int k = 0; k < d; k++) {
                    result.append(one);
                }
            }
        }

        return result.toString();
    }
}
