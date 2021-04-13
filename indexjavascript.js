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

const computerSelection = computerPlay();
const playerSelection = 'Paper';

function playRound(playerSelection, computerSelection) {
    if(computerSelection==='Rock') {
     if(playerSelection==='Rock') {
           return 'Rock and Rock, its a tie!'
        }
     if(playerSelection==='Paper') {
         return 'Rock beats Paper, sorry bud!'
     }   
     if(playerSelection==='Scissors') {
         return 'Scissors beats Paper, congrats!'
     }
    }
    if(computerSelection==='Paper') {
        if(playerSelection==='Rock') {
            return 'Paper beats Rock, sorry bud!'
        }
        if(playerSelection==='Paper') {
            return 'Paper and Paper, its a tie!'
        }
        if(playerSelection==='Scissors') {
            return 'Scissors beats Paper, congrats!'
        }
    }
     if(computerSelection==='Scissors') {
        if(playerSelection==='Rock') {
            return 'Rock beats Scissors, congrats!'
        }
        if(playerSelection==='Paper') {
            return 'Scissors beats Paper, sorry bud!'
        }
        if(playerSelection==='Scissors') {
            return 'Scissors and Scissors, its a tie!'
        }
     }    
    }