# Project related to Dom

## Project Link

[Click here](https://github.com/neerajkumar8546/JS-Practice)

### Solution Code

## Project 1

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />

    <script src="index.js"></script>

    <title>Document</title>
  </head>
  <body>
    <form>
      <label>Height: </label
      ><input type="text" id="height" /><br /><br />
      <label>Weight: </label
      ><input type="text" id="weight" /><br /><br />
      <button class="submit" id="submit">Calculate</button>
    </form>

    <p class="result"></p>
    <div class="guide">
      <ol>
        <li>Under Weight: Less than 18.6</li>
        <li>Normal Weight:18.6 to 24.9</li>
        <li>Over Weight: Greater than 24.9</li>
      </ul>
    </div>
  </body>
  <script></script>
</html>



```javascript

const button = document.querySelectorAll('.button');

button.forEach(
  (
    button //console.log(button)
  ) =>
    button.addEventListener('click', function (e) {
      //console.log(e);

      if (e.target.id === 'Gray') {
        document.body.style.backgroundColor = 'gray';
        const ChangeLiColor = document.querySelector('.Gray');
        ChangeLiColor.style.color = 'red';
        console.log(ChangeLiColor);
        //ChangeLiColor.style.color = 'red';
      }
      if (e.target.id === 'Navyblue') {
        console.log(e.target);
        document.body.style.backgroundColor = 'Blue';
      }
      if (e.target.id === 'Green') {
        console.log(e.target);
        document.body.style.backgroundColor = 'Green';
      }
      if (e.target.id === 'black') {
        console.log(e.target);
        document.body.style.backgroundColor = 'Black';
        document.body.style.color = 'white';
      }
    })
);

```


## Project 2 BMI Calculator

```javascript

const form = document.querySelector('form');
//console.log(form);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const Weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('.result');

  const lilistmain = document.querySelectorAll('li');
  //console.log(`Height: ${height} && Weight: ${Weight}`);

  if (isNaN(height) || isNaN(Weight) || height < 0 || Weight < 0) {
    result.innerHTML = `Please enter valid weight and height values.`;
    return;
  } else {
    //Convert height to meters
    const heightInMeters = height / 100;
    // Calculate BMI
    const bmi = Weight / (heightInMeters * heightInMeters);

    result.textContent = `BMI Calculate : ${bmi.toFixed(1)}`;

    if (bmi < 18.6) {
      const lilist = document.querySelectorAll('li:nth-child(1)');
      lilistmain.forEach(function (item) {
        item.style.color = 'black';
      });
      lilist.forEach(function (item) {
        item.style.color = 'red';
      });
    } else if (bmi >= 18.6 && bmi < 24.9) {
      const lilist = document.querySelectorAll('li:nth-child(2)');
      lilistmain.forEach(function (item) {
        item.style.color = 'black';
      });
      lilist.forEach(function (item) {
        item.style.color = 'red';
      });
    } else {
      const lilist = document.querySelectorAll('li:nth-child(3)');
      lilistmain.forEach(function (item) {
        item.style.color = 'black';
      });
      lilist.forEach(function (item) {
        item.style.color = 'red';
      });
    }
  }
});

```

## Project 3 Digital Clock 

```javascript

const clock = document.querySelector('#clock');
console.log(clock);

setInterval(function () {
  clock.innerHTML = new Date().toLocaleTimeString();
}, 1000);

```


### Project 4 Guess The Number

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const GuessInput=document.querySelector('#guessField');
const submit=document.querySelector('#subt');
const Previous_Guesses=document.querySelector('.guesses');
const Remaining_Guess=document.querySelector('.lastResult');
const lowOrHiMessage=document.querySelector('.lowOrHi');
const result=document.querySelector('.resultParas');

const p=document.createElement('p');

let StorepreviousGuess=[];
let numberOfAttempts=1;

let PlayGame=true;

if(PlayGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(GuessInput.value)
        console.log(guess);
        validateGuess(guess);
    })

}

function validateGuess(guess) {
    if(isNaN(guess))
    {
        alert('Please enter a valid number')
    }
    else if(guess>100)
    {
        alert('Please enter a number less then 100');
    }
    else if(guess<1)
    {
        alert('Please enter a number greater then 0');
    }
    else{
        StorepreviousGuess.push(guess);
        
        if(StorepreviousGuess.length<=10)
        {
            displayGuess(guess);
            checkGuess(guess);
            if(StorepreviousGuess.length==10)
            {
                displayMessage(`Game Over. Random number was ${randomNumber}`);
                endGame();
            }
        }
        
    }
}

function checkGuess(guess) {
    if(guess===randomNumber)
    {
        displayMessage('You guessed it right');
        endGame();
    }
    else if(guess<randomNumber)
    {
        displayMessage('You guessed is to low');
    }
    else if(guess>randomNumber)
    {
        displayMessage('You guessed is to High');
    }
}


function displayGuess(guess) {
    GuessInput.value='';
    Previous_Guesses.innerHTML+=`${guess} &nbsp; `;
    Remaining_Guess.innerHTML=`${10-numberOfAttempts}`
    numberOfAttempts++;
    

}

function displayMessage(message) {
    lowOrHiMessage.innerHTML=`<h2>${message}</h2>`;
    if(message="You guessed it right")
    {
        lowOrHiMessage.setAttribute('color','green')
    }
    else{
        lowOrHiMessage.setAttribute('color','black')
    }
    
}

function endGame() {
    GuessInput.value='';
    GuessInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="NewGame">Start New Game</h2>`
    result.appendChild(p);
    PlayGame=false;
    newGame();
}

function newGame() {
    const startNewGame=document.querySelector('#NewGame');
    startNewGame.addEventListener('click',function(){
        GuessInput.value='';
        randomNumber = parseInt(Math.random() * 100 + 1);
        StorepreviousGuess=[];
        numberOfAttempts=1;
        Previous_Guesses.innerHTML='';
        Remaining_Guess.innerHTML=`${11-numberOfAttempts}`;
        GuessInput.removeAttribute('disabled');
        result.removeChild(p);

        PlayGame=true;
    })
}
```
