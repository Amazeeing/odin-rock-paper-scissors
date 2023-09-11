function getComputerChoice() {
    const randomNumber = Math.random();
    let result = "";

    if(randomNumber < 0.3) {
        result = "Rock";
    } else if(randomNumber >= 0.3 && randomNumber < 0.6) {
        result = "Paper";
    } else {
        result = "Scissors";
    }

    return result;
}

function playRound(playerSelection, computerSelection) {

    let playerSelectionToLowerCase = playerSelection.toLowerCase();
    let computerSelectionToLowerCase = computerSelection.toLowerCase();

    const winningPhrase = playerSelectionToLowerCase + " beat " + computerSelectionToLowerCase + "! " + "You won!";
    const losingPhrase = playerSelectionToLowerCase + " was beat by " + computerSelectionToLowerCase + ". " + "You lost..." 

    let hasPlayerWon = false;

    switch (playerSelection.toLowerCase()) {
        case "rock":
            hasPlayerWon = computerSelection === "scissors"; 
            break;

        case "scissors":
            hasPlayerWon = computerSelection === "paper";
            break;
        
        case "paper":
            hasPlayerWon = computerSelection === "rock";
            break;
    
        default:
            break;
    }

    if(hasPlayerWon) {
        return winningPhrase;
    } else {
        return losingPhrase;
    }
}

function game() {

    const NUMBER_OF_ROUNDS = 5;

    let playerSelection = "";
    for (let index = 0; index < NUMBER_OF_ROUNDS; index++) {
        playerSelection = prompt("Enter a hand: ");
        console.log(playRound(playerSelection, getComputerChoice()));
    } 
}