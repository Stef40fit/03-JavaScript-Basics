function solve(dayType, age) {
    let price = 0;

    switch (dayType.toLowerCase()) {
        case 'weekday':
            if (age >= 0 && age <= 18) {
                price = 12;
            } else if (age > 18 && age <= 64) {
                price = 18;
            } else if (age > 64 && age <= 122) {
                price = 12;
            } else {
                console.log("Error!");
                return;
            }
            break;
        case 'weekend':
            if (age >= 0 && age <= 18) {
                price = 15;
            } else if (age > 18 && age <= 64) {
                price = 20;
            } else if (age > 64 && age <= 122) {
                price = 15;
            } else {
                console.log("Error!");
                return;
            }
            break;
        case 'holiday':
            if (age >= 0 && age <= 18) {
                price = 5;
            } else if (age > 18 && age <= 64) {
                price = 12;
            } else if (age > 64 && age <= 122) {
                price = 10;
            } else {
                console.log("Error!");
                return;
            }
            break;
        default:
            console.log("Error!");
            return;
    }

    console.log(`${price}$`);
}

// Example usage:
solve('weekday', 25);    // Output: The price of the ticket is: $18
solve('weekend', 15);    // Output: The price of the ticket is: $15
solve('holiday', 70);    // Output: The price of the ticket is: $10
solve('invalid_day', 40); // Output: Error! Invalid day type.
solve('weekday', -5);    // Output: Error!
