'use strict';

// DECLARATION

var checkAnswer = document.getElementsByClassName('check');

var numberAnswer = document.querySelector('.number');

var currntScore = document.querySelector('.score');
var highscoreResult = document.querySelector('.highscore');

var livescore = 20;
var highscore = 0;

// HINT when the check button is clicked this function is invoked

var randomValue = Math.floor(Math.random() * 20) + 1;
console.log(randomValue);
function check() {
  const guess = parseInt(document.querySelector('.guess').value);

  if (guess == randomValue) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    numberAnswer.textContent = guess;

    document.querySelector('body').style.backgroundColor = 'lightgreen';
    document.querySelector('.check').disabled = true;
    if (livescore > highscore) {
      highscore = livescore;
      highscoreResult.textContent = highscore;
    }
  } else {
    livescore--;

    if (livescore > 0) {
      guess > randomValue
        ? (document.querySelector('.message').textContent = 'HIGH')
        : (document.querySelector('.message').textContent = 'LOW');
    } else {
      if (livescore == 0) {
        document.querySelector('.message').textContent = 'Lost The Game!';
        document.querySelector('.check').disabled = true;
      }
    }

    currntScore.textContent = livescore;
  }
}

document.querySelector('.again').addEventListener('click', function () {
  livescore = 20;
  randomValue = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = livescore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';
});
