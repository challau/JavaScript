// // type 1
// const x = 12;
// const y = 3;
// // if it is there like "" in const numbers this like also it wil execute correctly
// console.log(x + y);

// console.log(x - y);

// console.log(x * y);

// console.log(x / y);

// console.log(x % y);

// console.log(x ** 2);

// console.log(y ** 3);


// type 2


// const x = "12";
// const y = "3";
// // if it is there like "" in const numbers this like also it wil execute correctly
// console.log(x + y);

// console.log(x - y);

// console.log(x * y);

// console.log(x / y);

// console.log(x % y);

// console.log(x ** 2);

// console.log(y ** 3);




// const x = 12;
// const y = "3";
// // if it is there like "" in const numbers this like also it wil execute correctly
// console.log(x + y);

// console.log(x - y);

// console.log(x * y);

// console.log(x / y);

// console.log(x % y);

// console.log(x ** 2);

// console.log(y ** 3);




// const t1 = "uday";
// const t2 = "kumar";

// console.log(t1 + t2);

// console.log(t1 - t2);

// console.log(t1 * t2);

// console.log(t1 / t2);

// console.log(t1 % t2);

// console.log(t1 ** 2);

// console.log(t2 ** 3);





// avaScript Arithmetic Operators

// JavaScript Arithmetic Operators are the operator that operate upon the numerical values and return a numerical value.


// 1. Addition (+) Operator
// The addition operator takes two numerical operands and gives their numerical sum. It also concatenates two strings or numbers.

// Number + Number => Addition 
// let x = 1 + 2;
// console.log( x ); // 3

// Number + String => Concatenation
// let y =  5 + "hello"; 
// console.log( y ); // 5Hello


// 2. Subtraction (-) Operator
// The subtraction operator gives the difference between two operands in the form of numerical value.
// Number - Number => Subtraction 
// let x = 10 - 7;
// console.log( x ); // 3

// let y = "Hello" - 1; 
// console.log( y ); // NaN


// 3) Multiplication (*) operator
// Multiplication operator gives the product of operands where one operand is a mutliplicand and another is multiplier
// Number (*) Number => Multiplication

// let x = 3 * 3;
// let y = -4 * 4;

// console.log(x);
// console.log(y);

// let a = Infinity * 0;
// let b = Infinity * Infinity;

// console.log(a);
// console.log(b);

// let z = 'hi' * 2;
// console.log(z);

// 4. Division (/) Operator
// The division operator provides the quotient of its operands where the right operand is the divisor and the left operand is the dividend

// let x = 5/2;
// let y = 1.0/2.0;

// console.log(x);
// console.log(y);

// let a = 3.0/0;
// let b = 4.0/0.0;
// console.log(x);
// console.log(y);

// let z = 2.0 / -0.0;
// console.log(z);




// 5. Modulus (%) Operator
// The modulus operator returns the remainder left over when a dividend is divided by a divisor. The modulus operator is also known as the remainder operator. It takes the sign of the dividend.


// number % number => Modulus of the number

// let x = 9 % 5;
// let y = -12 % 5;
// let z = 1 % -2;
// let a = 5.5 % 2;
// let b = -4 % 2;
// let c = NaN % 2;

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);
// console.log(b);
// console.log(c);



// 6. Exponentiation (**) Operator
// The exponentiation operator gives the result of raising the first operand to the power of the second operand. The exponentiation operator is right-associative. 

// In JavaScript, it is not possible to write an ambiguous exponentiation expression i.e. you cannot put an unary operator (+ / - / ~ / ! / delete / void) immediately before the base number.

// Number * Number => Exponential of the Number

// let y = -(4 ** 2);
// let z = 2 ** 5;
// let a = 3 ** 3;
// let b = 3 ** 2.5;
// let c = 10 ** -2;

// console.log(y);
// console.log(z);
// console.log(a);
// console.log(b);
// console.log(c);


// 7. Increment (++) Operator
// The increment operator increments (adds one to) its operand and returns a value.

// If used postfix with the operator after the operand (for example, x++), then it increments and returns the value before incrementing.
// If used prefix with the operator before the operand (for example, ++x), then it increments and returns the value after incrementing.


// // Postfix
// let a = 2;
// b = a++; // b = 2, a = 3

// // prefix 
// let x = 5;
// y = ++x; // x = 6, y = 6

// console.log(a);
// console.log(b);
// console.log(x);
// console.log(y);




// 8. Decrement (- -) Operator
// The decrement operator decrements (subtracts one from) its operand and returns a value.

// If used postfix, with operator after operand (for example, x--), then it decrements and returns the value before decrementing.
// If used prefix, with the operator before the operand (for example, --x), then it decrements and returns the value after decrementing.


// prefix 
// let a = 2;
// b = --a;


// // postfix

// let x = 3;
// y = x--;

// console.log(a);
// console.log(b);
// console.log(x);
// console.log(y);


// 9=> Unary Negation (-) operator
// this is a unary operator  it operates on a single operand. it given the negation of an operand
// let a = 3;
// b = -a;
 
// // unary negation operator
// // can convert non-number 
// // into a number
// let x = "3";
// y = -x;

// console.log(a);
// console.log(b);
// console.log(x);
// console.log(y);




// 10. Unary Plus (+) Operator
// This is a way to convert a non-number into a number. Although unary negation (-) also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number.


// convert non-number to a number

let a  = +4;
let b  = +'2';
let c  = +true;
let x = +false;
let y = +null;

console.log(a);
console.log(b);
console.log(c);
console.log(x);
console.log(y);

