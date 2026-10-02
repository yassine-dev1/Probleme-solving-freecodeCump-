export {}

class Solution {
    private map: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    public convertRomanToInt(roman: string): number {
        const cleanRoman = roman.toUpperCase();
        let resultNum = 0;

        for (let i = 0; i < cleanRoman.length; i++) {
            const currentVal = this.map[cleanRoman[i]] || 0;
            const nextVal = this.map[cleanRoman[i + 1]] || 0;

            if (currentVal < nextVal) {
                resultNum -= currentVal;
            } else {
                resultNum += currentVal;
            }
        }

        return resultNum;
    }
}

const sol = new Solution();
console.log(sol.convertRomanToInt("MCMXCIV")); // 1994
console.log(sol.convertRomanToInt("LVIII"));   // 58