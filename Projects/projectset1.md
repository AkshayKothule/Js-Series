# projects releted to Dom

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code 

## Project 1 Solution

```javascript 
console.log("Akshay");

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
  const colorChange=e.target.id;
    switch(colorChange){
       case "grey":
         body.style.backgroundColor=e.target.id;
         break;
      case "white":
        body.style.backgroundColor=e.target.id;
      case "blue":
          body.style.backgroundColor=e.target.id;
      case "yellow":
            body.style.backgroundColor=e.target.id;
    }

  });
});


```
## Project 2 Solution

``` javascript
const form = document.querySelector('form');

//this usecase will give you empty
// const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); //default action top karo

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a vaild height ${height}`;
  }else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a vaild weight${weight}`;
  }else{
    const BMI=(weight /((height * height)/10000)).toFixed(2);
    // show the result
    results.innerHTML=`<span>${BMI}</span>`
  }
});

```
## project 3 Solution code

```javascript
const clock = document.getElementById('clock');
// const clock=document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleDateString());
  clock.innerHTML = date.toLocaleDateString();
}, 1000);
```

## Project 4 Solution code
```javascript
const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //check value in bet 1 to 100

  if (isNaN(guess)) {
    alert('please enter a vaild number');
  } else if (guess < 1) {
    alert('please enter a greater number');
  } else if (guess > 100) {
    alert('please enter less number 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over . Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //random val check hi or low or equl
  if (guess === randomNumber) {
    displayMessage(`you gessed a right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}
function displayGuess(guess) {
  //clean the val ,update arry
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  Remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //message display method
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disable', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.append(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    userInput.value = '';
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    Remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disable');
    startOver.removeChild(p);
    playGame = true;
  });
}

```
## Project 5 code Solution
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>

  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>`;
});
```
## Project 6 code Solution

```javascript
//generate Random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());
let intervalId;
const startColorChange = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopColorChange = function () {
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector('#start').addEventListener('click', startColorChange);
document.querySelector('#stop').addEventListener('click', stopColorChange);

```
