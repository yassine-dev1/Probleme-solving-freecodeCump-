export {}

class Solution {
    
    private map = new Map();

    constructor(){
        this.map.set("I",1);
        this.map.set("V",5);
        this.map.set("X",10);
        this.map.set("L",50);
        this.map.set("C",100);
        this.map.set("D", 500);
        this.map.set("M",1000);
    }

    public convertRomanToInt(roman:string): number {
      
         const splitedRoman = roman.split("");
         let idx = 0;
         let resultNum = 0 ;

         while(idx<splitedRoman.length)
         {  
              let currentRomanSymb =  splitedRoman[idx].toUpperCase();
              let nextRomanSymb = splitedRoman[idx + 1]?.toUpperCase();
              let valueCurrentRoman = this.map.get(currentRomanSymb) || 0;

              if(nextRomanSymb == undefined)
              {
                 resultNum += valueCurrentRoman;
                 return resultNum;
              }
                 
              let currentCalculatedValue = 0;
              let isSubstraction = false;

            if(currentRomanSymb=="I" && (nextRomanSymb=="V" || nextRomanSymb=="X"))
            {
                currentCalculatedValue = nextRomanSymb=="V" ? 4 : 9 ;
                isSubstraction=true;

            }else if(currentRomanSymb=="X" && (nextRomanSymb=="L" || nextRomanSymb=="C") )
            {
                currentCalculatedValue = nextRomanSymb=="L" ? 40 : 90 ;
                isSubstraction=true;

            }else if(currentRomanSymb=="C" && (nextRomanSymb=="D" || nextRomanSymb=="M") )
            {
                 currentCalculatedValue = nextRomanSymb=="D" ? 400 : 900 ;
                 isSubstraction=true;
            }else {
                 
                currentCalculatedValue += valueCurrentRoman;
             
            }

              resultNum += currentCalculatedValue;
              idx += isSubstraction ? 2 : 1;
         }
      
        return resultNum;
    }
}

const sol = new Solution();
let result = sol.convertRomanToInt("LVIII");

console.log("result for Roman chiffres III is", result);