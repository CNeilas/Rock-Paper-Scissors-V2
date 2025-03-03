let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
    let choice = "";
    let randomNumber = Math.floor(Math.random() * 3) + 1
    switch(randomNumber) {
        case 1:
            choice = "rock"
            break
        case 2:
            choice = "paper"
            break
        case 3:
            choice = "scissors"
            break
    }

    return choice.toLowerCase()
}

const getHumanChoice = () => {
    let humanChoice = prompt("rock, paper, scissors").toLowerCase()
    return humanChoice
}


const playRound = (humanChoice, computerChoice) => {
        if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
            console.log(`You win, ${humanChoice} beats ${computerChoice}`)
            humanScore++
        } else {
            console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
            computerScore++
        }
    
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`)
}

while (computerScore < 5 || humanScore < 5) {
    if (computerScore == 5 || humanScore == 5) {
        break
    }
    playRound(getHumanChoice(), getComputerChoice())
}
