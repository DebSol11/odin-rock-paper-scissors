let computerChoice = "";
let result = null;

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
    return computerChoice
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

console.log(getComputerChoice());
