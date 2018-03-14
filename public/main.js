let playerOneSelection = "no selection";

const playerOneSelectsRock = () => {
  document.querySelector('#playerOneRock').style.backgroundColor = "lightblue";
  console.log ("rock")
  playerOneSelection = "rock";
  computerPlay()
}

const playerOneSelectsPaper = () => {
  document.querySelector('#playerOnePaper').style.backgroundColor = "lightblue";
  console.log ("paper")  
  playerOneSelection = "paper";
  computerPlay()
}

const playerOneSelectsScissors = () => {
  document.querySelector('#playerOneScissors').style.backgroundColor = "lightblue";
  console.log ("scissors")  
  playerOneSelection = "scissors";
  computerPlay()
}

let computerPlayerSelection = "no selection";
let compOutcome = Math.ceil(Math.random() * Math.ceil(3));


const computerPlay = () => {
  console.log("Live player made selection")
  if (compOutcome === 1) {
    document.querySelector('#computerPlayerRock').style.backgroundColor = "lightgreen";
    console.log ("comp rock")  
    computerPlayerSelection = "rock";
    gameOver()

  }
  else if (compOutcome === 2) {
    document.querySelector('#computerPlayerPaper').style.backgroundColor = "lightgreen";
    console.log ("comp paper")
    computerPlayerSelection = "paper";
    gameOver()
  }
  else if (compOutcome === 3) {
    document.querySelector('#computerPlayerScissors').style.backgroundColor = "lightgreen"; 
    console.log ("comp scissors")
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

// setTimeout(alert("Player One Wins!"),2000);


const winnerAlert = () => {
  if (playerOneSelection === "rock" && computerPlayerSelection === "scissors") {
    console.log("Player One Wins!")
    alert("Player One Wins!")
    location.reload();
  } else if (playerOneSelection === "paper" && computerPlayerSelection === "rock") {
    console.log("Player One Wins!")
    alert("Player One Wins!")
    location.reload();
  } else if (playerOneSelection === "scissors" && computerPlayerSelection === "paper") {
    console.log("Player One Wins!")
    alert("Player One Wins!")
    location.reload();
  } else if (computerPlayerSelection === "rock" && playerOneSelection === "scissors") {
    console.log("Player Two Wins!")
    alert("The Computer Wins!")
    location.reload();
  } else if (computerPlayerSelection === "paper" && playerOneSelection === "rock") {
    alert("The Computer Wins!")
    location.reload();
  } else if (computerPlayerSelection === "scissors" && playerOneSelection === "paper") {
    alert("The Computer Wins!")
    location.reload();
  } else {
    alert("It's a tie!")
    location.reload();
  }
}
