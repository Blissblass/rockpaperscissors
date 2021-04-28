// This is a test message to check that the page has loaded the JS file correctly
console.log("Test message: JScript file loaded!");

posmBtn = document.querySelector('#secret-btn');
posm = document.querySelector('#posum')
posmText = document.querySelector('#posum-text');

posmBtn.addEventListener('click', () => {
    posm.classList.toggle('display');
    posmText.classList.toggle('display');
});

// I assign the default player scores here to get incremented later on
let playerScore = 0;
let computerScore = 0;
// I select the output and score paragraphs and divs here to get manipulated later on
const output = document.querySelector('#output');
const playerTrack = document.querySelector('#player-score');
const pcTrack = document.querySelector('#computer-score');
// This is the default text for the trackers
playerTrack.textContent = 'Player Score: ' + playerScore;
pcTrack.textContent = 'Computer Score: ' + computerScore;

// This function generates a random number between 0 and 2 and then assigns Rock, Paper or Scissors for
// the computer based on the number
function computerPlay() {
    const randomNumber = (Math.floor(Math.random() * 3));
 if(randomNumber===0) {
     return 'rock';
 }

 else if(randomNumber===1) {
     return 'paper';
 }

 else if(randomNumber===2){
     return 'scissors';
 }
}

// This is an event listeners for the button click that runs the game code upon getting clicked
// Not very efficient, and it's kind of stupid
// But if it works it's not stupid
button = document.getElementsByClassName('btn');
for(i = 0; i< button.length; i++) {
    button[i].addEventListener('click' , (e) => {
        let playerSelection = e.target.value;
        let computerSelection = computerPlay();

        console.log('Player selection: ' + playerSelection);
        console.log('Computer selection: ' + computerSelection);
        
        if(computerSelection==='rock') {
            if(playerSelection==='rock') {
                output.textContent = 'Rock and Rock, its a tie!';
               }
            else if(playerSelection==='paper') {
                playerScore++;
                output.textContent = 'Paper beats rock, congrats!';
            }   
            else if(playerSelection==='scissors') {
                computerScore++;
                output.textContent= 'Rock beats scissors, sorry bud!';
            }
            else {
                output.textContent ='Please choose Rock Paper or Scissors!';
            }
           }
           
           
           if(computerSelection==='paper') {
               if(playerSelection==='rock') {
                   computerScore++;
                   output.textContent='Paper beats Rock, sorry bud!';
               }
               else if(playerSelection==='paper') {
                   output.textContent='Paper and Paper, its a tie!';
               }
               else if(playerSelection==='scissors') {
                   playerScore++;
                   output.textContent='Scissors beats Paper, congrats!';
               }
               else {
                   output.textContent='Please choose Rock Paper or Scissors!';
               }
           }
            
           
           if(computerSelection==='scissors') {
               if(playerSelection==='rock') {
                   playerScore++;
                   output.textContent='Rock beats Scissors, congrats!';
               }
               else if(playerSelection==='paper') {
                   computerScore++;
                   output.textContent='Scissors beats Paper, sorry bud!';
               }
               else if(playerSelection==='scissors') {
                   output.textContent='Scissors and Scissors, its a tie!';
               }
               else {
                output.textContent='Please choose Rock Paper or Scissors!';
               }
            
            }  
           
           
            
            if(playerScore>computerScore && playerScore === 5) {
                alert('Player Wins!!!!!!');
                playerScore = 0;
                computerScore = 0;
                output.textContent='';
            }
            else if(computerScore>playerScore && computerScore === 5) {
                alert('Computer Wins!!!!!!');
                playerScore = 0;
                computerScore = 0;
                output.textContent='';
            }
            else if(computerScore === playerScore && computerScore === 5 && playerScore === 5) {
                alert('It\'s a tie!!!!!');
                playerScore = 0;
                computerScore = 0;
                output.textContent='';
            }  
            playerTrack.textContent = 'Player Score: ' + playerScore;
            pcTrack.textContent = 'Computer Score: ' + computerScore;
    });
}