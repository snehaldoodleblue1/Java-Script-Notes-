/*
Definition:
An object is a collection of related data stored as key-value pairs.
It is used to represent real-world entities like users, products, or students.
*/

const student = {
    name: "Snehal",
    age :22,
    gender: "Female",
    city: "Pune"
};

console.log(student);
console.log(student.age);
console.log(student.name);

//to change value of an object property
student.city = "Mumbai";
console.log(student.city); 