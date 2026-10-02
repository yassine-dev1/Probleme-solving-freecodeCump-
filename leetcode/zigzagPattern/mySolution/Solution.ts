class Solution {
    private str : string;
    private numRows:number;

    constructor(str:string, numRows:number)
    {
         this.str = str;
         this.numRows = numRows;
    }


    public zigzagStr() :string {

        if(this.numRows <= 1 || this.str.trim().length <= this.numRows )
            return this.str;

        const zigzag:string[] = [];
        let descendent = false;
        let ascenseurIdx = 0;

        for(let index=0; index<this.numRows; index++)
        {
            zigzag[index]="";
        }

        for(let idx=0; idx<this.str.length; idx++)
        {
            if(ascenseurIdx==0 || ascenseurIdx==this.numRows-1)
            {
               descendent=!descendent; 
            }

             zigzag[ascenseurIdx]+=this.str.charAt(idx);
             ascenseurIdx += descendent ? 1 : -1 ;
        }

        return zigzag.join("");
    }

}

const sol = new Solution("PAYPALISHIRING",3);
console.log(sol.zigzagStr()==="PAHNAPLSIIGYIR")
