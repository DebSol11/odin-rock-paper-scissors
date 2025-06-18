// Declaration and initialization of global variables
let computerChoice = "";
let result = null;

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

function getHumanChoice() {
  let userInput = prompt(
    "Please choose Rock, Paper or Scissor by typing it into the field"
  );
  return userInput;
}

function playGame() {
  let computerScore = "0";
  let humanScore = "0";

  /*
  Problem solving
  1. Understand the problem
  2. Plan
  3. Pseudocode 
  */
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    let displayChoices = `You chose ${humanChoice}. 
  The computer chose ${computerChoice}.`;
    if (humanChoice == computerChoice) {
      return console.log(
        `You both chose the same.
      This is a draw!`
      );
    } else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
      computerScore++;
      return console.log(
        `${displayChoices}
      You lose. PAPER beats ROCK!`
      );
    } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
      humanScore++;
      return console.log(
        `${displayChoices}
      You win. ROCK beats SCISSORS!`
      );
    } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
      humanScore++;
      return console.log(
        `${displayChoices}
      You win. PAPER beats ROCK!`
      );
    } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
      computerScore++;
      return console.log(
        `${displayChoices}
      You lose. SCISSORS cut PAPER!`
      );
    } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
      computerScore++;
      return console.log(
        `${displayChoices}
      You lose. ROCK destroys SCISSORS!`
      );
    } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
      humanScore++;
      return console.log(
        `${displayChoices}
      You win. SCISSORS cut PAPER in pieces!`
      );
    } else {
      return console.log("Oh noooo! Something must have gone wrong!");
    }
  }

  // Play five rounds
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`The computer has a score of ${computerScore}`);
  console.log(`Your score is ${humanScore}`);
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`The computer has a score of ${computerScore}`);
  console.log(`Your score is ${humanScore}`);
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`The computer has a score of ${computerScore}`);
  console.log(`Your score is ${humanScore}`);
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`The computer has a score of ${computerScore}`);
  console.log(`Your score is ${humanScore}`);
  playRound(getHumanChoice(), getComputerChoice());
  console.log(`The computer has a score of ${computerScore}`);
  console.log(`Your score is ${humanScore}`);

  if (computerScore > humanScore) {
    console.log(
      "This time you lost, refresh the page to start a new round, or do something more useful!"
    );
  } else if (humanScore > computerScore) {
    console.log(
      "And the winner is YOU, refresh the page to start a new round, or do something more useful!"
    );
  } else if (humanScore == computerScore) {
    console.log(
      "It's a draw king, start a new round by refreshing the page or die trying something else!"
    );
  }
}

playGame();
