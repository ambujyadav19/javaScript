#Projects related to DOM

## project link
[Click here]https://stackblitz.com/edit/dom-project-chaiaurcode-qpcjucrf?file=index.html

Project01-Colour Changer

Project 01 Solution
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
     console.log(e)
     console.log(e.target)
     if(e.target.id==='grey'){
       body.style.backgroundColor=e.target.id
     }
     if(e.target.id==='yellow'){
       body.style.backgroundColor=e.target.id
     }
     if(e.target.id==='white'){
       body.style.backgroundColor=e.target.id
     }
     if(e.target.id==='blue'){
       body.style.backgroundColor=e.target.id
     }
  })
});
```

Project 02-BMI Calculator

Project 02 solution

```javascript
const form = document.querySelector('form')
form.addEventListener('submit',function (e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height ==='' || height<0 || isNaN(height) ){
     results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight ==='' || weight<0 || isNaN(weight) ){
     results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    const bmi = (weight/((height * height)/10000)).toFixed(2);
    

    let category="";
    if(bmi<18.6){
     category="Under Weight"
    }
    else if(bmi>24.9){
      category="Over Weight"
    
    }
    else{
      category="Normal Weight"
    }
    //show the result
    results.innerHTML=`<h3>Your BMI is: ${bmi}</h3>
    <h4>Category: ${category}</h4>`
  }

});
```

Project 03-Digital Clock

Project 03 Solution

```javascript
const clock = document.querySelector('#clock')


// setInterval take value in mili seconds
setInterval(function(){
  let date = new Date();
  clock.innerHTML=date.toLocaleTimeString();

},1000)
```

Project 04-Guess a number

Project 04 Solution

```javascript
let randomNumber = parseInt(Math.random()*100 +1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true;

if(playGame){
  submit.addEventListener('click',function(e){
   e.preventDefault()
   const guess = parseInt(userInput.value)
   console.log(guess);
   validateGuess(guess)
  })
}
function validateGuess(guess){
   if(isNaN(guess)){
     alert('Please enter a valid number')
     }
    else if(guess<1){
      alert('please enter a no more than 1')
    }
    else if(guess>100){
      alert('please enter a no less than 100')
    }
    else{
      prevGuess.push(guess)
      if(numGuess===11){
        displayGuess(guess)
        displayMessage(`Game Over.Random No was ${randomNumber}`)
        endGame()
      }
      else{
        displayGuess(guess)
        checkGuess(guess)
      }
    }
}

function checkGuess(guess){
   //
   if(guess===randomNumber){
     displayMessage(`You guessed it right`)
     endGame()

   }
   else if(guess<randomNumber){
     displayMessage(`Number is too low`)
   }
   else if(guess>randomNumber){
     displayMessage(`Number is too high`)
   }
}

function displayGuess(guess){
  //
  userInput.value='';
  guessSlot.innerHTML+=`${guess}, `
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
  //
  lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
  //
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id='newGame'> Start New Game</h2>`;
  startOver.appendChild(p)
  playGame=false
  newGame()
}

function newGame(){
  //
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100 +1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame=true;
  })
}

```

Project 06-Unlimited Colors
project 06 Solution

```javascript
// generate a random color
const  randomcolor= function(){
  const hex="0123456789ABCDEF"
  let color='#'
  for(let i=0;i<6;i++){
      color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
}

let intervalID;
const startChangingColor = function(){

  if(!intervalID){
    intervalID = setInterval(changeBGcolor,1000)
  }
 function changeBGcolor(){
  document.body.style.backgroundColor=randomcolor();
 }
};
const stopChangingColor = function(){
   clearInterval(intervalID);
   intervalID=null;
};

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
```
