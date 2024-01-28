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

## Project 5 Solution
```javascript
const quiz =[
    {
        title:"Quiz Application using javaScript.",
        question:"JavaScript is an ________ language.",
        option_a:"object-oriented",
        option_b:"object-based",
        option_c:"Procedural",
        option_d:"None of the above",
        answer:"object-oriented"
    },
    {
        title:"Let me see if you give this answer or not..!",
        question:"What does the iterator protocol say?",
        option_a:"An iterator is an object with a next() method that returns an object with one property - value.",
        option_b:"An iterator is an object with a next() method that returns an object with two properties - done and value.",
        option_c:"An iterator is an object with a next() method that returns an array with two elements.",
        option_d:"None of the above",
        answer:"An iterator is an object with a next() method that returns an object with two properties - done and value."
    },
    {
        title:"Quiz Application using javaScript.",
        question:"How do you supply data to an already running Generator?",
        option_a:"By calling the Generator’s reset method, supplying the data & starting the data flow again.",
        option_b:"By passing the data as a parameter to the Generator’s next method call.",
        option_c:"By calling the Generator’s update method with the data.",
        option_d:"There is no way to supply data to a running Generator.",
        answer:"By passing the data as a parameter to the Generator’s next method call."
    },
    {
        title:"Quiz Application using javaScript.",
        question:"How do you find the number with the highest value of x and y?",
        option_a:"top(x, y)",
        option_b:"Math.max(x, y)",
        option_c:"ceil(x, y)",
        option_d:"Math.ceil(x, y)",
        answer:"Math.max(x, y)"
    },
    {
        title:"Quiz Application using javaScript.",
        question:"How can you detect the client's browser name?",
        option_a:"client.navName",
        option_b:"browser.name",
        option_c:"navigator.appName",
        option_d:"None of the above",
        answer:"navigator.appName"
    },
    {
        title:"Quiz Application using javaScript.",
        question:"JavaScript is a _____ Side Scripting Language.",
        option_a:"Server",
        option_b:"Browser",
        option_c:"ISP",
        option_d:"None of the above",
        answer:"Browser"
    },
    {
        title:"Quiz Application using javaScript.",
        question:"Why JavaScript is called as Lightweight Programming Language ?",
        option_a:"because JS is client side scripting",
        option_b:"because JS is available free of cost.",
        option_c:"because we can add programming functionality inside JS",
        option_d:"because JS can provide programming functionality inside but up to certain extend.",
        answer:"because JS can provide programming functionality inside but up to certain extend."
    },
    {
        title:"Quiz Application using javaScript.",
        question:"JavaScript is an ________ language.",
        option_a:"object-oriented",
        option_b:"object-based",
        option_c:"Procedural",
        option_d:"None of the above",
        answer:"object-oriented"
    },
    {
        title:"Quiz Application using javaScript.",
        question:"JavaScript code can be called by using",
        option_a:"RMI",
        option_b:"Preprocessor",
        option_c:"Function / Method",
        option_d:"None of the above",
        answer:"Function / Method"
    },
    {
        title:"Quiz Application using javaScript.",
        question:"Which of the following is not javascript data types?",
        option_a:"Null type",
        option_b:"Undefined type",
        option_c:"Number type",
        option_d:"All of the above",
        answer:"All of the above"
    },
    {
        title:"Quiz Application using javaScript.",
        question:"Which statement defines closures in JavaScript?",
        option_a:"JavaScript is a function that is enclosed with references to its inner function scope",
        option_b:"JavaScript is a function that is enclosed with references to its lexical environment",
        option_c:"JavaScript is a function that is enclosed with the object to its inner function scope",
        option_d:"None of the above",
        answer:"JavaScript is a function that is enclosed with references to its lexical environment"
    },
]

const title = document.querySelector(".title");

const question = document.querySelector(".question");
// console.log(question.textContent);

const option_a = document.querySelector("#text-option-a");
// console.log(option_a.textContent);
const option_b = document.querySelector("#text-option-b");
// console.log(option_b.textContent);
const option_c = document.querySelector("#text-option-c");
// console.log(option_c.textContent);
const option_d = document.querySelector("#text-option-d");
// console.log(option_d.textContent);

const answer = document.querySelector(".answer");
// console.log(answer);

const submit = document.querySelector("#submit");

let currentQuestion = 0;
let score = 0;


    question.innerHTML = `Question-${currentQuestion + 1}: ${quiz[currentQuestion].question} `;
    option_a.innerHTML = quiz[currentQuestion].option_a;
    option_b.innerHTML = quiz[currentQuestion].option_b;
    option_c.innerHTML = quiz[currentQuestion].option_c;
    option_d.innerHTML = quiz[currentQuestion].option_d;
// quiz.forEach(function(elem,index){
//     question.innerHTML = `Question-${index + 1}: ${elem.question} `;
//     option_a.innerHTML = elem.option_a;
//     option_b.innerHTML = elem.option_b;
//     option_c.innerHTML = elem.option_c;
//     option_d.innerHTML = elem.option_d;
// })

submit.addEventListener("click", function(e){
    e.preventDefault();
    const checkedAnswer = document.querySelector("input[type ='radio']:checked");
    // console.log(checkedAnswer);

    if(checkedAnswer == null){
        alert("Select an option!");
    }else {
        if(checkedAnswer.nextElementSibling.textContent==quiz[currentQuestion].answer){
            score++;
            score+=10
        }
    }
    currentQuestion++;
    if(currentQuestion<quiz.length){
        question.innerHTML=`Question-${currentQuestion + 1}: ${quiz[currentQuestion].question} `;
        option_a.innerHTML=quiz[currentQuestion].option_a;
        option_b.innerHTML=quiz[currentQuestion].option_b;
        option_c.innerHTML=quiz[currentQuestion].option_c;
        option_d.innerHTML=quiz[currentQuestion].option_d;
    }else{
        alert(`Your Score ${score} out of ${(quiz.length)*10}`);
        location.reload();
    }
})
```

## Project 6 Solution

```javascript
// generate random color

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;
const startChanginColor = function () {
    if(!intervalId){
        intervalId = setInterval(chnageBgColor, 1000);
    }
    function chnageBgColor(){
        document.body.style.backgroundColor = randomColor();
        document.querySelector("#banner").style.color = randomColor();
    }
}
const stopChanginColor = function () {
    clearInterval(intervalId);
    intervalId = null;
 }
document.querySelector("#start").addEventListener("click", startChanginColor)
document.querySelector("#stop").addEventListener("click", stopChanginColor)
```

## Project 7 Solution

```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {

    insert.innerHTML = `
    <div class = "color">
    <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    
    `
})
```