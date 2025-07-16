'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audi';
// const private = 69;
// const if = 2007;
*/


/*
function logger() {
    console.log("My name is Ahmad");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
*/


// * Funtion declaration
const age1 = calcAge1(2007)

function calcAge1(birthYear){
    return 2047 - birthYear;
}

// ! Function expression
const calcAge2 = function (birthYear){
    return 2047 - birthYear;
}

const age2 = calcAge2(2007);
console.log(age1, age2);

// You can the function declaration before defining it, but not function expression
// Please avoid doing it