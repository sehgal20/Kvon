const reverseString = str => str.split('').reverse().join('');  
console.log(reverseString("hello"));  

const isEven = num => num % 2 === 0;  
console.log(isEven(4));  

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;  
console.log(getRandom(1, 10));  

const getMax = arr => Math.max(...arr);  
console.log(getMax([3, 7, 1, 9]));  

const celsiusToFahrenheit = c => (c * 9/5) + 32;  
console.log(celsiusToFahrenheit(30));  
