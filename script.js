let humanScore = 0;
let computerScore = 0;
playGame();

function getComputerChoice() {
    let random = Math.random() * 100;
    if ((random > 0) && (random < 33)) {
        return "rock";
    } else if ((random > 33) && (random < 66)) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter Rock Paper Or Scissors");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice, round) {
    // Line below clears the console. The console is cleared each rounded for cleanliness
    console.clear();
    console.log("Round: " + round);
    if (
        ((computerChoice === "paper") && (humanChoice === "rock")) || 
        ((computerChoice === "rock") && (humanChoice === "scissors")) ||
        ((computerChoice === "scissors") && (humanChoice === "paper"))) {
        computerScore = computerScore + 1;
        console.log("You have lost! Good luck next time")
    } else if (computerChoice === humanChoice) {
        console.log("There is a tie. Try again")
    } else {
        humanScore = humanScore + 1;
        console.log("You have won, congratulations!")
    }
    console.log("         ");
    console.log("Human Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);
    console.log("      ");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

function playGame() {
    let round = 1;
    while ((humanScore < 5) && (computerScore < 5)) {
        playRound(getHumanChoice(), getComputerChoice(), round);
        round = round + 1;
    }
    console.clear();
    if (humanScore === 5) {
        console.log("You have won the whole thing!")
    } else {
        console.log("You have lost the whole thing!")
    }
    console.log("      ");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}
