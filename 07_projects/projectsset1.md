# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    document.body.style.backgroundColor = e.target.id;
  });
});


```

## project 2 solution

```javascript
const form = document.querySelector('form'); // we will select the form first
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value) // this will not work outside as it will have only emtpy value the value will be stored in it after the sumbit event occured

form.addEventListener('submit', function (e) {  // we will use the sumbit event listener
  e.preventDefault(); // we will stop the default property of form and submit event that is to send the info to server we stop it to get the values.

  const height = parseInt(document.querySelector('#height').value); // here we are using the parseInt to convert the string to integer value
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

 // Clear previous result
  results.innerHTML = "";  // we are using this clear the result of previous submit else the .appendChild will keep appending all the result and errors

  if (isNaN(height) || height <= 0) { // isNaN to check its a not a number
    const errorText = document.createTextNode(`Please give a valid height: ${height}`);  // we could had used innerHTML if we want to.
    results.appendChild(errorText); // we can also give the errortext value directly in the appendChild
  } 
  else if (isNaN(weight) || weight <= 0) {
    const errorText = document.createTextNode(`Please give a valid weight: ${weight}`);
    results.appendChild(errorText);
  } 
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);  // tofixed used to get 2 decimal value only 
    if(bmi < 18.6){
      results.appendChild(document.createTextNode(`Your BMI is UnderWeight ${bmi}`)); 
    } else if (bmi >= 18.6 && bmi <=24.9 ){
      results.appendChild(document.createTextNode(`Your BMI is Normal ${bmi}`));
    } else{
      results.appendChild(document.createTextNode(`Your BMI is OverWeight ${bmi}`));
    }
  }
});

-> note: there is something about loading of DOM before HTML thing learn it as its will save time from getting errors


```

## project 3 solution code

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {  // setinterval is used to repeat a task after a amout of time 1000ms in this case that is 1s after it will update the date object
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project 4 solution


```javascript

// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Select DOM elements needed for the game
const submit = document.querySelector('#subt'); // Submit button
const userInput = document.querySelector('#guessField'); // Input field for the guess
const guessSlot = document.querySelector('.guesses'); // Area to display previous guesses
const remaining = document.querySelector('.lastResult'); // Remaining guesses display
const lowOrHi = document.querySelector('.lowOrHi'); // Message area (too low / high / correct)
const startOver = document.querySelector('.resultParas'); // Area to append "Start New Game" button

// Create a <p> element to later hold the "Start New Game" button
const p = document.createElement('p'); 

// Initialize game variables
let prevGuess = []; // Array to store user's previous guesses
let numGuess = 1;   // Keeps track of number of guesses
let playGame = true; // Flag to indicate if the game is currently active

// Add event listener to the submit button only if game is active
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default form behavior
    const guess = parseInt(userInput.value); // Convert user input to number
    console.log(guess); // Debug log
    validateGuess(guess); // Validate and process the guess
  });
}

// Validate the user's guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    // If valid, store the guess
    prevGuess.push(guess);

    // If max attempts (10) are used, end the game
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess); // Check if guess is correct
    }
  }
}

// Check the guess against the random number
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO high`);
  }
}

// Display the current guess and update remaining guesses
function displayGuess(guess) {
  userInput.value = ''; // Clear input field
  guessSlot.innerHTML += `${guess}, `; // Add guess to display area
  numGuess++; // Increment guess count
  remaining.innerHTML = `${11 - numGuess} `; // Update remaining guesses
}

// Display a message in the designated area
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// Handle end of game: disable input and show "Start New Game" option
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); // Disable input field
  p.classList.add('button'); // Style the new game paragraph like a button
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; // Add button text
  startOver.appendChild(p); // Add to DOM
  playGame = false; // Stop accepting input
  newGame(); // Setup new game listener
}

// Setup the new game when the user clicks "Start new Game"
function newGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function (e) {
    // Reset everything to start a fresh game
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled'); // Re-enable input
    startOver.removeChild(p); // Remove "Start new Game" button
    playGame = true;
  });
}


```


# Project 5 solution

```javascript
const insert = document.querySelector("#insert"); // this div is where we will put the key values that were pressed

window.addEventListener('keydown', (e) => { // keydown is a event when keys are pressed
  // here we have given our html format in insert id div
  insert.innerHTML = `<div>        
  <table>
  <tr>
    <th>Key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space": e.key}</td> 
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table> </div>`;
}); // e.key will show key like A,B and C , keycode will give its ascii value, code will give its name in english

```

# Project 6 Solution

```javascript
//generate a random color


let intervalId; 
const randomColor = () => { // function to generate random color
  const hex = "0123456789ABCDEF"; // hex string containing all hex values
  let color = "#"; // it contains # we will later add hex value in it
  for(let i = 0; i<6; i++){ // loop is till 6 as we need 6 hex values
    color += hex[Math.floor(Math.random()*16)]; // we are multiplying random by 16 to get value from 0 to 15 and we didnt add 1 into it because we will use them as the index of hex variable and will take the random value/char from the string
  }
  document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('#start').addEventListener('click',() => { 
  if(!intervalId){ // we are checking only when the intervalId is null we will execute further, its good coding practice
  intervalId = setInterval(randomColor,1000); // giving reference of setInterval
  }
});
document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
});

```