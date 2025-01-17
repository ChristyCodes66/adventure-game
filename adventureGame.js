const prompt = require('prompt-sync')({sigint: true}); // Prep Step: call to prompt-sync module

let playerName = '';
let inventory = [];
let gameRunning = true;

function startGame() {
    playerName = prompt('Enter your name, brave adventurer: ');
    console.log(`Welcome, ${playerName}, to the JavaScript Quest!`);
}

function gameLoop() {
    while (gameRunning) {
        let choice = prompt('You are at a crossroads. Do you go left or right? (Type "left" or "right"): ').toLowerCase();

        if (choice === 'left') {
            console.log('You come across a dragon who gives you a treasure.');
            inventory.push('treasure');
        } else if (choice === 'right') {
            console.log('You fall into a trap and lose the game.');
            gameRunning = false;
        } else {
            console.log('Invalid choice. Please type "left" or "right".');
        }
    }
}

function endGame() {
    if (inventory.includes('treasure')) {
        console.log(`Congratulations, ${playerName}! You won the game with the following items: ${inventory.join(', ')}`);
    } else {
        console.log(`Game Over. Sorry, ${playerName}. Better luck next time!`);
    }
}

startGame();
gameLoop();
endGame();