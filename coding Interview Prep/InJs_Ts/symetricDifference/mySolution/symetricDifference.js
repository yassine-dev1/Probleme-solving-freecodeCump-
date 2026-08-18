function symTwoArr(arr1, arr2) {
    // 💡 CORRECTION : On élimine les doublons de chaque tableau avant de comparer
    const set1 = [...new Set(arr1)];
    const set2 = [...new Set(arr2)];

    const arr1Length = set1.length;
    const arr2Length = set2.length;
    const maxLength = Math.max(arr1Length, arr2Length);
    const symDifItems = [];

    for (let idx = 0; idx < maxLength; idx++) {
        if (idx < arr1Length && !set2.includes(set1[idx]))
            symDifItems.push(set1[idx]);

        if (idx < arr2Length && !set1.includes(set2[idx]))
            symDifItems.push(set2[idx]);
    }

    return symDifItems;
}

function sym(...args) {
    if (args.length < 2) {
        console.log("this function needs Two arrays in arguments or more!!");
        return;
    }

    let currArr = args[0];

    for (let idx = 1; idx < args.length; idx++) {
        currArr = symTwoArr(currArr, args[idx]);
    }

    // Le tri final si demandé par le problème (optionnel selon les consignes)
    return currArr.sort((a, b) => a - b);
}

// --- Test avec la correction ---
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 55]));
// Résultat attendu : [1, 4, 55]