// this is String Manipulation Functions section

// this function is to reverse a string

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello" + " " + "world"));

// ##################################

// this function is to counts the number of characters in a string.

function countNumberOfCharacter(countstring) {
  return countstring.length;
}
console.log(countNumberOfCharacter("my name is daniel finn"));

//##################################

// this function is to capitalizes the first letter of each word

function firstLetterUpperCase(name) {
  const username = name.charAt(0).toUpperCase();
  const othername = name.slice(1);
  return username + othername;
}
console.log(firstLetterUpperCase("daniel"));

// ##############################################

// ###########################################################################

// Array Functions

// this functions is to find the maximum and minimum values in an array of numbers.

function maximumAndMinimum() {
  let Arr = [90, 50, 60, 20, 0, 80, 10, 40, 70, 100];
  let minValue = Math.min(...Arr);
  let maxValue = Math.max(...Arr);

  console.log(minValue);
  console.log(maxValue);
}
maximumAndMinimum();

// #############################################

//  this function is to calculates the sum of all elements in an array.

let numbers = [1, 2, 3, 4, 5, 50, 7, 8];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// #############################################

// this function is to filters out elements from an array based on a given condition.

const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
  { name: "John", age: 40 },
];

const filteredPeople = people.filter((people) => people.name !== "John");

console.log(filteredPeople);

// #############################################

// ############################################################################

// Mathematical Functions

// this function is to calculate the factorial of a given number.

function calculateTheFactorial(n) {
  if (n == 0) return 1;
  return n * calculateTheFactorial(n - 1);
}

for (let i = 0; i < 8; i++) {
  console.log("(" + i + ") = " + calculateTheFactorial(i));
}

// #############################################

// Create a function to check if a number is prime or not

function numberIsPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const number = 17;
console.log(`${number} is prime:`, numberIsPrime(number));

// #############################################

// this function is to generate the Fibonacci sequence up to a given number of terms

function generatingFibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return generatingFibonacci(n - 1) + generatingFibonacci(n - 2);
  }
}

console.log(generatingFibonacci(10));

// #############################################

// ############################################################################
