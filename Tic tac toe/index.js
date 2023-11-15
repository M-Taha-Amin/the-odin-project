// Popup Buttons
const selectMarkPopup = document.querySelector(".select-mark");
const popupButtons = document.querySelectorAll(".popup-button");

// Main
const container = document.querySelector(".container");
const blocks = Array.from(document.querySelectorAll(".board div"));

// Winning Overlay Elements
const overlay = document.querySelector(".overlay");
const winningPlayerElement = document.querySelector(".winner");
const playAgainButton = document.querySelector(".play-again-button");

// Global Variables
let playerOneMark, playerTwoMark;
let playerOneTurn = true;
let playerTwoTurn = false;
let winner;

class Display {
  static showBoard() {
    selectMarkPopup.classList.add("hidden");
    container.classList.remove("hidden");
  }

  static showCurrentTurn() {
    const currentTurn = document.querySelector(".current-turn");
    if (playerOneTurn) currentTurn.textContent = `player one's turn`;
    else if (playerTwoTurn) currentTurn.textContent = `player two's turn`;
  }

  static addPlayerMark(block) {
    if (block.textContent === "") {
      if (playerOneTurn) block.textContent = playerOneMark;
      else if (playerTwoTurn) block.textContent = playerTwoMark;
      Game.checkWinner();
      Game.changeTurns();
      Display.showCurrentTurn();
    }
  }

  static showMessage(message) {
    overlay.style.display = "flex";
    if (winner) winningPlayerElement.textContent = `${message} wins!`;
    else winningPlayerElement.textContent = message;
    container.classList.add("disabled");
  }

  static resetBlocks() {
    blocks.forEach(block => (block.textContent = ""));
  }
}

class Game {
  static blocks = Array.from(document.querySelectorAll(".board div"));
  static checkWinner() {
    const [b1, b2, b3, b4, b5, b6, b7, b8, b9] = blocks;
    const allPaths = [
      [b1, b2, b3],
      [b4, b5, b6],
      [b7, b8, b9],
      [b1, b4, b7],
      [b2, b5, b8],
      [b3, b6, b9],
      [b1, b5, b9],
      [b3, b5, b7],
    ];
    allPaths.forEach(path => {
      if (Game.checkPath(path, playerOneMark)) winner = "Player One";
      else if (Game.checkPath(path, playerTwoMark)) winner = "Player Two";
    });
    if (winner) Display.showMessage(winner);
    Game.checkForDraw();
  }

  static checkPath(path, mark) {
    return path.every(block => block.textContent === mark);
  }

  static checkForDraw() {
    const emptyBlocks = blocks.filter(block => block.textContent === "");
    if (winner === undefined && emptyBlocks.length === 0) {
      Display.showMessage("It is a Draw!");
    }
  }

  static changeTurns() {
    playerOneTurn = !playerOneTurn;
    playerTwoTurn = !playerTwoTurn;
  }
}

class MarkDialogBox {
  static selectMark(button) {
    const isXButton = button.classList.contains("x-button");
    const isOButton = button.classList.contains("o-button");
    if (isXButton) {
      playerOneMark = "X";
      playerTwoMark = "O";
    } else if (isOButton) {
      playerOneMark = "O";
      playerTwoMark = "X";
    }
  }
}

class Reset {
  static all() {
    playerOneTurn = true;
    playerTwoTurn = false;
    document.querySelector(".current-turn").textContent = `Player One's Turn`;
    winner = undefined;
    Display.resetBlocks();
    overlay.style.display = "none";
    container.classList.remove("disabled");
    container.classList.add("hidden");
    selectMarkPopup.classList.remove("hidden");
  }
}

popupButtons.forEach(button => {
  button.addEventListener("click", () => {
    MarkDialogBox.selectMark(button);
    Display.showBoard();
  });
});

blocks.forEach(block => {
  block.addEventListener("click", () => {
    Display.addPlayerMark(block);
  });
});

playAgainButton.addEventListener("click", () => Reset.all());
