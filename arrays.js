/*

Definition:
An array is a data structure used to store multiple values
in a single variable. Each value is called an element and
is stored at an index. Array indexing starts from 0.

*/

let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);
console.log(fruits[0]); // Apple

// Array Types

//string array 
let names = ["Snehal", "Pragati", "Riya"];
console.log(names);

//number array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//mixed array
let mixedArray = ["Snehal", 22, true, "Pune"];
console.log(mixedArray);

//Boolean array
let booleanArray = [true, false, true, false];
console.log(booleanArray);

//Nested array
let nestedArray = [["Snehal", 22], ["Pragati", 21], ["Riya", 23]];
console.log(nestedArray);

// Array Properties

let colors = ["Red", "Green", "Blue", "Yellow"];

//1. length property
console.log(colors.length);

//2.Add elements to an array
//a. push() method - adds an element to the end of the array
colors.push("Purple");
console.log(colors);

//b. unshift() method - adds an element to the beginning of the array
colors.unshift("Orange");
console.log(colors);

//3. Remove elements from an array
//a. pop() method - removes the last element from the array
colors.pop();
console.log(colors);

//b. shift() method - removes the first element from the array
colors.shift();
console.log(colors);

//4.Update elements in an array
colors[1] = "Pink";
console.log(colors);

//Array Methods

//1. indexOf() method - returns the index of the first occurrence of an element in the array
console.log(colors.indexOf("Blue"));

//2. includes() method - checks if an element is present in the array and returns true or false
console.log(colors.includes("Green"));

//3. slice() method - returns a shallow copy of a portion of an array into a new array object
let slicedColors = colors.slice(1, 3);
console.log(slicedColors);

//4. splice() method - changes the contents of an array by removing or replacing existing elements and/or adding new elements
colors.splice(1, 1, "Black");
console.log(colors);

//5. reverse() method - reverses the order of the elements in the array
colors.reverse();
console.log(colors);

//6. sort() method - sorts the elements of an array in place and returns the sorted array
colors.sort();
console.log(colors);