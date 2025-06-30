function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getComputerChoice() {
  let computerChoice = ['rock', 'paper', 'scissors'];
  let randomChoice = getRandomItem(computerChoice);
  console.log("Computer chose: " + randomChoice);

  // Hide all computer tiles first time
  let computerTiles = document.getElementById('computerTiles');

  Array.from(computerTiles.children).forEach(tile => {
    if (tile.classList.contains(randomChoice)) {
      tile.style.visibility = 'visible';
      tile.style.border = '3px solid red';
    } else {
      tile.style.visibility = 'hidden';
      tile.style.border = 'none';
    }
  });

  return randomChoice;
}


// function getHumanChoice() {
//   const humanTiles = document.getElementById("humanTiles");

//   humanChoice = "";

//   humanTiles.addEventListener('click', function(event) {
//     if (event.target.classList.contains("rock")) {
//       humanChoice = "rock";
//       //console.log("ROCK");
//     }
//     if (event.target.classList.contains("paper")) {
//       //console.log("PAPER");
//       humanChoice ="paper";
//     }
//     if (event.target.classList.contains("scissors")) {
//       //console.log("SCISSORS");
//       humanChoice = "scissors";
//     }
//   }); 
//   return humanChoice;
// }

function clearHumanTileBorderBackToNormal(selectedTileClass = null) {
  const humanTiles = document.getElementById("humanTiles");
  Array.from(humanTiles.children).forEach(tile => {
    if (selectedTileClass && tile.classList.contains(selectedTileClass)) {
      tile.style.border = '3px solid blue';
    } else {
      tile.style.border = 'none';
    }
  });
}



// function getHumanChoice() {
//   return new Promise(resolve => {
//     const humanTiles = document.getElementById("humanTiles");

//      function handleClick(event) {
//       let humanChoice = "";

//       if (event.target.classList.contains("rock")) humanChoice = "rock";
//       if (event.target.classList.contains("paper")) humanChoice = "paper";
//       if (event.target.classList.contains("scissors")) humanChoice = "scissors";

//       if (humanChoice) {
//         console.log("Human chose: " + humanChoice); 
//         //clearHumanTileBorderBackToNormal(humanChoice);
//         Array.from(humanTiles.children).forEach(tile => {
//           if (tile.classList.contains(humanChoice)) {
//             tile.style.border = '3px solid blue';
//           } else {
//             tile.style.border = 'none';
//           }
//         });
//         humanTiles.removeEventListener('click', handleClick);
//         resolve(humanChoice); // fulfill the promise
//       }
//     }

//     humanTiles.addEventListener('click', handleClick);
//   });
// }



function playRound(humanChoice, computerChoice) {
  //rock > scissors; scissors > paper; paper>rock;


  if ((humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")) {
    return "human";
  }
  else if ((computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "rock")) {
    return "computer";
  }
  else { return "tie" }
}




function playGame() {
  let pHistoryArea = document.getElementById('messageArea');
  let humanScore = 0;
  let computerScore = 0;
  let tieScore = 0;

  let maxRounds = 5;
  let round = 0;

  const humanTiles = document.getElementById("humanTiles");
  const handleClick = (event) => {
    if (round === maxRounds) {
      pHistoryArea.innerHTML += `Final Score - Human: ${humanScore}, Computer: ${computerScore}, Ties: ${tieScore}<br>`;
      humanTiles.removeEventListener('click', handleClick);
      return;
    }
    let humanChoice = "";

    if (event.target.classList.contains("rock")) humanChoice = "rock";
    if (event.target.classList.contains("paper")) humanChoice = "paper";
    if (event.target.classList.contains("scissors")) humanChoice = "scissors";

    if (humanChoice) {
      console.log("Human chose: " + humanChoice);
      Array.from(humanTiles.children).forEach(tile => {
        if (tile.classList.contains(humanChoice)) {
          tile.style.border = '3px solid blue';
        } else {
          tile.style.border = 'none';
        }
      });
      const computerSelection = getComputerChoice();
      const result = playRound(humanChoice, computerSelection);

      if (result === "human") {
        humanScore++;
        pHistoryArea.innerHTML += "Human wins this round.<br>";
      } else if (result === "computer") {
        computerScore++;
        pHistoryArea.innerHTML += "Computer wins this round.<br>";
      } else {
        tieScore++;
        pHistoryArea.innerHTML += "It's a tie.<br>";
      }
      round++;
    }
  }
  humanTiles.addEventListener('click', handleClick);
}


// async function playGame() {
//   let pHistoryArea = document.getElementById('messageArea');
//   let humanScore = 0;
//   let computerScore = 0;
//   let tieScore = 0;

//   for (let i = 0; i < 5; i++) {
//     pHistoryArea.innerHTML += "Round: " + (i + 1) + "<br>";
//     const humanSelection = await getHumanChoice(); 
//     const computerSelection = getComputerChoice();
//     const result = playRound(humanSelection, computerSelection);

//     if (result === "human") {
//       humanScore++;
//       pHistoryArea.innerHTML += "Human wins this round.<br>";
//     } else if (result === "computer") {
//       computerScore++;
//       pHistoryArea.innerHTML += "Computer wins this round.<br>";
//     } else {
//       tieScore++;
//       pHistoryArea.innerHTML += "It's a tie.<br>";
//     }
//   }

//   pHistoryArea.innerHTML += `Final Score - Human: ${humanScore}, Computer: ${computerScore}, Ties: ${tieScore}<br>`;
// }

window.onload = function () {
  playGame();
};
