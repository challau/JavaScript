/**
 * Data Types
 */


/** String */
// let useName = "uday kumar";
// console.log(typeof useName);
// console.log(typeof "sakari");

/** Number */
// let age = 99.5;
// console.log(typeof age);


/** Boolean ---> true/false --> yes/no  */
// let isProductInCart = false;
// // if product is added to cart then isProductInCart = true otherwise isProductInCart = false
// console.log(typeof isProductInCart);




/** Undefined */
// if no value assign to variable 
// let userName;
// console.log(userName); 
// console.log(typeof userName); // this also undefined
// if you run this one it will come output like undefined



/** null */

// let noValue = null;
// console.log(noValue);
// console.log(typeof noValue);

/** Object */
// const personDetails = {name : "Uday", age : 99, education : "Engg"}
// console.log(typeof personDetails)


const arrayOfNumbers = [1,2,3,4,5];
console.log(typeof arrayOfNumbers);

// Three ways to declare variables
// JavaScript provides var, let, and const.
// Keyword	Can reassign?	Scope	Recommendation
// var	Yes	Function	Avoid in modern code
// let	Yes	Block	Use when value changes
// const	No	Block	Use by default