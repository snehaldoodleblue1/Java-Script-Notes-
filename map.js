/*
Definition:
map() is an array method that creates a new array by applying
a function to every element of the original array.
It does not modify the original array.
*/

const numbers = [1, 2, 3, 4];

const doubled = numbers.map((number) => {
    return number * 2;
});

console.log("Original Array:", numbers);

console.log("New Array:", doubled);