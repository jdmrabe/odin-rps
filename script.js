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
const player = document.getElementById("playerMove");
const computer = document.getElementById("computerMove");

moves.forEach((button) => {
  button.addEventListener("click", () => {
    let playerChoice = button.id;
    let computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);

    player.src = emojify[playerChoice];
    computer.src = emojify[computerChoice];
  });
});
