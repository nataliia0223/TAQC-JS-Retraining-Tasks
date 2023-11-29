function createArray(start, end) {
    const resultArray = [];

    for (let i = start; i <= end; i++) {
        resultArray.push(i);
    }

    return resultArray;
}

const startValue = 1;
const endValue = 23;

const result = createArray(startValue, endValue);
console.log(result);