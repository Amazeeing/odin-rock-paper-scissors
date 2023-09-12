function getComputerChoice() {
    const randomNumber = Math.random();
    let result = "";

    if (randomNumber < 0.33) {
        result = "Rock";
    } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
        result = "Paper";
    } else if (randomNumber >= 0.66) {
        result = "Scissors";
    }

    return result;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    const winningPhrase = playerSelection + " beat " + computerSelection + "! " + "You won!";
    const losingPhrase = playerSelection + " was beat by " + computerSelection + ". " + "You lost..." 

    let hasPlayerWon = false;

    switch (playerSelection) {
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

    if (hasPlayerWon) {
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

game();