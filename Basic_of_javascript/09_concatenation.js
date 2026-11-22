/**
 * concatenation
 * template literal / Strings
 */

// let userName = "Uday";
// let age = 99;

// // My name is Prakash and I am 99 years old
// let message = "My name is "+ userName + " and I am "+ age + " years old";
// console.log(message);

// let test =  'My name is ${userName} I am ${age} years old.'
// console.log(test);

// let multipleLineText = 'My name is ${userName} and I am ${age} years old.';
// console.log(multipleLineText);


// let fName = "Mohit";
// let lName = "Kumar";

// let fullName = `${fName} ${lName}`;
// console.log(fullName);


// let fName = "Mohit";
// let lName = "Kumar";
// let fullName = fName + " " + lName;
// console.log(fullName);



// let greet = "Hello";
// let time = "Morning";
// let mes = greet.concat(" ", time);
// console.log(mes);

// let a = ["Hello", "world", "from", "JavaScript"];
// let s = a.join(" ");
// console.log(s);


// let a = [72, 101, 108, 108, 111];
// let greet = a.reduce((acc, code) => acc + String.fromCharCode(code), "");
// console.log(greet);


// let a='GFG'
// console.log(`hello ${a}`)


// Syntax:
// Backticks (): Used to define a template literal.

// ${}: Used to insert expressions inside the string, such as variables, function calls, or arithmetic operations


// String Interpolation with Expressions
let x = 5;
let y = 10;
console.log(`The sum of ${x} and ${y} is ${x + y}`);



// Multi-line Strings with Template Literals
// const s = `This is a multi-line
// string that spans across
// several lines.`
// console.log(s);



// Tagged Template Literals
// tagged template literals allow you to customize how the string is processed providing more control over string creation

function greet(strings, name) {
    return `${strings[0]}${name.toUpperCase()}${strings[1]}`;
}

const name = 'gfg';
console.log(greet`Hello, ${name}!`);

// Escaping Backticks and Dollar Signs

const s = `This is a backtick: \` and this is a dollar sign: \\$`;
console.log(s);

