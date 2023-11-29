//The user enters a string. Count the number of spaces in it.
const inputString = 'ddd ddd ddd ddd ddd';
const spaceCount = inputString.split(' ').length - 1;

console.log('Number of spaces :', spaceCount);

//Write a function that converts the first character of a string to uppercase.
function capitalizeFirstCharacter(inputString) {
    return inputString[0].toUpperCase() + inputString.slice(1);
}
const resultString = capitalizeFirstCharacter(inputString);

console.log('String with first capital character:', resultString);

//Count the number of words in the string that the user entered.
const wordCount = inputString.split(/\s+/).filter(word => word.trim() !== '').length;

console.log('Number of words in the string:', wordCount);

/*The user enters a phrase. Convert it to an abbreviation.
For example: portable document format in PDF, object-oriented programming in OOP.*/
function createAbbreviation(inputString) {
    const abbreviation = inputString.split(/\s+/).map(word => word[0].toUpperCase()).join('');

    return abbreviation;
}

console.log('Abbreviation:', createAbbreviation(inputString));

//Check if the entered string is a palindrome.
function isPalindrome(inputString) {
    const cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedString === cleanedString.split('').reverse().join('');
}

if (isPalindrome(inputString)) {
    console.log(`"${inputString}" is a palindrome.`);
} else {
    console.log(`"${inputString}" is not a palindrome.`);
}

/*Write a function that takes a url and displays detailed information about it.
For example: url «https://career.softserveinc.com/uk-ua/technology/course» information:
protocol: https
domain: career.softserveinc.com
path: uk-ua/technology/course*/

function investigateUrl(url) {
    const urlObject = new URL(url);

    const protocol = urlObject.protocol.slice(0, -1); 
    const domain = urlObject.hostname;
    const path = urlObject.pathname;

    console.log('Protocol:', protocol);
    console.log('Domain:', domain);
    console.log('Path:', path);
}

const inputUrl = 'https://career.softserveinc.com/uk-ua/technology/course';
investigateUrl(inputUrl);