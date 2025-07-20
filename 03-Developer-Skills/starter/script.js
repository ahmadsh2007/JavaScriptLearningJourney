// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x == 23) {
//   console.log(23);
// }

// const calcAge = birthYear => 2025 - birthYear;

// console.log(calcAge(2007));

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
//	- What is temperature amplitude? Answer: difference between the highest and the lowest temps
//	- How to compute it?
//	- What does the sensor error look like, and what to do?

// 2) Breaking up into sub-problems
//	- How to ignore the errors?
//	- Find max temp.
//	- Find min temp.
//	- Substract min from max (amplitude) and return it/print it

const calcTempAmplitude = function (temps) {
  // Sub problem (max)
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue; // Sub problem (error handling)

    if (temps[i] > max) max = temps[i]; // Sub problem (max)
    if (temps[i] < min) min = temps[i]; // Sub problem (min)
  }

  const amplitude = max - min; // Sub problem (substract min from max)
  return amplitude; // Sub problem (substract min from max)
};
console.log(calcTempAmplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// 	- With 2 arrays, should we implement functionality twice? NO! just merge two array

// 2) Breaking up into sub-problems
// 	- Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  // Sub problem (max)
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue; // Sub problem (error handling)

    if (temps[i] > max) max = temps[i]; // Sub problem (max)
    if (temps[i] < min) min = temps[i]; // Sub problem (min)
  }

  const amplitude = max - min; // Sub problem (substract min from max)
  return amplitude; // Sub problem (substract min from max)
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

function printForecast(arr) {
  let str = '... ';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log(str);
}

const thermometer = printForecast([17, 21, 23]);