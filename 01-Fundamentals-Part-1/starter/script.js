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