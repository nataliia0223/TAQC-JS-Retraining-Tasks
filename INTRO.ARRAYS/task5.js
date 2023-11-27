const filterMostOftenNumber = numsArr => {
    let numberCount = {};
    let mostOftenNumber = 0;
    let maxOccurrences = 0;
  
    for (const number of numsArr) {
        numberCount[number] = (numberCount[number] || 0) + 1;
    }

    for (const number in numberCount) {
        if (numberCount[number] > maxOccurrences) {
            mostOftenNumber = number;
            maxOccurrences = numberCount[number];
        }
    }

    const filteredArray = numsArr.filter(number => number !== Number(mostOftenNumber));

    return filteredArray;
  };
  
  const numsArr = [6, 8, 8, 3, 3, 3, 7];
  const resultArray = filterMostOftenNumber(numsArr);
  console.log(resultArray);
  