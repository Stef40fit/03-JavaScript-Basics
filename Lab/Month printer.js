
function solve(monthNumber) {
    if (monthNumber >= 1 && monthNumber <= 12) {
        const months = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        const monthName = months[monthNumber - 1];
        console.log(monthName);
    } else {
        console.log("Error!");
    }
}
solve(10);