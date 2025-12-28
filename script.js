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

    let message = document.createElement("p");
    message.style.cssText = "text-align: center;"
    if (
        ((computerChoice === "paper") && (humanChoice === "rock")) || 
        ((computerChoice === "rock") && (humanChoice === "scissors")) ||
        ((computerChoice === "scissors") && (humanChoice === "paper"))) {
        computerScore = computerScore + 1;
        console.log("You have lost! Good luck next time");
        message.textContent = "You have lost! Good luck next time";
    } else if (computerChoice === humanChoice) {
        console.log("There is a tie. Try again");
        message.textContent = "There is a tie. Try again";
    } else {
        humanScore = humanScore + 1;
        console.log("You have won, congratulations!");
        message.textContent = "You have won, congratulations!";
    }
    resultSection.appendChild(message);
}

function playGame(playerSelection) {
    playRound(playerSelection, getComputerChoice());
}
