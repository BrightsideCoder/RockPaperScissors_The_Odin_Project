function getComputerChoice(){
    var computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice == 1) {
        computerChoice = "Paper";
    } else if (computerChoice == 2) {
        computerChoice = "Scissors";
    } else {
        computerChoice = "Rock";
    }
    return computerChoice;
}

console.log(getComputerChoice());