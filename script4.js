function filterLongNames(names) {
    return names.filter(name => name.length > 5);
}

// Example usage
const result = filterLongNames(["Raj", "Rohit", "Alexander", "Sam", "Jonathan"]);
console.log(result); // Output: ["Alexander", "Jonathan"]
