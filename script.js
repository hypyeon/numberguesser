let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, compurterGuess, target) => {
    const gapHuman = Math.abs(target - humanGuess);
    const gapComputer = Math.abs(target - compurterGuess);
    if (gapHuman > gapComputer) {
        return false;
    } else if (gapHuman < gapComputer) {
        return true;
    } else {
        return true;
    }
};

const updateScore = (str) => {
    if (str === 'human') {
        return humanScore += 1;
    } else if (str === 'computer') {
        return computerScore += 1;
    }
}; 

const advanceRound = () => {
    return currentRoundNumber += 1;
};