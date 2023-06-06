const possibleMoves = ["Rock", "Paper", "Scissors"];
let playerScore = 0,
  computerScore = 0;

const winningCombinations = {
  ROCK: "SCISSORS",
  PAPER: "ROCK",
  SCISSORS: "PAPER",
};

const emojify = {
  Rock: "&#9994;",
  Paper: "&#9995;",
  Scissors: "&#9996;",
};

getComputerChoice = () => possibleMoves[Math.floor(Math.random() * 3)];

function playRound(playerMove, computerMove) {
  playerMove = playerMove.toUpperCase();
  computerMove = computerMove.toUpperCase();

  if (playerMove === computerMove) {
    return console.log(`It's a tie!`);
  }
  if (winningCombinations[playerMove] === computerMove) {
    playerScore++;
    return console.log(`You win! ${playerMove} beats ${computerMove}`);
  } else {
    computerScore++;
    return console.log(`You lose! ${computerMove} beats ${playerMove}`);
  }
}

const moves = document.querySelectorAll(".moves button");
const player = document.querySelector("#playerMove");
const computer = document.querySelector("#computerMove");

moves.forEach((button) => {
  button.addEventListener("click", () => {
    let playerChoice = button.id;
    let computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);

    playerMove.innerHTML = emojify[playerChoice];
    computerMove.innerHTML = emojify[computerChoice];
  });
});
