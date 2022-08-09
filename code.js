function getUserChoice(choice) {
    userChoice = choice.toString();
    return choice;
    }
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function playRound() {
    let userChoice = getUserChoice(choice);
    let compChoice = getComputerChoice();
    if (userChoice === compChoice) {
        return "tie";
    } 
    else if ((userChoice === 1 && compChoice === 2)||(userChoice === 2 && compChoice === 1)||(userChoice === 3 && compChoice === 2)) {
        return "lose";
    }
    else if ((userChoice === 1 && compChoice === 3)||(userChoice === 2 && compChoice === 3)||(userChoice === 3 && compChoice === 1)) {
        return "win";
    }
    else return "invalid";
}
function game() {
    let roundTies = 0;
    let roundWins = 0;
    let roundLosses = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound();

        if (roundResult === "tie") {
            roundTies++;
            console.log(`Wins: ${roundWins}, Losses: ${roundLosses}, Ties: ${roundTies}.`);
        }
        else if (roundResult === "lose") {
            roundLosses++;
            console.log(`Wins: ${roundWins}, Losses: ${roundLosses}, Ties: ${roundTies}.`);
        }
        else if (roundResult === "win")  { 
            roundWins++;
            console.log(`Wins: ${roundWins}, Losses: ${roundLosses}, Ties: ${roundTies}.`);
        }
        else if (roundResult === "invalid") {
            i--;
            console.log("Invalid answer, please try again.");
        }
    }
}
//game();
const rock = document.querySelector('#rock');
rock.addEventListener('click',  getUserChoice("rock"), game());