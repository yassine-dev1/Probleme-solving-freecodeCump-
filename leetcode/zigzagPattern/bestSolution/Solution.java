package leetcode.zigzagPattern.bestSolution;


// runtime for this soluions is 1ms

class Solution {
    public String convert(String s, int numRows) {  
            if(numRows <= 1) return s;
        int n = s.length();
        char[] r = new char[n];
        int rp = 0;
        int charsBetweenFirstRow = numRows + Math.max(0,numRows-2);
        for(int i = 0; i < n; i += charsBetweenFirstRow) {
            r[rp++] = s.charAt(i);
        }
        for(int row = 2; row < numRows; row++) {
            for(int i = row-1; i < n && rp < n; i+= charsBetweenFirstRow) {
                r[rp++] = s.charAt(i);
                // The formula seen above
                int zag = i+(numRows-row)*2;
                if(zag < n) r[rp++] = s.charAt(zag);
            }
        }
        for(int i = numRows-1; i < n && rp < n; i+= charsBetweenFirstRow) {
            r[rp++] = s.charAt(i);
        }
        return String.valueOf(r);
        
    }
}
