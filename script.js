'use strict';

const maxi = 100;

const goalEl = document.getElementById('goal');
const score1El = document.getElementById('score1');
const score2El = document.getElementById('score2');
const playerEl = document.getElementById('player');
const diceEl = document.getElementById('dice');
const roundScoreEl = document.getElementById('roundScore');
const roll1El = document.getElementById('p1roll');
const endRound1El = document.getElementById('p1endround');
const roll2El = document.getElementById('p2roll');
const endRound2El = document.getElementById('p2endround');
const newGameEl = document.getElementById('newgame');
const winnerEl = document.querySelector('.winner');
const resultEl = document.getElementById('winnerresult');
const overlayEl = document.querySelector('.overlay');
const closeWinnerEl = document.querySelector('.closewinner');

let score1, score2, player, dice, roundScore;

goalEl.textContent = `ใครได้แต้มรวมมากกว่า ${maxi} เป็นผู้ชนะ`;
score1El.textContent = 100;
score2El.textContent = 200;
playerEl.textContent = 1;
diceEl.textContent = 5;
roundScoreEl.textContent = 20;

const resetGame = () => {
    score1 = score2 = 0;
    player = 1;
    dice = 0;
    roundScore = 0;

    score1El.textContent = score1;
    score2El.textContent = score2;
    playerEl.textContent = player;
    diceEl.textContent = '';
    roundScoreEl.textContent = roundScore;
};

const rollDice1 = () => {
    if (player === 1) {
       dice = Math.trunc(Math.random()*6)+1;
       diceEl.textContent = dice;
       if (dice === 1) {
          roundScore = 0;
          roundScoreEl.textContent = roundScore;
          player = 2;
          playerEl.textContent = player;
        } else {
          roundScore += dice;
          roundScoreEl.textContent = roundScore;
        }
    };
}
    
const rollDice2 = () => {
    if (player === 2) {
        dice = Math.trunc(Math.random()*6)+1;
        diceEl.textContent = dice;
        if (dice === 1) {
            roundScore = 0;
            roundScoreEl.textContent = roundScore;
            player = 1;
            playerEl.textContent = player;
        } else {
            roundScore += dice;
            roundScoreEl.textContent = roundScore;
        }
    };
}    

const winner = (who,score) => {
    // pop up winner
    // close reset game
    resultEl.textContent = `ผู้ชนะคือ ผู้เล่น ${who} ด้วยคะแนน ${score}`;
    winnerEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
};

const closeWinner = () => {
    winnerEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
    resetGame();
}

const endRound1 = () => {
    if (player === 1) {
        score1 += roundScore;
        score1El.textContent = score1;
        if (score1>maxi) winner(1,score1);
        else {
            roundScore = 0;
            roundScoreEl.textContent = roundScore;
            player = 2;
            playerEl.textContent = player;    
        }
    } 
};

const endRound2 = () => {
    if (player === 2) {
        score2 += roundScore;
        score2El.textContent = score2;
        if (score2>maxi) winner(2,score2);
        else {
            roundScore = 0;
            roundScoreEl.textContent = roundScore;
            player = 1;
            playerEl.textContent = player;    
        }
    } 
};


newGameEl.addEventListener('click',resetGame);
roll1El.addEventListener('click',rollDice1);
endRound1El.addEventListener('click',endRound1);
roll2El.addEventListener('click',rollDice2);
endRound2El.addEventListener('click',endRound2);
closeWinnerEl.addEventListener('click',closeWinner);

closeWinner();
