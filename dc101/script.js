let playerScore = 0;
let computerScore = 0;
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const resultTextEl = document.getElementById('resultText');
const playerChoiceEl = document.getElementById('playerChoice');
const computerChoiceEl = document.getElementById('computerChoice');


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getChoiceEmoji(choice) {
    switch(choice) {
        case 'rock': return '✊';
        case 'paper': return '✋';
        case 'scissors': return '✌️';
        default: return '-';
    }
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You win!";
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "Computer wins!";
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    
    playerChoiceEl.textContent = getChoiceEmoji(playerChoice);
    computerChoiceEl.textContent = getChoiceEmoji(computerChoice);
    resultTextEl.textContent = result;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    resultTextEl.textContent = "Choose your move!";
    playerChoiceEl.textContent = "-";
    computerChoiceEl.textContent = "-";
}