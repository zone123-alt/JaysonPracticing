// Functions

// Reusable block of code that can be executed whenever needed.

// 1. Function Definition

function greet() {
  console.log("Hello! Welcome to the world of functions.");

  console.log("Let's go!");
}

greet();

greet();

// 2. Function definition with parameters
/* 
    Parameters = placeholder
    Arguments - values passed to a funtion's parameters.
*/

function sum(num1, num2) {
  return num1 + num2; // This is the end statement.

  console.log("Unreachable");
}

console.log("Sum:", sum(10, 5));
