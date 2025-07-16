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


/*
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

// Arrow function
const calcAge3 = birthYear => 2047 - birthYear;
const age3 = calcAge3(2007);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2047 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(2007, 'Ahmad Shatnawi'));
*/


/*
function cutFruit(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

let average = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins = average(44, 23, 71);
let scoreKoalas = average(65, 34, 27);

function checkWinner(avgDolphins , avgKoalas){
    if (avgDolphins > avgKoalas * 2){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins * 2){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins");
    }
}
*/