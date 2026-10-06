// console.log(Math.PI);
// console.log(Math.E);

// Math.round - rounds a number to the nearest integer
console.log(Math.round(4.6));  // 5
console.log(Math.round(4.3)); // 4

// Math.floor - rounds down to the nearest integer
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4

// Math.ceil - rounds up to the nearest integer
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5

// Math.max and Math.min find the largest / smallest number
console.log(Math.max(10, 20, 5, 40, 30)); // 40
console.log(Math.min(10, 20, 5, 40, 30)); // 5

const nums = [1, 2, 3, 4, 5, 10, 40, 100, 44, 30];
console.log(Math.min(...nums)); // 1
console.log(Math.max(...nums)); // 100

// Math.abs() - gets the absolute value of a number
// converts negative numbers to positive
console.log(Math.abs(-10)); //10
console.log(Math.abs(10)); //10

// Math.pow() - power of a number
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 2)); // 25

console.log(2 ** 3); // 8
console.log(5 ** 2); // 25

// Math.sqrt - square root
console.log(Math.sqrt(25));  // 5
console.log(Math.sqrt(49)); // 7

// check if a number is a perfect square
console.log("funtion to see if perfect square")

function isPerfectSquare(num) {
    if (Math.sqrt(num) % 1 === 0) return true;
    return false;
}
console.log(isPerfectSquare(10)); // false
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(25)); // true
console.log(isPerfectSquare(17)); // false