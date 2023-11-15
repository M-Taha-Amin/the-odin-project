// Possible moves
const moves = ["rock", "paper", "scissors"];
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector(".result");
const userScoreDisplay = document.querySelector(".user-score");
const compScoreDisplay = document.querySelector(".computer-score");

let playerScore = 0;
let computerScore = 0;

// Game Functions

function getComputerChoice() {
  return moves[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
  computerSelection = getComputerChoice();

  checkWinner(playerSelection, computerSelection);
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}. Tied!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}. You win!`;
    playerScore++;
    userScoreDisplay.textContent = playerScore;
  } else {
    result.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}. You lose!`;
    computerScore++;
    compScoreDisplay.textContent = computerScore;
  }
  if (playerScore === 6) {
    result.textContent = "You won the game!";
    resetScores();
  } else if (computerScore === 6) {
    result.textContent = "You lost the game!";
    resetScores();
  }
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
  userScoreDisplay.textContent = playerScore;
  compScoreDisplay.textContent = computerScore;
}

rock.addEventListener("click", function () {
  playRound("rock");
});
paper.addEventListener("click", function () {
  playRound("paper");
});
scissors.addEventListener("click", function () {
  playRound("scissors");
});
