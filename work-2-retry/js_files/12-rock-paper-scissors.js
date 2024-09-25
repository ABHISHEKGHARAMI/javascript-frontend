// getting the score value from the local storage or set the value
let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
};

// function for play the game for the player Move
function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';

    if(playerMove=='rock'){
        if(computerMove=='rock'){
            result = 'tie';
        }
        else if(computerMove=='paper'){
            result = 'you loss';
        }
        else if(computerMove=='scissor'){
            result = 'you win';
        }
    }
    else if(playerMove=='paper'){
        if(computerMove=='rock'){
            result = 'you loss';
        }else if(computerMove=='paper'){
            result = 'tie';
        }
        else if(computerMove=='scissor'){
            result = 'you win';
        }
    }

    else if(playerMove=='scissor'){
        if(computerMove=='rock'){
            result = 'you loss';
        }
        else if(computerMove=='paper'){
            result = 'You win'
        }
        else if(computerMove=='scissor'){
            result = 'tie';
        }
    }

    if (result=='you win'){
        score.wins += 1;
    }
    else if(result == 'you loss'){
        score.losses += 1;
    }
    else if(result == 'tie'){
        score.ties += 1
    }
    return result;
}

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber>0 && randomNumber <= 1/3){
        computerMove = 'rock';
    }
    else if(randomNumber > 1/3 && randomNumber <= 2/3){
        computerMove = 'paper';
    }
    else if(randomNumber > 2/3 && randomNumber <= 1){
        computerMove = 'scissor';
    }
    return computerMove;
}