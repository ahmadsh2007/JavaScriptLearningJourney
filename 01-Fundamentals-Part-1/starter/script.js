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


/*
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
*/


/*
const age = 16;
const allowedToDriveAge = 18;
const isOldEnough = age >= allowedToDriveAge;

// if(isOldEnough){
//     console.log("You're allowed to get a license 🚘");
// }

if(age >= allowedToDriveAge){
    console.log("You're allowed to drive 🚗");
} else {
    const yearLeft = 18 - age;
    console.log("You're not allowed to drive 💥💥");
    console.log(`Come back in ${yearLeft} year/s.`);
}

let century;
const birthYear = 2007;
if (birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/


/*
// Type conversion
const inputYear = '2007';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(18 + inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Ahmad")); // we will get NaN
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I'm " + 18 + " years old.");
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + '7'); // 2 + 3 + 4 = 9, 9 + '7' = '97'
console.log('10' - '4' - '3' - 2 + '5') // 10 - 4 - 3 = 3, 3 - 2 = 1, 1 + '5' = '15'
*/


/*
// 5 falsy values: 0, '', undefined, null, NaN
// everything else is truthy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Ahmad'));
console.log(Boolean({})); // it's an empty object
console.log(Boolean(''));

const money = 0;
if(money){
    console.log("Don't spend it all :)");
} else {
    console.log("You should get a job!");
}

// 0 will bug the code
let height = 0;
if(height){
    console.log("Height is defined!");
} else {
    console.log("Height is not defined (UNDEFINED)");
}
*/


/*
// === is called strict equality operator because it does not perform type coercsion
// == is called loose equality operator because it performs type coercsion
// 18 === '18' ---> false
// 18 == '18' ----> true
// It's better to always use strict equality operator and convert the value type manually
// !== is the strict not equal operator
// != is the loose not equal operator
let age = 18;

if(age === 18) console.log("You just became an adult!!! (strict)");
if(age == 18) console.log("You just became an adult!!! (loose)");

age = '18';

if(age === 18) console.log("You just became an adult!!! (strict)");
if(age == 18) console.log("You just became an adult!!! (loose)");

let favNumber = Number(prompt("What's your favoutire number?"));
console.log(typeof favNumber, favNumber);

if(favNumber == 18){
    console.log("Cool! 18 is an amazing number!")
}

if(favNumber === 18){
    console.log("Cool! 18 is an amazing number!")
}
*/


/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

const shoudlDrive = hasDriversLicense && hasGoodVision;
if(shoudlDrive){
    console.log("You are able to drive!");
} else {
    console.log("Someone else should drive...");
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log("You are able to drive!");
} else {
    console.log("Someone else should drive...");
}
*/


/*
const scoreDolphins = (96 + 102 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
} else if(scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}
*/


const day = 'Monday';

switch(day){
    case 'Monday':
        console.log("Study JS");
        console.log("Take care of your family before");
        break;
    case 'Tuesday':
        console.log("Study CS50");
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log("Study IELTS and SAT");
        break;
    case 'Friday':
    case 'Saturday':
    case 'Sunday':
        console.log("Do whatever you want");
        break;
    default:
        console.log("Ha???");
}