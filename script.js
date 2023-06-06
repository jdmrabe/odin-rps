const moves = ["Rock", "Paper", "Scissors"];
let playerScore = 0,
  computerScore = 0;

getComputerChoice = () => moves[Math.floor(Math.random() * 3)];

const winningCombinations = {
  ROCK: "SCISSORS",
  PAPER: "ROCK",
  SCISSORS: "PAPER",
};

function playRound(playerMove, computerMove) {
  playerMove = playerMove.toUpperCase();
  computerMove = computerMove.toUpperCase();

  if (playerMove === computerMove) {
    return `It's a tie!`;
  }
  if (winningCombinations[playerMove] === computerMove) {
    playerScore++;
    return `You win! ${playerMove} beats ${computerMove}`;
  } else {
    computerScore++;
    return `You lose! ${computerMove} beats ${playerMove}`;
  }
}

function game(rounds) {
  for (let i = 0; i < rounds; i++) {
    let playerMove = prompt(`What's your move?`);
    console.log(playRound(playerMove, getComputerChoice()));
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
  }
  console.log("Final Score:");
  console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
}

const rock = document.querySelector("#rock").addEventListener("click", getMove);
const paper = document
  .querySelector("#paper")
  .addEventListener("click", getMove);
const scissors = document
  .querySelector("#scissors")
  .addEventListener("click", getMove);

function getMove() {
  console.log(this.id);
}
