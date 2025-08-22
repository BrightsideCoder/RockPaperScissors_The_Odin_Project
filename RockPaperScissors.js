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
    
    let userChoice = prompt("Rock, paper or scissors? (1, 2 or 3)");;
    
    if (userChoice == 1) {
        userChoice = "Paper";
    } else if (userChoice == 2) {
        userChoice = "Scissors";
    } else if (userChoice == 3){
        userChoice = "Rock";
    } else {
        console.log("Please choose between 1, 2 or 3");
    }
    return userChoice;
}

console.log(getComputerChoice());
console.log(getUserChoice());