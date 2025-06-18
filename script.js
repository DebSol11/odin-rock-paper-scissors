// Declaration and initialization of global variables
let computerChoice = "";
let result = null;
// let humanScore = "0";
// let computerScore = "0";

// Written as function declaration
function getRandomIntDec(max) {
  result = Math.floor(Math.random() * max);
  return result;
}

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

/*Pseudocode:
  -aks for user input using the prompt method
  -store the user input in a variable
  -return that variable to use it's value */
function getHumanChoice() {
  let userInput = prompt(
    "Please choose Rock, Paper or Scissor by typing it into the field"
  );
  return userInput;
}

// console.log("You chose " + getHumanChoice());
// console.log("The computer chose " + getComputerChoice());

/*Problem solving
  1. Understand the problem:
      How to write the code to play a single round of rock, paper, scissors against a NPC 
      (≡ = Definition = Non Player Character)?
  2. Plan:
      - The code will be played in the console.
      - The user inputs Rock, Paper or Scissors.
      - The desired output is an updated score of the human and the computer, which is than displayed in the console.
      - If you have the two choices than you need to compare them and given the rules of Rock, Paper, Scissors decide who get's a score.
  3. Pseudocode: 
      - Create a new function named playRound.
      - Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
      - Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
      - Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
      - Increment the humanScore or computerScore variable based on the round winner.*/

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
// console.log(humanScore);
// console.log(computerScore);

function playGame() {
  let computerScore = "0";
  let humanScore = "0";
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
    console.log("It's a draw king, start a new round by refreshing the page or die trying something else!")
  }
}

playGame();
