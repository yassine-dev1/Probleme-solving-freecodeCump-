export class Set {
  private dictionary: Record<string, any> = {};
  private length: number = 0;

  constructor(arr?: any[]) {
    this.dictionary = {};
    this.length = 0;

    if (arr && arr.length > 0) {
      arr.forEach((v) => {
        this.add(v); 
      });
    }
  }

  has(element: any): boolean {
    return this.dictionary[String(element)] !== undefined;
  }

  size(): number {
    return this.length;
  }

  add(element: any): boolean {
    if (!this.has(element)) {
      this.dictionary[String(element)] = element;
      this.length++;
      return true;
    }
    return false;
  }

  remove(element: any): boolean {
    if (this.has(element)) {
      delete this.dictionary[String(element)];
      this.length--;
      return true;
    }
    return false;
  }

  values():any[] {
    return Object.values(this.dictionary);
  }

  keys(): string[] {
      return Object.keys(this.dictionary);
  }

  union(set:Set):Set {
    return new Set([...this.values() , ...set.values()])
  }

  intersection(set:Set):Set {

     const thislength = this.size();
     const argSetLength = this.size();
     const intersectionSet = new Set();
     let smallSet ;
     let largeSet ;

     if(thislength > argSetLength)
     {
        smallSet = set;
        largeSet = this;
     }else {
        smallSet = this;
        largeSet = set;
     }

     smallSet.values().forEach(v => {
        if(largeSet.has(v))
            intersectionSet.add(v);
     })
     return intersectionSet;
  }

  difference(set:Set):Set {
    const intersectionSet = this.intersection(set);
    const thisValues = this.values();
    const differenceSet = new Set();

    thisValues.forEach(v => {
       if(!intersectionSet.has(v))
          differenceSet.add(v);
    })
    return differenceSet;
  }

  isSubSetOf(set:Set):boolean {
    const thisLength = this.size();
    const intersectionSet = this.intersection(set);
    const intersectionLength = intersectionSet.length;

    return thisLength == intersectionLength;
  }
}
