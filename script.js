let humanScore = 0
let computerScore = 0

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"]

  let index = randomIntFromInterval(0, 2)

  return arr[index]
}

function getHumanChoice() {
  let choice = prompt("Choose between rock, paper, scissors:")

  return choice
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase()
  computerChoice = computerChoice.toLowerCase()

  if((humanChoice == "rock" && computerChoice == "paper") || 
    (humanChoice == "paper" && computerChoice == "scissors") || 
    (humanChoice == "scissors" && computerChoice == "rock")) {
      computerScore++
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
  }else if((computerChoice == "rock" && humanChoice == "paper") || 
  (computerChoice == "paper" && humanChoice == "scissors") || 
  (computerChoice == "scissors" && humanChoice == "rock")) {
    humanScore++
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
  }
  else if(humanChoice == computerChoice)
    console.log("Tie!")
}

function playGame() {
  for(let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()

    playRound(humanChoice, computerChoice)
  }

  if(humanScore > computerScore) {
    console.log("Human wins!")
  }else if(humanScore < computerScore) {
    console.log("Computer wins!")
  }else {
    console.log("Tie!")
  }
}

playGame()