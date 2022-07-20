const getComputerChoice = () => {
  let result;
  const value = Math.floor(Math.random() * 3);
  switch (value) {
    case 0:
      result = 'rock';
      break;
    case 1:
      result = 'paper';
      break;
    case 2:
      result = 'scissors';
      break;
  }
  return result;
}

const playRound = (playerSelection, computerSelection) => {
  let message;
  const isWinner = ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors') && computerSelection == 'paper');
  if (isWinner) {
    message = 'You won';
  }
  if (!isWinner) {
    message = 'You lost';
  }
  if (playerSelection == computerSelection) {
    message = 'Tie';
  }
  return message;
}

const game = (rounds) => {
  for(let round = 0; round < rounds; round++) {
    const playerSelection = prompt('Your selection (rock/paper/scissors):');
    const computerSelection = getComputerChoice();
    const message = `Your selection: ${playerSelection}\nComputer selection: ${computerSelection}\nResult: ${playRound(playerSelection, computerSelection)}`;
    console.log(message);
  }
}

game(3);
