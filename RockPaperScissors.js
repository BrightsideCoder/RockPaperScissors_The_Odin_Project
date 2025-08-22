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

function playRound(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        console.log("It's a tie!")
    } else if (userChoice == "Paper" && computerChoice == "Rock" || userChoice == "Scissors" && computerChoice == "Paper" || userChoice == "Rock" && computerChoice == "Scissors") {
                console.log(`User chose: ${userChoice} and the computer chose: ${computerChoice}. User wins!`)
                playerScore++;
               } else if ( userChoice == "Paper" && computerChoice == "Scissors" || userChoice == "Scissors" && computerChoice == "Rock" || userChoice == "Rock" && computerChoice == "Paper") {
                            console.log(`User chose: ${userChoice} and the computer chose: ${computerChoice}. Computer wins...`)
                            computerScore++;
                           }
}

playRound(getUserChoice(), getComputerChoice());
console.log(`Player score: ${playerScore}\n Computer score: ${computerScore}`);
