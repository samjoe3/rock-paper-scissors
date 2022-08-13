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
    //for (let i = 0; i < 5; i++) {
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
    function scoreBoard() {
        document.getElementById("underboard").innerHTML = `Wins: ${roundWins}, Losses: ${roundLosses}, Ties: ${roundTies}.`;
    }
    function resultDisplay() {
        document.getElementById("resultdisplay").innerHTML = result;
    }
    function rockClick() {
        rock.classList.toggle('whileclicking');
        game(1);
    }
    function rockUnclick() {
        rock.classList.toggle('whileclicking');
// this function paired with the setTimeout event listener will remove the whileclicking class after 40ms?
// need to add this function and event listener to paper and scissors and results display
    }

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {rockClick()});
rock.addEventListener('click', () => {setTimeout(rockUnclick, 40)});
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {game(2)});
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {game(3)});

//document.getElementById("rock").onclick = function() {game(1)};
//document.getElementById("paper").onclick = function() {game(2)};
//document.getElementById("scissors").onclick = function() {game(3)};