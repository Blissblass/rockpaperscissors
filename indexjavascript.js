console.log("Test message: If youre seeing this everythings okay");

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

function playerSelection() {
}
