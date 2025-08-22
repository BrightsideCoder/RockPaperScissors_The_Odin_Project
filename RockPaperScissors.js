let playerScore = 0, computerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3 + 1);

    if (computerChoice == 1) {
        computerChoice = "Paper";
    } else if (computerChoice == 2) {
        computerChoice = "Scissors";
    } else {
        computerChoice = "Rock";
    }
    return computerChoice;
}

function getUserChoice() {
    
    let choice = prompt("Rock, paper or scissors?").toLowerCase();
    let userChoice = choice.charAt(0).toUpperCase() + choice.slice(1);
    
    return userChoice;
}

function playRound() {

}

console.log(getComputerChoice());
console.log(getUserChoice());