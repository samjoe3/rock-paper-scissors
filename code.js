function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}
let result = "";
function playRound(choice) {
    let userChoice = choice;
    let compChoice = getComputerChoice();
    if (userChoice === compChoice) {
        console.log(userChoice, compChoice);
        result = "You Tied. :|";
        resultDisplay();
        return "tie";
    } 
    else if ((userChoice === 1 && compChoice === 2)||(userChoice === 2 && compChoice === 3)||(userChoice === 3 && compChoice === 1)) {
        console.log(userChoice, compChoice);
        result = "You Lost. :(";
        resultDisplay();
        return "lose";
    }
    else if ((userChoice === 1 && compChoice === 3)||(userChoice === 2 && compChoice === 1)||(userChoice === 3 && compChoice === 2)) {
        console.log(userChoice, compChoice);
        result = "You Won! :)";
        resultDisplay();
        return "win";
    }
}
let roundTies = 0;
let roundWins = 0;
let roundLosses = 0;

function game(choice) {
        let roundResult = playRound(choice);

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

        scoreBoard();
    }
    let underboard = document.querySelector('.underboard');
    function scoreBoard() {
        underboard.innerHTML = `Wins: ${roundWins}, Losses: ${roundLosses}, Ties: ${roundTies}.`;
        underboard.classList.toggle('whileclickingresults');
        setTimeout(unClick, 40);
    }
    let resultdisplay = document.querySelector(".resultdisplay");
    function resultDisplay() {
        resultdisplay.innerHTML = result;
        resultdisplay.classList.toggle('whileclickingresults');
        setTimeout(unClick, 40);
    }
    function rockClick() {
        rock.classList.toggle('whileclicking');
        game(1);
        setTimeout(unClick, 40);
    }
    function paperClick() {
        paper.classList.toggle('whileclicking');
        game(2);
        setTimeout(unClick, 40);
    }
    function scissorsClick() {
        scissors.classList.toggle('whileclicking');
        game(3);
        setTimeout(unClick, 40);
    }
    function unClick() {
        rock.classList.remove('whileclicking');
        paper.classList.remove('whileclicking');
        scissors.classList.remove('whileclicking');
        resultdisplay.classList.remove('whileclickingresults');
        underboard.classList.remove('whileclickingresults');
    }

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector(".scissors");

rock.addEventListener('click', () => {rockClick()});
paper.addEventListener('click', () => {paperClick()});
scissors.addEventListener("click", () => {scissorsClick()});