let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");
let resultSection = document.querySelector(".roundOutcome");

rockButton.addEventListener("click", () => {
    playGame("rock");
});

paperButton.addEventListener("click", () => {
    playGame("paper");
});

scissorButton.addEventListener("click", () => {
    playGame("scissors");
});

function getComputerChoice() {
    let random = Math.random() * 100;
    if ((random > 0) && (random < 33)) {
        return "rock";
    } else if ((random > 33) && (random < 66)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    resultSection.replaceChildren();

    let playerChoices = document.createElement("p");
    playerChoices.textContent = "You chose " + humanChoice + " and the computer chose " + computerChoice;
    playerChoices.style.cssText = "text-align: center;"
    resultSection.appendChild(playerChoices);

    let scores = document.createElement("p");
    scores.style.cssText = "text-align: center;"
    if (
        ((computerChoice === "paper") && (humanChoice === "rock")) || 
        ((computerChoice === "rock") && (humanChoice === "scissors")) ||
        ((computerChoice === "scissors") && (humanChoice === "paper"))) {
        computerScore = computerScore + 1;
    } else if (computerChoice === humanChoice) {
        //Do Nothing
    } else {
        humanScore = humanScore + 1;
    }
    scores.textContent = "Your Score: " + humanScore + " Computer Score: " + computerScore;
    resultSection.appendChild(scores);

    let gameOverText = document.createElement("p");
    let resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    if (humanScore === 5) {
        gameOverText.style.cssText = "text-align: center";
        gameOverText.textContent = "You have won, congratulations!";
        document.getElementById("rock").style.display = "none";
        document.getElementById("paper").style.display = "none";
        document.getElementById("scissors").style.display = "none";
        document.querySelector("h2").style.display = "none";
    }
    if (computerScore === 5) {
        gameOverText.style.cssText = "text-align: center";
        gameOverText.textContent = "You have lost! Good luck next time";
        document.getElementById("rock").style.display = "none";
        document.getElementById("paper").style.display = "none";
        document.getElementById("scissors").style.display = "none";
        document.querySelector("h2").style.display = "none";
    }
    resultSection.appendChild(gameOverText);
    if ((humanScore === 5) || (computerScore === 5)) {
        resultSection.appendChild(resetButton);
    }
    resetButton.addEventListener("click", () => {
        window.location.reload();//Reloads the page
    });
}

function playGame(playerSelection) {
    playRound(playerSelection, getComputerChoice());
}
