/*
Definition:
Destructuring is a JavaScript feature that allows us
to extract values from objects or arrays
and store them directly into variables.
*/

// Object Destructuring

const student = {
    name: "Snehal",
    age: 22,
    city: "Pune"
};

const { name, age } = student;

console.log(name);
console.log(age);

// Array Destructuring

const colors = ["Red", "Blue", "Green"];

const [firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor);