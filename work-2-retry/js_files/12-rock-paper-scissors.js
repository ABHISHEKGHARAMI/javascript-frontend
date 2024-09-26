// getting the score value from the local storage or set the value
let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
};



// going for the autoplay
let autoPlaying  = false;
let intervalId;


// function for the auto playing
function autoPlay(){
    if(!autoPlaying){
        intervalId = setInterval(()=>{
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);
        autoPlaying = true;
    }
    else{
        clearInterval(intervalId);
        autoPlaying = false;
    }
    
}

// time for the button for the user
document.querySelector('.js-rock-button').
addEventListener('click',()=>{
  playGame('rock');
})

document.querySelector('.js-paper-button').
addEventListener('click',()=>{
    playGame('paper');
})

document.querySelector('.js-scissor-button').
addEventListener('click',()=>{
    playGame('scissor');
})

// for keydown 
document.body.addEventListener('keydown',(event)=>{
  if(event.key == 'r'){
    playGame('rock');
  }
  else if(event.key == 'p'){
    playGame('paper');
  }
  else if(event.key == 's'){
    playGame('scissor');
  }
})
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

    localStorage.setItem('score',JSON.stringify(score));
    // update the score
    updateScoreElement();

    // update the result
    document.querySelector('.js-result').innerHTML = result;
    
    document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    computer`;

}

// function for update the score
function updateScoreElement(){
    document.querySelector('.js-scores').innerHTML = `Wins : ${score.wins}, Loss : ${score.losses},Ties : ${score.ties}`;
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