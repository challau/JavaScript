/**
 * Lesson 4
 * variable Naming convertion
 */

// a varible can't begin with a number 
// let userName;
// let userAge;
// let userHomeAddress;

// let age;

// let _;

// let $ = "hello";
// console.log($)

// let number1;

// let number_2;


let userName = "Uday Kumar";
console.log(userName);



// Variable naming conventions in JavaScript

// Variables cannot start with special symbols like a hyphen (-). Using - is interpreted as an operator, so it causes an error.
// var #abc = "abc";
// console.log(#abc); we can't start with variable name
// We get an error because starting the variable name with an # symbol gives an error as it's not the right naming convention.



// this is correct ways to declare
// var _abc = "abc";
// console.log(_abc);


// [Example 2]: Check if spaces are allowed. The spaces aren't allowed. an uncaught syntax error is raised.

// var  a bc = "abc";
// console.log(a bc);


// [Example 3]: Variable names are case-sensitive, so uppercase (A) and lowercase (a) are treated as different identifiers.

// Enabling strict mode
// "use strict";
// Defining variables of different cases
var abc = "bcd";
var ABC = "efg";
console.log(abc);
console.log(ABC);
console.log(abc == ABC);


// [Example 4]: Using reserved words as variable names causes errors. For example, naming a variable class raises an exception like “unexpected token 'class'.
// var class = "class";
// console.log(class);












