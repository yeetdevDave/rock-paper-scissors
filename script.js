let humanScore = 0
let computerScore = 0

let result = document.querySelector("#result");
let score = document.querySelector("#score");
let winner = document.querySelector("#winner");

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
      result.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
      score.innerText = `Human: ${humanScore} Computer: ${computerScore}`;
  }else if((computerChoice == "rock" && humanChoice == "paper") || 
  (computerChoice == "paper" && humanChoice == "scissors") || 
  (computerChoice == "scissors" && humanChoice == "rock")) {
    humanScore++
    result.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
    score.innerText = `Human: ${humanScore} Computer: ${computerScore}`;
  }
  else if(humanChoice == computerChoice) {
    result.innerText = `Tie! ${humanChoice} against ${computerChoice}`;
    score.innerText = `Human: ${humanScore} Computer: ${computerScore}`;
  }

  if(humanScore == 5) {
    winner.innerText = "Human won!";
    humanScore = 0;
    computerScore = 0;
  }else if(computerScore == 5){
    winner.innerText = "Computer won!";
    humanScore = 0;
    computerScore = 0;
  }else {
    winner.innerText = "";
  }
}

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let humanChoice = e.target.innerText;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  })
})