# Projects related to DOM

## project link
[Ckick here](https://stackblitz.com/edit/web-platform-wlty22?file=index.html)

# solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener("click", (e)=>{
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'white'){
            body.style.backgroundColor = 'white';
        }else if(e.target.id === 'gray'){
            body.style.backgroundColor = 'gray';
        }else if(e.target.id === 'green'){
            body.style.backgroundColor = 'green';
        }else{
            console.log("please click at right position as instructed...!");
        }
    })
});

console.log(buttons);

```

## Project 2 solution

```javascript
const form = document.querySelector("form");
// this usecase will give you empty as it get the input which is already present in input area i.e. empty/undefined
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (height === " " || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height not ${height}..!`;
    } else if (weight === " " || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight not ${weight}..!`;
    } else {
        // results.innerHTML = (weight)/(height**2);
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the results
        if(bmi<18.6){
            results.innerHTML = `<span>result: ${bmi} i.e. Under Weight.</span>`;
        }else if(bmi > 18.6 || bmi <24.9){
            results.innerHTML = `<span>result: ${bmi} i.e. Normal Weight.</span>`;
        }else{
            results.innerHTML = `<span>result: ${bmi} i.e. Over Weight.</span>`;
        }
        console.log(bmi);
    }


});

```

## Project 3 Solution

```javascript
const clock = document.querySelector("#clock");


setInterval((e)=>{
    const date = new Date();
    // console.log(date.toLocaleTimeString());
    // clock.innerHTML = date.toLocaleTimeString();     // ---> it shows only current time
    clock.innerHTML = date.toLocaleString()     // ---> it shows both date and current time
},1000);
```

## Project 4 Solution

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
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
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```