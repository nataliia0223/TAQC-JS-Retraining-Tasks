const secInMinute = 60;
const minInHour = 60;
const hoursInDay = 24;
const daysInMonth = 31;

const secH = secInMinute*minInHour;
const secD = secH*hoursInDay;
const secM = secD*daysInMonth;

console.log(`Seconds in an hour: ${secH}`);
console.log(`Seconds in a day: ${secD}`);
console.log(`Seconds in a month: ${secM}`);