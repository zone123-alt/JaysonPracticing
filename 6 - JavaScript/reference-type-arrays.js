// Array

let fruits = ["Apple", "Pineapple", "Banana", "Pear", "Avocado"];

console.log("Fruits:", fruits);
console.log("Fruits length:", fruits.length);
// Update element/s

fruits[3] = "Dates";

console.log("Updated fruits:", fruits);
// Method - function that is associate with an object or a class.

// Adding element

// .push() method - add element at the end of the array

fruits.push("Dewberries");

console.log("Updated fruits:", fruits);
// Deleting element

// .pop() method - delete element at the end of the array

fruits.pop();

console.log("Updated fruits:", fruits);
// Searching element/s

// .includes() method - check if an element exists

console.log("Is Banana included?", fruits.includes("Banana"));
// .indexOf() method - find the index of an element

let index = fruits.indexOf("Banana");

console.log("Index is:", index);
