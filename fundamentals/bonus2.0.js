function converteNum(numRomano) {
    let tabNums= {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
      };
    let numFinal = 0;
    for (let letra in numRomano) {
        let num = tabNums[numRomano[parseInt(letra)]];
        let proxNum = tabNums[numRomano[parseInt(letra) + 1]];
        if (num < proxNum) {
            numFinal -= num;
        }
        else {
            numFinal += num;
        }
    }
    return numFinal;
}
console.log(converteNum('MDCLXIV'));
