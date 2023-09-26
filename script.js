let playerScore, computerScore;
playerScore = computerScore = 0;

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
        playerScore++;
        playerScore++;
        return winningPhrase;
    } else {
        computerScore++;
        computerScore++;
        return losingPhrase;
    }
}

function updateScoreboard(result) {
    const playerScoreCounter = document.querySelector(".player .count");
    const computerScoreCounter = document.querySelector(".computer .count");
    playerScoreCounter.textContent = playerScore;
    computerScoreCounter.textContent = computerScore;

    const roundResultText = document.querySelector(".round-result");
    roundResultText.textContent = roundResult;
}

const hands = document.querySelectorAll(".hands");
hands.forEach(hand => {
    hand.addEventListener('click', function name(params) {
        let roundResult = playRound(element.textContent, getComputerChoice());
        updateScoreboard(roundResult);
    })
});