// Declaration and initialization of global variables
let computerChoice = "";
let result = null;
let humanClick = "test";
let humanScore = 0;
let computerScore = 0;

let resultsContainer = document.createElement("div");
resultsContainer.style.backgroundColor = "pink";
resultsContainer.textContent = "RESULTS";
let htmlBody = document.querySelector("body");
htmlBody.appendChild(resultsContainer);
let messageContainer = document.createElement("div");
messageContainer.setAttribute("style", "background: green; color: white");
messageContainer.textContent = "We play until either you or the PC have five points!"
htmlBody.appendChild(messageContainer);
let scoreContainer = document.createElement("div");
scoreContainer.style.backgroundColor = "yellow";
scoreContainer.textContent = "SCORE";
htmlBody.appendChild(scoreContainer);
let winnerMessageContainer = document.createElement("div");
winnerMessageContainer.setAttribute("style", "background: purple; color: white");
winnerMessageContainer.textContent = "WINNER";
htmlBody.appendChild(winnerMessageContainer);

const rockBtn = document.querySelector("#rock");

rockBtn.addEventListener("click", () => {
  humanClick = "rock";
  playRound(humanClick, getComputerChoice());
});

const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

paperBtn.addEventListener("click", () => {
  humanClick = "paper";
  playRound(humanClick, getComputerChoice());
});
scissorsBtn.addEventListener("click", () => {
  humanClick = "scissors";
  playRound(humanClick, getComputerChoice());
});

// Written as function expression
let getRandomIntExp = function (max) {
  result = Math.floor(Math.random() * max);
  return result;
};

function getComputerChoice() {
  getRandomIntExp(3);
  if (result == 0) {
    computerChoice = "ROCK";
    return computerChoice;
  } else if (result == 1) {
    computerChoice = "PAPER";
    return computerChoice;
  } else if (result == 2) {
    computerChoice = "SCISSORS";
    return computerChoice;
  } else {
    computerChoice = "Error";
    return computerChoice;
  }
}


function playRound(humanChoice, computerChoice) {
    if (computerScore == 5) {
    winnerMessageContainer.textContent =
      "This time you lost, refresh the page to start a new round, or do something more useful!"
    ;
  } else if (humanScore == 5) {
    winnerMessageContainer.textContent =
      "And the winner is YOU, refresh the page to start a new round, or do something more useful!"
    ;
    
  }
  humanChoice = humanChoice.toUpperCase();
  let displayChoices = `You chose ${humanChoice}.
  The computer chose ${computerChoice}.`;
  if (humanChoice == computerChoice) {
    return (resultsContainer.textContent = `You both chose the same.
      This is a draw!`);
  } else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
    computerScore++;
    resultsContainer.textContent = `${displayChoices}
      You lose. PAPER beats ROCK!`;
    scoreContainer.textContent = `Your score is ${humanScore}, the score of the PC is ${computerScore}`;
    return computerScore;
  } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
    humanScore++;
    resultsContainer.textContent = `${displayChoices}
      You win. ROCK beats SCISSORS!`;
    scoreContainer.textContent = `Your score is ${humanScore}, the score of the PC is ${computerScore}`;
    return humanScore;
  } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
    humanScore++;
    resultsContainer.textContent = `${displayChoices}
      You win. PAPER beats ROCK!`;
    scoreContainer.textContent = `Your score is ${humanScore}, the score of the PC is ${computerScore}`;
    return humanScore;
  } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
    computerScore++;
    resultsContainer.textContent = `${displayChoices}
      You lose. SCISSORS cut PAPER!`;
    scoreContainer.textContent = `Your score is ${humanScore}, the score of the PC is ${computerScore}`;
    return computerScore;
  } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
    computerScore++;
    resultsContainer.textContent = `${displayChoices}
      You lose. ROCK destroys SCISSORS!`;
    scoreContainer.textContent = `Your score is ${humanScore}, the score of the PC is ${computerScore}`;
    return computerScore;
  } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
    humanScore++;
    resultsContainer.textContent = `${displayChoices}
      You win. SCISSORS cut PAPER in pieces!`;
    scoreContainer.textContent = `Your score is ${humanScore}, the score of the PC is ${computerScore}`;
    return humanScore;
  } else {
    return (resultsContainer.textContent =
      "Oh noooo! Something must have gone wrong!");
  }
}
