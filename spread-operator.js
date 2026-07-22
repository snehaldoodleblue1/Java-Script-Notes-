/*
Definition:
The spread operator (...) is used to copy,
merge, or expand arrays and objects.
*/

// Array

const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log(arr2);

const arr3 = [...arr1, 4, 5];

console.log(arr3);

// Object

const user = {
    name: "Snehal",
    age: 22
};

const updatedUser = {
    ...user,
    city: "Pune"
};

console.log(updatedUser);