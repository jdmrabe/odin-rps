const possibleMoves = ["Rock", "Paper", "Scissors"];
const moves = document.querySelectorAll(".moves button");
const player = document.getElementById("playerMove");
const computer = document.getElementById("computerMove");
const playerTally = document.getElementById("playerScore");
const computerTally = document.getElementById("computerScore");
const result = document.getElementById("result");
const container = document.querySelector(".container");
const streak = document.getElementById("streak");

let playerScore = 0,
  computerScore = 0,
  haveWinner = false,
  playerStreak = 0;

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

// Performs and computes winner of a round
function playRound(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return "ROUND TIE";
  }
  if (winningCombinations[playerMove] === computerMove) {
    playerScore++;
    growText(playerTally);
    return "ROUND WIN!";
  } else {
    computerScore++;
    growText(computerTally);
    return "ROUND LOSS";
  }
}

// Sets buttons with their corresponding moves and initializes round upon activation
moves.forEach((button) => {
  button.addEventListener("click", () => {
    if (haveWinner === true) return;
    let playerChoice = button.id;
    let computerChoice = getComputerChoice();

    result.innerText = playRound(playerChoice, computerChoice);
    result.classList.toggle("fade-in");
    setTimeout(() => {
      result.classList.toggle("fade-in");
    }, 100);

    player.src = emojify[playerChoice];
    computer.src = emojify[computerChoice];

    updateScore();
    checkScore();
  });
});

// Checks whether score threshold is met and spawn replay button
function checkScore() {
  if (playerScore < 5 && computerScore < 5) {
    return;
  } else if (playerScore === 5) {
    result.innerText = "PLAYER WINS!";
    playerStreak++;
  } else {
    result.innerText = "COMPUTER WINS!";
    playerStreak = 0;
  }
  haveWinner = true;
  streak.innerText = playerStreak;
  drawPlayAgain();

  toggleMoves();
}

function drawPlayAgain() {
  const replayButton = document.getElementById("replay");
  if (replayButton) {
    replayButton.remove();
  }

  const replay = document.createElement("button");
  replay.setAttribute("id", "replay");
  replay.setAttribute("class", "slide-down");
  replay.textContent = "PLAY AGAIN";
  replay.style.width = "320px";

  container.appendChild(replay);

  replay.addEventListener("click", () => {
    replay.classList.remove("slide-up");
    replay.offsetWidth;
    replay.classList.add("slide-up");
    haveWinner = false;
    playerScore = 0;
    computerScore = 0;

    updateScore();

    player.src = "./img/Rock.svg";
    computer.src = "./img/Rock.svg";

    result.innerText = "REMATCH!";

    toggleMoves();
  });
}

function updateScore() {
  playerTally.innerText = playerScore;
  computerTally.innerText = computerScore;
}

function toggleMoves() {
  moves.forEach((button) => {
    button.classList.toggle("disabled");
  });
}

function growText(element) {
  element.classList.toggle("grow-up");
  setTimeout(() => {
    element.classList.toggle("grow-up");
  }, 100);
}
