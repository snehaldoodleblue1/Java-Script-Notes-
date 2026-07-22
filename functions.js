/*
Definition:
A function is a reusable block of code that performs a specific task.
It can accept inputs (parameters) and return an output.
*/

// Normal Function

function greet(name){
    return "Hello, " + name + "!";
}
 
console.log(greet("Snehal"));

// Arrow Function

const add = (a,b) => {
    return a + b;
}

console.log(add(4,7));