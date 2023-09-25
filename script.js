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
    const tiePhrase = "No one beat no one. It's a tie!";

    if (playerSelection === computerSelection) {
        return tiePhrase;
    }

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


