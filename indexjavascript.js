console.log("Test message: Test Message");

function computerPlay() {
    const randomNumber = (Math.floor(Math.random() * 3));
 if(randomNumber===0) {
     return 'Rock';
 }

 else if(randomNumber===1) {
     return 'Paper';
 }

 else if(randomNumber===2){
     return 'Scissors';
 }
}

let playerScore = 0;
let computerScore = 0;
const computerSelection = computerPlay();
const playerSelection = prompt("Please choose Rock, Paper or Scissors");
function game() {
    playRound(playerSelection, computerSelection)
    console.log(playRound(playerSelection, computerSelection));
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
   
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

    function playRound(playerSelection, computerSelection) {
    if(computerSelection==='Rock') {
     if(playerSelection==='Rock') {
           return 'Rock and Rock, its a tie!'
        }
     if(playerSelection==='Paper') {
         computerScore++;
         return 'Rock beats Paper, sorry bud!'
     }   
     if(playerSelection==='Scissors') {
         playerScore++;
         return 'Scissors beats Paper, congrats!'
     }
     else {
         return 'Please choose Rock Paper or Scissors!'
     }
    }
    if(computerSelection==='Paper') {
        if(playerSelection==='Rock') {
            computerScore++;
            return 'Paper beats Rock, sorry bud!'
        }
        if(playerSelection==='Paper') {
            return 'Paper and Paper, its a tie!'
        }
        if(playerSelection==='Scissors') {
            playerScore++;
            return 'Scissors beats Paper, congrats!'
        }
        else {
            return 'Please choose Rock Paper or Scissors!'
        }
    }
     if(computerSelection==='Scissors') {
        if(playerSelection==='Rock') {
            playerScore++;
            return 'Rock beats Scissors, congrats!'
        }
        if(playerSelection==='Paper') {
            computerScore++;
            return 'Scissors beats Paper, sorry bud!'
        }
        if(playerSelection==='Scissors') {
            return 'Scissors and Scissors, its a tie!'
        }
        else {
            return 'Please choose Rock Paper or Scissors!'
        }
     }    
    }

