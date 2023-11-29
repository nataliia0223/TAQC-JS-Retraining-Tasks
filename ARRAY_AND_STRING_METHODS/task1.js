//Create an array of 20 elements and fill it with random numbers from 1 to 100.
const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);

/*Display each element of the array in the form: 
[1] – 5 
[2] – 78 ... etc.*/
arr.forEach((element, index) => {
    console.log(`[${index + 1}] – ${element}`);
});

//Check whether the array contains a number that is a multiple of 7.
const multipleOfSeven = arr.some(element => element % 7 === 0);

if (multipleOfSeven) {
    console.log('The array contains a number that is a multiple of 7.');
} else {
    console.log('The array does not contain a number that is a multiple of 7.');
}

// Sort the array in descending order.
arr.sort(function(a, b){return b - a});

console.log('Sorted array desc:', arr);

//Fill the second half of the array with zeros.
arr.fill(0, arr.length / 2);

console.log('Second half filled with zeros:', arr);

//Remove the first 3 elements from the array using one method.
arr.splice(0, 3);

console.log('Removing the first 3 elements:', arr);

//Check if the array has duplicates.
const hasDuplicates = new Set(arr).size !== arr.length;

if (hasDuplicates) {
    console.log('The array has duplicates.');
} else {
    console.log('The array does not have duplicates.');
}

//Create a new array in which to write the second half of the main array.
const secondHalfArray = arr.slice(Math.ceil(arr.length / 2));

console.log('New array with the second half of the main array:', secondHalfArray);

//Count the number of even numbers in the array.
const evenNumbersCount = arr.filter(element => element % 2 === 0).length;

console.log('Number of even numbers in the array:', evenNumbersCount);