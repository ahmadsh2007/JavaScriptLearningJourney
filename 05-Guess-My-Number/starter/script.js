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

const secretNumber = Math.trunc(Math.random() * 100) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber)
    document.querySelector('.message').textContent = 'Correct Number!';
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You just lost the game!!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You just lost the game!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
