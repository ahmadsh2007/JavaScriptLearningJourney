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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function wrongAnswer(message) {
  if (score > 1) {
    displayMessage(message);
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You just lost the game!!!');
    document.querySelector('.score').textContent = 0;
  }
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) wrongAnswer('Too High!');
  else if (guess < secretNumber) wrongAnswer('Too low!');
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
