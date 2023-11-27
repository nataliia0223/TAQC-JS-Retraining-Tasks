const numsArr = [1365, 143, 348, 15, 2197, 2, 19];

const primeNumbers = numsArr => {
    const filteredArray = numsArr.filter(numb => {
        return (
            numb % 3 === 0 ||
            numb % 5 === 0 ||
            numb % 7 === 0 ||
            numb % 11 === 0 ||
            numb % 13 === 0
        );
      });

     return filteredArray; 
  }

console.log(primeNumbers(numsArr));


  

