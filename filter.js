/*
Definition:
filter() is an array method that creates a new array
containing only the elements that satisfy a given condition.
It does not modify the original array.
*/

const numbers = [10, 20, 30, 40, 50];

const result = numbers.filter((number) => {
    return number > 25;
});

console.log("Original Array:", numbers);

console.log("Filtered Array:", result);