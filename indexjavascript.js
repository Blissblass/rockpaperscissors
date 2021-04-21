// This is a test message to check that the page has loaded the JS file correctly
console.log("Test message: Test Message");

// I assign the default player scores here to get incremented later on
let playerScore = 0;
let computerScore = 0;

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

let computerSelection = computerPlay();
// This variable takes the users input and lowercases it, effectively making the prompt case insensitive
const playerSelection = prompt("Please choose Rock, Paper or Scissors!").toLowerCase();

// This function plays a game of RPS consisting of 5 rounds.
function game() {
     for(let i = 0; i<=4; i++) {
     playRound(playerSelection, computerSelection)
     console.log(playRound(playerSelection, computerSelection));
     computerSelection = computerPlay();
    } 
checkScore();
}

// This function plays a single round of RPS 
    function playRound(playerSelection, computerSelection) {
    if(computerSelection==='rock') {
     if(playerSelection==='rock') {
           return 'Rock and Rock, its a tie!'
        }
     else if(playerSelection==='paper') {
         computerScore++;
         return 'Rock beats Paper, sorry bud!'
     }   
     else if(playerSelection==='scissors') {
         playerScore++;
         return 'Scissors beats Paper, congrats!'
     }
     else {
         return 'Please choose Rock Paper or Scissors!'
     }
    }
    if(computerSelection==='paper') {
        if(playerSelection==='rock') {
            computerScore++;
            return 'Paper beats Rock, sorry bud!'
        }
        else if(playerSelection==='paper') {
            return 'Paper and Paper, its a tie!'
        }
        else if(playerSelection==='scissors') {
            playerScore++;
            return 'Scissors beats Paper, congrats!'
        }
        else {
            return 'Please choose Rock Paper or Scissors!'
        }
    }
     if(computerSelection==='scissors') {
        if(playerSelection==='rock') {
            playerScore++;
            return 'Rock beats Scissors, congrats!'
        }
        else if(playerSelection==='paper') {
            computerScore++;
            return 'Scissors beats Paper, sorry bud!'
        }
        else if(playerSelection==='scissors') {
            return 'Scissors and Scissors, its a tie!'
        }
        else {
            return 'Please choose Rock Paper or Scissors!'
        }
     }    
}

// This function checks the score of the player and the computer, it's quite unnecessary but i wrote it to shorten the 
// game(); function
    function checkScore() {   
        if(playerScore===computerScore) {  
            console.log("It's a tie!") 
            computerScore = 0
            playerScore = 0
        } 
        else if(playerScore>computerScore) {
            console.log("Player Wins!")
            computerScore = 0
            playerScore = 0
        }
        else if(playerScore<computerScore) {
            console.log("Computer Wins!")
            computerScore = 0
            playerScore = 0
        }
}

