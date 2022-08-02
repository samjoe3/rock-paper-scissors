function getUserChoice() {
    let userInput = prompt('Enter: \"Rock\", \"Paper\", or \"Scissors\".');

    if (userInput.toLowerCase() === "rock") {
        return 1;
    }
    else if (userInput.toLowerCase() === "paper") {
        return 2;
    }
    else if (userInput.toLowerCase() === "scissors") {
        return 3;
    }
    else return "Invalid entry, please try again."
    }
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}
function playRound() {
    let userChoice = getUserChoice();
    let compChoice = getComputerChoice();
    if (userChoice === compChoice) {
        return `"tie, you chose: ${userChoice}, and the computer chose: ${compChoice}."`;
    } 
    else if ((userChoice === 1 && compChoice === 2)||(userChoice === 2 && compChoice === 3)||(userChoice === 3 && compChoice === 1)) {
        return `"lose, you chose: ${userChoice}, and the computer chose: ${compChoice}."`;
    }
    else return `"win, you chose: ${userChoice}, and the computer chose: ${compChoice}."`;
}
console.log(playRound());
