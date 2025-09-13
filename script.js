let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    let userInputChoice = prompt("Choose Rock, Paper or Scissors!");
    userInputChoice = userInputChoice.toLowerCase();

    if (userInputChoice === "rock") {
        return(0);
    }
    else if (userInputChoice === "paper") {
        return(1);
    }
    else if (userInputChoice === "scissors") {
        return(2);
    }
    else {
        console.log("Please choose something!");
        return(null)
    }
}

function playRound(humanChoice, computerChoice) {

    let resultText = "";

    if (humanChoice === computerChoice) {
        humanScore ++;
        computerScore ++;
        resultText = "Draw";
    }
    else if (
        (humanChoice === 0 && computerChoice === 2) ||
        (humanChoice === 1 && computerChoice === 0) ||
        (humanChoice === 2 && computerChoice === 1)
    ) {
        humanScore ++;
        resultText = "You Win!";
    }
    else {
        computerScore ++;
        resultText = "You Lose!";
    }

    roundResult.textContent = resultText;
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    const results = document.querySelector(".results");

    if (humanScore >= 5) {
        roundResult.textContent = "You have won the Game";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
        // let humanWin = document.createElement("p");
        // humanWin.textContent = "You have won the game!";
        // results.appendChild(humanWin);
    } else if (computerScore >= 5) {
        roundResult.textContent = "You have lost the Game";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
        // let computerWin = document.createElement("p");
        // computerWin.textContent = "You have lost the game!";
        // results.appendChild(computerWin);
    // } else if (humanScore === computerScore) {
    //     let draw = document.createElement("P");
    //     draw.textContent = "It's Draw";
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => playRound(0, getComputerChoice()));
paperButton.addEventListener("click", () => playRound(1, getComputerChoice()));
scissorButton.addEventListener("click", () => playRound(2, getComputerChoice()));

const roundResult = document.querySelector("#round-result");
const score = document.querySelector("#score");


