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




