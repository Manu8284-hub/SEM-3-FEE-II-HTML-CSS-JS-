function countEvenNumbers(arr) {
    let count = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}

// Example usage
console.log(countEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 3
