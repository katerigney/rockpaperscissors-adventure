let playerOneSelection = "no selection";

const playerOneSelectsRock = () => {
  document.querySelector('#playerOneRock').style.backgroundColor = "lightblue";
  console.log("rock")
  playerOneSelection = "rock";
  // gameOver()
  computerPlay()
}

const playerOneSelectsPaper = () => {
  document.querySelector('#playerOnePaper').style.backgroundColor = "lightblue";
  playerOneSelection = "paper";
  // gameOver()
  computerPlay()
}

const playerOneSelectsScissors = () => {
  document.querySelector('#playerOneScissors').style.backgroundColor = "lightblue";
  playerOneSelection = "scissors";
  // gameOver()
  computerPlay()
}

let computerPlayerSelection = "no selection";
let compOutcome = Math.ceil(Math.random() * Math.ceil(2));

const computerPlay = () => {
  console.log ("Live player made selection")
  
  if (compOutcome === 0) {
    const computerPlayerSelectsRock = () => {
      document.querySelector('#computerPlayerRock').style.backgroundColor = "lightgreen";
      computerPlayerSelection = "rock";
      gameOver()
    } 
  }
  else if (compOutcome === 1) {
    const computerPlayerSelectsPaper = () => {
      document.querySelector('#computerPlayerPaper').style.backgroundColor = "lightgreen";
      computerPlayerSelection = "paper";
      gameOver()
    }
  }
  else if (compOutcome === 2){
    const computerPlayerSelectsScissors = () => {
      document.querySelector('#computerPlayerScissors').style.backgroundColor = "lightgreen"; console.log (computerPlayerSelectsScissors)
      computerPlayerSelection = "scissors";
      gameOver()
    }
  }
  }








// let computerPlayerSelection = "no selection";

// const computerPlayerSelectsRock = () => {
//   document.querySelector('#computerPlayerRock').style.backgroundColor = "lightgreen";
//   computerPlayerSelection = "rock";
//   gameOver()
// }

// const computerPlayerSelectsPaper = () => {
//   document.querySelector('#computerPlayerPaper').style.backgroundColor = "lightgreen";
//   computerPlayerSelection = "paper";
//   gameOver()
// }

// const computerPlayerSelectsScissors = () => {
//   document.querySelector('#computerPlayerScissors').style.backgroundColor = "lightgreen";
//   computerPlayerSelection = "scissors";
//   gameOver()
// }






// As a user,after each player makes their selection, I should be told who won and the game should be over


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
    alert("Player Two Wins!")
  } else if (computerPlayerSelection === "paper" && playerOneSelection === "rock") {
    alert("Player Two Wins!")
  } else if (computerPlayerSelection === "scissors" && playerOneSelection === "paper") {
    alert("Player Two Wins!")
  } else {
    alert("It's a tie!")
  }
}