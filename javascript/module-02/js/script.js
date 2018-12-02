"use strict";

let userInput;
const numbers = [];
let total = 0;
let number;

do {
  number = prompt("Please enter number:");
  console.log(number);

  numbers.push(Number(number));
  console.log(numbers);
} while (number !== null);

for (const number of numbers) {
  total = total + number;
}

alert("Общая сумма чисел равна "+ String(total));