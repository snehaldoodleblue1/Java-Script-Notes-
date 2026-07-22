/*
Definition:
Optional chaining (?.) allows us to safely access nested object properties.
If a property does not exist, it returns undefined
instead of throwing an error.
*/

const employee = {
    name: "Snehal",
    company: {
        city: "Pune"
    }
};

console.log(employee.company?.city);

console.log(employee.department?.name);