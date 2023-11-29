function printNumbers(a, b) {
    const resultArray = [];

    for (let i = a; i <= b; i++) {
        for (let j = 0; j < i - a + 1; j++) {
            resultArray.push(i);
        }
    }

    return resultArray;
}

console.log(printNumbers(1, 6));
