
 
// PROBLEM 1
const arr1 = [3, 1, 7, 9];
const arr2 = [2, 4, 1, 9, 3];
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);  

// Merge both arrays
const combined = [...arr1, ...arr2];

// Use a map to count frequency
const frequencyMap = {};

combined.forEach(num => {
  frequencyMap[num] = (frequencyMap[num] || 0) + 1;
});

// Sum only values that occur once
let sum = 0;
for (let key in frequencyMap) {
  if (frequencyMap[key] === 1) {
    sum += parseInt(key);
  }
}

console.log("Sum of distinct elements:", sum); // Output: 13
// PROBLEM 2
// Function to calculate the dot product of two vectors
function dotProduct(v1, v2) {
    let result = 0;
    for (let i = 0; i < v1.length; i++) {
        result += v1[i] * v2[i];
    }
    return result;
}

// Function to check if two vectors are orthogonal
function isOrthogonal(v1, v2) {
    return dotProduct(v1, v2) === 0;
}

// Function to check multiple vector pairs
function checkVectorPairs(pairs) {
    const n = pairs.length;

    for (let i = 0; i < n; i++) {
        const v1 = pairs[i][0];
        const v2 = pairs[i][1];

        const dp = dotProduct(v1, v2);
        const status = isOrthogonal(v1, v2) ? "ORTHOGONAL" : "NOT ORTHOGONAL";

        console.log(`Pair ${i + 1}:`);
        console.log(`v1 = [${v1.join(', ')}]`);
        console.log(`v2 = [${v2.join(', ')}]`);
        console.log(`Dot Product = ${dp}`);
        console.log(`→ These vectors are ${status}.\n`);
    }
}

// === Sample Data: v1 and v2 with real values ===
const vectorPairs = [
    [[1, 2, 3], [4, 5, 6]],     // Not orthogonal
    [[2, 5], [-5, 2]],          // Orthogonal
    [[3, -1], [1, 3]],          // Orthogonal
    [[0, 1], [1, 0]],           // Orthogonal
    [[1, 1, 1], [1, 1, -2]]     // Not orthogonal
];

// Call the main function
checkVectorPairs(vectorPairs);

