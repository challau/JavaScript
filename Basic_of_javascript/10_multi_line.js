// JavaScript Template Literals
// JavaScript Template Literals are mainly classified into 7 types based on their usage.

// 1. Multi-line Strings
// Template literals support multi-line strings without special characters. This example displays a simple poem.
// const poem = `Roses are red
// violets are bule
// JavaScript is awesome,
// And so are you`;

// console.log(poem);

// Backticks allow multi-line strings naturally.
// Line breaks are preserved as written.
// The console.log outputs the formatted string.


// 2) Dynamic Expressions
// Embedding arithmetic expressions within template literals. This example calculates the sum dynamically

const a = 5, b = 10;
const result = `sum of ${a} and ${b} is ${a + b}`;
console.log(result);


// 3) tagged Templates 
// tags process template literals directly modifying how string and placeholders are combined
function tag(string, ...values){
    return string.reduce((acc, str, i) => acc + str + (values [i] || ''), '');
}

const output = tag`Hello, ${"Elis"}!`;
console.log(output);


// The function receives the static parts as an array and interpolated values separately.
// Returns a correctly formatted string without additional concatenation.

// 4. HTML Template

// Template literals build HTML strings dynamically. This example creates an h1 element.
const title = "Welcome";
const html = `<h1>${title}</h1>`;
console.log(html);
// ${title} inserts the variable title into the string.
// The result is <h1>Welcome</h1>.
// Such templates are useful in dynamic web content generation.



// 5. Conditionals in Templates

// Ternary operators evaluate conditions within template literals. This example displays a role based on a condition.

const isAdmin = true;
const userRole = `User role: ${isAdmin ? "Admin" : "Guest"}.`;
console.log(userRole);

// ${ isAdmin ? "Admin" : "Guest"} evaluates the condition.
// "Admin" is inserted when isAdmin is true.

// 6. Loops with Templates

// Loops generate dynamic content within templates. This example creates a list of items.
const items = ["apple", "banana", "cherry"];
const list = `Items: ${items.map(item => `\n- ${item}`)}`;
console.log(list);

// items.map transforms each item into a string with \n- prefix.
// join combines the strings into one.


// 7. Embedding Functions
// Template literals call functions directly. This example transforms text to uppercase.

const toUpper = str => str.toUpperCase();
const s = `Shouting: ${toUpper("hello")}`;
console.log(s);

// ${toUpper("hello")} invokes the function.
// The result ("HELLO") is inserted into the string.
// Template literals support embedding any valid expression.

