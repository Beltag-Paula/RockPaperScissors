function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper, Scissors: ");

  while ((humanChoice.toLowerCase() != "rock") && (humanChoice.toLowerCase() != "paper") &&
    (humanChoice.toLowerCase() != "scissors")) {
    console.log("Choose only from those 3");
    humanChoice = prompt("Rock, Paper, Scissors: ");
  }
  return humanChoice;
}

function getComputerChoice() {
  let computerChoice = ['rock', 'paper', 'scissors'];
  let randomChoice = getRandomItem(computerChoice);
  console.log("Computer chose: " + randomChoice);
  return randomChoice;
}

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
  else { return "tie" };



}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let tieScore = 0;
  for (let i = 0; i < 5; i++) {
    console.log("Round: " + (i + 1));
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if (playRound(humanSelection, computerSelection) == "human") { humanScore += 1; console.log("Human wins this round"); }
    if (playRound(humanSelection, computerSelection) == "computer") { computerScore += 1; console.log("Computer wins this round"); }
    if (playRound(humanSelection, computerSelection) == "tie") { tieScore += 1; console.log("It's a tie"); }
  }

  console.log("Human: " + humanScore + "; Computer: " + computerScore + "; Tie: " + tieScore + ";");
}

playGame();
