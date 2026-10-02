package leetcode.integerToRoman.mySolution;
import java.util.*;

class Solution {
    private HashMap<Integer,String> map = new HashMap<>();

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
        if(num < 1 || num > 3999)
           return null ;

        int[] decimalToStart = {1,10,100,1000};
        int[] TabNum = convertIntToTab(num);

        int idx=0,  idSymbol;
        String romanSymbol, lessRomanSymbol;
        int degitTostart = decimalToStart[TabNum.length - 1];

        StringBuilder strRoman = new StringBuilder();


       while(idx<TabNum.length)
       {
             int currentDigit = TabNum[idx];
             idx++; 
             idSymbol = degitTostart ;

             if(currentDigit==4 || currentDigit==9)
             {
                 lessRomanSymbol = map.get(idSymbol);
                 idSymbol = currentDigit*idSymbol + idSymbol ;
                 romanSymbol = map.get(idSymbol);
                 strRoman.append(lessRomanSymbol);
                 strRoman.append(romanSymbol);

             }else{
                
                int iteration = 0 ;
                lessRomanSymbol = map.get(idSymbol);
                if(currentDigit <= 3 )
                {
                   iteration = currentDigit ;
                }else{
                    romanSymbol = map.get(5*idSymbol);
                    strRoman.append(romanSymbol);
                    iteration = Math.max(0 , currentDigit -5 );
                }
                for(int i=0; i<iteration; i++)
                {
                    strRoman.append(lessRomanSymbol);
                }
             }
             degitTostart = degitTostart/10;
       }

       return strRoman.toString();

    }

    public static void main(String[] args) {
        Solution sol =  new  Solution();
        String result = sol.intToRoman(3749);

        System.out.println("result convert "+300 +" to Roman is : " + result);
    }
}