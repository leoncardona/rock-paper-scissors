const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const rockImage = document.getElementById('rock-image');
const paperImage = document.getElementById('paper-image');
const scissorsImage = document.getElementById('scissors-image');
const infoText = document.getElementById('info-text');

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

const getResult = (playerSelection, computerSelection) => {
  let result;
  setDefaultImages();
  const isWinner = ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors') && computerSelection == 'paper');
  if (isWinner) {
    result = 'win';
  }
  if (!isWinner) {
    result = 'lose';
  }
  if (playerSelection == computerSelection) {
    result = 'tie';
  }
  updateImages(playerSelection, computerSelection, result);
  updateText(result);
}

const setDefaultImages = () => {
  rockImage.src = './src/rock.png';
  paperImage.src = './src/paper.png';
  scissorsImage.src = './src/scissors.png';
}

const updateImages = (playerSelection, computerSelection, result) => {
  if (result != 'tie') {
    if (playerSelection == 'rock') {
      rockImage.src = './src/rock-user.png';
    }
    if (playerSelection == 'paper') {
      paperImage.src = './src/paper-user.png';
    }
    if (playerSelection == 'scissors') {
      scissorsImage.src = './src/scissors-user.png';
    }
    if (computerSelection == 'rock') {
      rockImage.src = './src/rock-computer.png';
    }
    if (computerSelection == 'paper') {
      paperImage.src = './src/paper-computer.png';
    }
    if (computerSelection == 'scissors') {
      scissorsImage.src = './src/scissors-computer.png';
    }
  }
  if (result == 'tie') {
    if (playerSelection == 'rock') {
      rockImage.src = './src/rock-tie.png';
    }
    if (playerSelection == 'paper') {
      paperImage.src = './src/paper-tie.png';
    }
    if (playerSelection == 'scissors') {
      scissorsImage.src = './src/scissors-tie.png';
    }
  }
}

const updateText = (result) => {
  switch (result) {
    case 'win':
      infoText.textContent = 'You WON :)';
      break;
    case 'lose':
      infoText.textContent = 'You LOSE :(';
      break;
    case 'tie':
      infoText.textContent = 'Tie';
      break;
  }
}

rockButton.addEventListener('click', () => getResult('rock', getComputerChoice()));
paperButton.addEventListener('click', () => getResult('paper', getComputerChoice()));
scissorsButton.addEventListener('click', () => getResult('scissors', getComputerChoice()));
