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
// ! Funtion declaration
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


/*
// Arrays
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// You have to use `new` keyword
const years = new Array(2007, 2024, 2026);
console.log(years);

console.log(years[0]);
console.log(years.length);

// to print the last element
console.log(years[years.length - 1]);

// only primitive values are immutable
// so const won't affect array but note that we can't replace the entire array in const (check line 122)
console.log(friends);
friends[2] = 'Ahmad';
console.log(friends);

// friends = ['Ahmad', 'Bob'];

// Array can hold differenet value in the same time
const Ahmad = ['Ahmad', 'Shatnawi', 2025 - 2007, 'Student', friends];
console.log(Ahmad);

// Exercise
const calcAge = function (birthYear){
    return 2025 - birthYear;
}
const birthYear = [1966, 1976, 2000, 2002, 2007, 2011];

const age1 = calcAge(birthYear[0]);
const age2 = calcAge(birthYear[1]);
const age3 = calcAge(birthYear[birthYear.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(birthYear[0]), calcAge(birthYear[1]), calcAge(birthYear[birthYear.length - 1])];
console.log(ages);
*/


/*
// it add the new element to the end of the array
const friends = ['Michael', 'Steven', 'Peter'];

// the push method returns a value which is the length of the new array
const newLength = friends.push('Suhaib');
console.log(friends);
console.log(newLength);

// it adds the new element to the beginning of the array and return the length of the new array
friends.unshift('Ahmad');
console.log(friends);

// remove elements
// it returns the removed element
const popped = friends.pop(); // Last
console.log(friends);
console.log(popped);

// remove the first element of the array
// it also returns the removed element
friends.shift(); // First
console.log(friends);

// locate an element
console.log(friends.indexOf('Peter'));
console.log(friends.indexOf('Ahmad')); // We will get -1 because it's not in the array

// includes returns false or true not the index of the element
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Ahmad'));
console.log(friends.includes('23')); // it won't work because its a string, it uses ===
console.log(friends.includes(23)); // it will work

if (friends.includes('Peter')){
    console.log("You have a friend called Peter");
}
*/


/*
function calcTip(bill){
    let tip = 0;
    if (bill >= 50 && bill <= 300){
        tip = .15 * bill;
    } else {
        tip = .2 * bill;
    }
    return tip;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
*/


/*
// Array
const ahmadArray = [
    'Ahmad',
    'Shatnawi',
    2025 - 2007,
    'Student',
    ['Omar', 'Homam', 'Wasfi']
];

// Object
// Key: Value (fisrtName: 'Ahmad')
// each key is called property
// property firstName has the value of 'Ahmad'
const ahmad = {
    fisrtName: 'Ahmad',
    lastName: 'Shatnawi',
    age: 2025 - 2007,
    job: 'Student',
    friends: ['Omar', 'Homam', 'Wasfi']
};

console.log(ahmadArray);
console.log(ahmad);
*/


/*
const ahmad = {
    firstName: 'Ahmad',
    lastName: 'Shatnawi',
    age: 2025 - 2007,
    job: 'Student',
    friends: ['Omar', 'Homam', 'Wasfi']
};

console.log(ahmad.firstName);
console.log(ahmad['firstName']); // we can use any expression

const nameKey = 'Name';
console.log(ahmad['first' + nameKey]);
console.log(ahmad['last' + nameKey]);

// console.log(ahmad.'first' + nameKey); // ! won't work
// const interestedIn = prompt("What do you want to know about Ahmad?");
// console.log(ahmad.interestedIn);  // won't work because we don't have property called interestedIn

// if(ahmad[interestedIn]){
//     console.log(ahmad[interestedIn]); // will work
// } else {
//     console.log('Wrong request!');
// }

ahmad.location =   'Jordan';
ahmad['discord'] = 'leeking.s';
console.log(ahmad);

console.log(`${ahmad.firstName} has ${ahmad['friends'].length} friends, and his best friend is called ${ahmad['friends'][0]}`);
*/


/*
const ahmad = {
    firstName: 'Ahmad',
    lastName: 'Shatnawi',
    birthYear: 2007,
    job: 'Student',
    friends: ['Omar', 'Homam', 'Wasfi'],
    hasDriverLicesnse: true,

    calcAge: function(birthYear){
        return 2025 - birthYear;
    }
};

console.log(ahmad.calcAge(2007));
console.log(ahmad['calcAge'](2007));

console.log(ahmad['calcAge'](ahmad.birthYear));
console.log(ahmad['calcAge'](ahmad['birthYear']));

// OR DO THIS TO PREVENT REPEATING YOURSELF IN FUNCTIONS (look at the function)
// this calls the object itself
const ahmad2 = {
    firstName: 'Ahmad',
    lastName: 'Shatnawi',
    birthYear: 2007,
    job: 'Student',
    friends: ['Omar', 'Homam', 'Wasfi'],
    hasDriverLicesnse: true,

    // calcAge: function(){
    //     return 2025 - this.birthYear;
    // }

    // We do this instead of the one above because we can prevent recalculating and executing the function
    calcAge: function(){
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return (`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicesnse ? 'a': 'no'} driver's license`)
    }
};

// 4 processes in total
console.log(ahmad2.calcAge());
console.log(ahmad2.calcAge());
console.log(ahmad2.calcAge());
console.log(ahmad2.calcAge());

// 1 process in total
console.log(ahmad2.calcAge());
console.log(ahmad2.age);
console.log(ahmad2.age);
console.log(ahmad2.age);

// Challenge
// "Ahmad is a 18-year old student, and he has a driver's license"
console.log(ahmad2.getSummary());
*/


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height );
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height : 1.95,

    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height );
        return this.bmi;
    }
}

console.log(`${mark.calcBMI() > john.calcBMI() ? mark.fullName : john.fullName}'s BMI (${mark.calcBMI() > john.calcBMI() ? mark.calcBMI() : john.calcBMI()}) is higher than ${mark.calcBMI() > john.calcBMI() ? john.fullName : mark.fullName}'s (${mark.calcBMI() > john.calcBMI() ? john.calcBMI() : mark.calcBMI()})!`);