function reverseString(str) {  
  return str.split('').reverse().join('');  
}  
console.log(reverseString("hello"));  

function isEven(num) {  
  return num % 2 === 0;  
}  
console.log(isEven(4));  

function getRandom(min, max) {  
  return Math.floor(Math.random() * (max - min + 1)) + min;  
}  
console.log(getRandom(1, 10));  

function getMax(arr) {  
  return Math.max(...arr);  
}  
console.log(getMax([3, 7, 1, 9]));  

function celsiusToFahrenheit(c) {  
  return (c * 9/5) + 32;  
}  
console.log(celsiusToFahrenheit(30));  
