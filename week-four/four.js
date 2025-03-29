function add(a, b) {
    return a + b;
}

function isEven(num) {
    return num % 2 === 0;
}

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function findMax(arr) {
    return Math.max(...arr);
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
