class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
}

function showMonthName(month) {
    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    if (typeof month !== 'number' || month < 1 || month > 12) {
        throw new MonthException('Incorrect month number.');
    }

    return monthNames[month - 1];
}

try {
    const month = 12; 
    const monthName = showMonthName(month);
    console.log(`The ${month} month is: ${monthName}`);
} catch (error) {
    console.error(`Month Exception: ${error.message}`);
}
