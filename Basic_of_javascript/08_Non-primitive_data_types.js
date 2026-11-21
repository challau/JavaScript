// 5. Non-primitive data types
// Non-primitive values are objects. Unlike primitives, objects can generally have their properties or elements changed.

// 1. Object
// Stores data using key-value pairs.
// const student = {
//   name: "Uday",
//   age: 21,
//   college: "DSU"
// };

// console.log(student.name); // Uday
// console.log(student.age);  // 21


// 2. Array
// Stores an ordered collection of values.
// const languages = ["JavaScript", "Python", "C++"];

// console.log(languages[0]); // JavaScript
// console.log(languages[1]); // Python

// 3. Function
// A reusable block of code.

// function greet(name) {
//   return "Hello " + name;
// }

// console.log(greet("Uday")); // Hello Uday


// 6. Primitive vs non-primitive — Important difference
// Primitive: Assignment copies the value
// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10
// console.log(b); // 20


// Changing b doesn't affect a.


// Non-primitive: Assignment copies the reference to the same object
// const a = { age: 20 };
// const b = a;

// b.age = 25;

// console.log(a.age); // 25
// console.log(b.age); // 25


// Both variables refer to the same object, so changing its property through b is visible through a.


// console.log(typeof "Uday");       // string
// console.log(typeof 21);           // number
// console.log(typeof true);         // boolean
// console.log(typeof undefined);    // undefined
// console.log(typeof 10n);          // bigint
// console.log(typeof Symbol("x"));  // symbol

// console.log(typeof {});           // object
// console.log(typeof []);           // object
// console.log(typeof function() {}); // function
// console.log(typeof null);         // object




let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);


let gfg = {
    type: "Company",
    location: "Noida"
}
console.log(gfg.type)



// Defining a function to greet a user
function greet(name) { return "Hello, " + name + "!"; }
// Calling the function
console.log(greet("Uday"));




// 4. Date Object
// The Date object in JavaScript is used to work with dates and times, allowing for date creation, manipulation, and formatting.

// create a new data object for the
// current data and time
let currentDate = new Date();
// Displaying the current data and time

console.log(currentDate);




// 5. Regular Expression
// A RegExp (Regular Expression) in JavaScript is an object used to define search patterns for matching text in strings.

// Creating a regular expression to match the word "hello"
let pattern = /hello/;
// Testing the pattern against a string
// Returns false because "hello" is not present
let result = pattern.test("Hello, world!"); 
console.log(result);