// Primitive
// String

//  Number

//  Boolean

//  Undefined

//  Null

//  BigInt

//  Symbol

// Primitive data types
// Primitive values are immutable, meaning their contents cannot be changed in place. A variable holding a primitive can still be assigned a different value.

// 1. String
// Stores text.

// let name = "Uday";
// let language = 'JavaScript';

// console.log(name); // Uday


// 2. Number
// Stores integers and floating-point numbers
// let age = 21;
// let cgpa = 7.5;

// console.log(typeof age); // number
// console.log(typeof cgpa); // number


// 3. Boolean
// Stores true or false.
// let isStudent = true;
// let isPlaced = false;
// console.log(isStudent); // true


// 4. Undefined
// A variable declared without a value is undefined.

// let salary;
// console.log(salary); // undefined



// 5. Null
// Represents an intentionally empty value.

// let internship = null;
// console.log(internship); // null


// 6. BigInt
// Stores integers beyond the safe integer range of Number.
// let bigNumber = 9007199254740993n;

// console.log(typeof bigNumber); // bigint



// 7. Symbol
// Creates a unique primitive value.

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// console.log(id1 === id2); // false

let b = BigInt("0b1010101001010101001111111111111111");
console.log(b);


let s1 = Symbol("Geeks");
let s2 = Symbol("Geeks");
console.log(s1 == s2);
