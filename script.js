const possibleMoves = ["Rock", "Paper", "Scissors"];
let playerScore = 0,
  computerScore = 0;

const winningCombinations = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

const emojify = {
  Rock: "./img/Rock.svg",
  Paper: "./img/Paper.svg",
  Scissors: "./img/Scissors.svg",
};

getComputerChoice = () => possibleMoves[Math.floor(Math.random() * 3)];

function playRound(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return "TIE";
  }
  if (winningCombinations[playerMove] === computerMove) {
    playerScore++;
    return "WIN!";
  } else {
    computerScore++;
    return "LOSE";
  }
}

const moves = document.querySelectorAll(".moves button");
const player = document.getElementById("playerMove");
const computer = document.getElementById("computerMove");
const playerTally = document.getElementById("playerScore");
const computerTally = document.getElementById("computerScore");
const result = document.getElementById("result");

moves.forEach((button) => {
  button.addEventListener("click", () => {
    let playerChoice = button.id;
    let computerChoice = getComputerChoice();

    result.innerText = playRound(playerChoice, computerChoice);

    player.src = emojify[playerChoice];
    computer.src = emojify[computerChoice];

    playerTally.innerText = playerScore;
    computerTally.innerText = computerScore;
  });
});
