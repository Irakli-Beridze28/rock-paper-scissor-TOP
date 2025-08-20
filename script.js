function getComputerChoice() {
    return randomNumber = Math.floor(Math.random () * 3)
    // if (randomNumber === 0) {
    //     return "rock";
    // }
    // else if (randomNumber === 1) {
    //     return "paper";
    // }
    // else {
    //     return "scissors";
    // }
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


function playGame() {

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            humanScore ++;
            computerScore ++;
            console.log("Draw!")
        }
        else if (
            (humanChoice === 0 && computerChoice === 2) ||
            (humanChoice === 1 && computerChoice === 0) ||
            (humanChoice === 2 && computerChoice === 1)
        ) {
            humanScore ++;
            console.log("You win!");
        }
        else {
            computerScore ++;
            console.log("You lose!");
        }
    }

    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    playRound(humanSelection1, computerSelection1);
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);
    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);
    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);
    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    playRound(humanSelection5, computerSelection5);

    console.log(("Final Score - Human: " + humanScore + " " + "Computer: " + computerScore));

}

playGame();


