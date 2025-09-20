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
        resultText = "⚖️ Draw";
        roundResult.style.color = "orange";
    }
    else if (
        (humanChoice === 0 && computerChoice === 2) ||
        (humanChoice === 1 && computerChoice === 0) ||
        (humanChoice === 2 && computerChoice === 1)
    ) {
        humanScore ++;
        resultText = "✅ You Win!";
        roundResult.style.color = "green";
    }
    else {
        computerScore ++;
        resultText = "❌ You Lose!";
        roundResult.style.color = "red";
    }

    roundResult.textContent = resultText;
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore >= 5 && computerScore >= 5) {
        roundResult.textContent = "🤝 It's a Draw!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
        roundResult.style.color = "orange";
    } else if (humanScore >= 5) {
        roundResult.textContent = "🎉 You have won the Game!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
        roundResult.style.color = "green";
        roundResult.style.animation = "winner-glow 1s infinite alternate";
    } else if (computerScore >= 5) {
    roundResult.textContent = "💀 You have lost the Game!";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
    roundResult.style.color = "red";
    roundResult.style.animation = "loser-shake 0.5s infinite";
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");
const resetButton = document.querySelector("#game-reset");

rockButton.addEventListener("click", () => playRound(0, getComputerChoice()));
paperButton.addEventListener("click", () => playRound(1, getComputerChoice()));
scissorButton.addEventListener("click", () => playRound(2, getComputerChoice()));
resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    roundResult.textContent = "";
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorButton.disabled = false;
    roundResult.style.color = "";
    roundResult.style.animation = "";
});

const roundResult = document.querySelector("#round-result");
const score = document.querySelector("#score");


