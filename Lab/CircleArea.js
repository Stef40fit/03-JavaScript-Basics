function solve(input) {
    if (typeof input === 'number') {
        const radius = input;
        const area = Math.PI * Math.pow(radius, 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we received a ${typeof input}.`);
    }
}

// Example usage:
solve(5);     // Output: 78.54
solve('name'); // Output: We can not calculate the circle area, because we received a string.
