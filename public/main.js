let playerOneSelection = "no selection";

const playerOneSelectsRock = () => {
  document.querySelector('#playerOneRock').style.backgroundColor = "lightblue";
  playerOneSelection = "rock";
  computerPlay()
}

const playerOneSelectsPaper = () => {
  document.querySelector('#playerOnePaper').style.backgroundColor = "lightblue";
  playerOneSelection = "paper";
  computerPlay()
}

const playerOneSelectsScissors = () => {
  document.querySelector('#playerOneScissors').style.backgroundColor = "lightblue";
  playerOneSelection = "scissors";
  computerPlay()
}

let computerPlayerSelection = "no selection";
let compOutcome = Math.ceil(Math.random() * Math.ceil(3));

const computerPlay = () => {
  console.log("Live player made selection")

  if (compOutcome === 1) {
    document.querySelector('#computerPlayerRock').style.backgroundColor = "lightgreen";
    computerPlayerSelection = "rock";
    gameOver()

  }
  else if (compOutcome === 2) {
    document.querySelector('#computerPlayerPaper').style.backgroundColor = "lightgreen";
    computerPlayerSelection = "paper";
    gameOver()
  }
  else if (compOutcome === 3) {
    document.querySelector('#computerPlayerScissors').style.backgroundColor = "lightgreen"; 
    computerPlayerSelection = "scissors";
    gameOver()
  }
}

const gameOver = () => {
  if ((playerOneSelection === "rock" || playerOneSelection === "paper" || playerOneSelection === "scissors") && (computerPlayerSelection === "rock" || computerPlayerSelection === "paper" || computerPlayerSelection === "scissors")) {
    console.log("Players have made selections")
    winnerAlert()
  }
}

const winnerAlert = () => {
  //when one button from each player is selcted
  // when gameOver occurs, winnerAlert should start.
  if (playerOneSelection === "rock" && computerPlayerSelection === "scissors") {
    console.log("Player One Wins!")
    alert("Player One Wins!")
  } else if (playerOneSelection === "paper" && computerPlayerSelection === "rock") {
    console.log("Player One Wins!")
    alert("Player One Wins!")
  } else if (playerOneSelection === "scissors" && computerPlayerSelection === "paper") {
    console.log("Player One Wins!")
    alert("Player One Wins!")
  } else if (computerPlayerSelection === "rock" && playerOneSelection === "scissors") {
    console.log("Player Two Wins!")
    alert("The Computer Wins!")
  } else if (computerPlayerSelection === "paper" && playerOneSelection === "rock") {
    alert("The Computer Wins!")
  } else if (computerPlayerSelection === "scissors" && playerOneSelection === "paper") {
    alert("The Computer Wins!")
  } else {
    alert("It's a tie!")
  }
}