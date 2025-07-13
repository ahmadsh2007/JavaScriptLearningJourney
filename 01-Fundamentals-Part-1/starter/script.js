// * Check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

/*
let js = "Amazing";
console.log(40 + 8 + 23 - 10);

console.log("Ahmad");
console.log(23);

let firstName = "Ahmad";
console.log(firstName);

// We should not start with numbers, and only allowed to use numbers, letters, _, and $
// We use UPPER CASE for variables that never change like PI (check line 19 & 20)
// Variables names should be understandable (check line 14-17)

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
let job1 = "Programmer";
let job2 = "Teacher";

let PI = 3.14159;
console.log("the value of pi is", PI)

console.log(myFirstJob);
*/

/*
true;
console.log(true);
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// * The values hold the type in JS not the variable

let myAge = 18;
// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof myAge);
// console.log(typeof "My name is Ahmad");

// Dynamic typing
javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

// 😔 MIT didn't accept me yet
let University;
// Both the value and type are 'undefined'
console.log(University);
console.log(typeof University);

University = "MIT";
console.log(typeof University)

// JavaScript will show it as an Object, and it's regarded as a bug (They never fixed this bug for legacy reasons)
console.log(typeof null)
*/

/*
let age = 30;
age = 31;

const birthYear = 2007;

// Try to avoid 'var' as much as possible
// You should know that the let is block scoped and that VAR is function-scoped
var job = 'Programmer';
job = 'Engineer';

// DO NOT DO IT, because it doesn't create the variable in the current scope. Instead, JS will create a property on the global object
lastName = 'Shatnawi'
console.log(lastName);
*/

/*
// An operator basically allows us to transform values or combine multiple values
// There are many categories of operators like mathematical operators, comparison operators logical operators, assignment operators, and many more

// mathematical operators
const year = 2050
const ageAhmad = year - 2007;
const ageRuh = year - 2029;
console.log(ageAhmad, ageRuh);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageAhmad / 2, ageRuh * 2, ageAhmad - ageRuh, 2 ** 3);

// Plus, + , operators can be used to join strings
const firstName = "Ahmad";
const lastName = "Shatnawi";
console.log("Hello " + firstName + ' ' + lastName);

console.log(typeof ageRuh);

// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 (25)
x *= 4; // x = x * 4 (100)
x++; // x = x + 1 (101)
x--; // x + x - 1 (100)
console.log(x);

// comparison operators
console.log(ageAhmad > ageRuh);
console.log(ageRuh >= 18);

const isOlder = ageAhmad > ageRuh;
*/

/*
const now = 2037;
const ageAhmad = now - 2007;
const ageRuh = now - 2029;

console.log(now - 2007 > now - 2018);

let x, y;
x = y  = 25 - 10 - 5; // Check Operator Precedence on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
console.log(x, y);
*/

const firstName = 'Ahmad';
const job = 'Software Developer';
const birthYear = 2007;
const age = 2025 - birthYear;

const ahmad = "I'm " + firstName + ', a ' + age + ' years old ' + job + '!';
console.log(ahmad);

// Template Literals
const ahmadTemplate = `I'm ${firstName}, a ${age} years old ${job}!`;
console.log(ahmadTemplate);

console.log(`You can use \`\` for all strings`);

// Mult-line string
console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
