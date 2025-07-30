'use strict';

// console.log(document.querySelector('.message').textContent);

/*
* DOM (Document Object Model): structured representation of HTML documents. Allows JavaScript to access HTML Elements and Styles to manipulate them.

* API stands for Application Programming Interface
*/

/*
console.log(document.querySelector('.message').textContent);
// Change the text content
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 7;
document.querySelector('.score').textContent = 13;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
});
