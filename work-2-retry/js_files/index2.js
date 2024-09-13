let score = JSON.parse(localStorage.getItem('score')) || {
    'win' : 0,
    'loss' : 0,
    'tie' : 0
}


function pickComputerMove(){
    let result = '';
    let computerMove = Math.random();
    if (computerMove > 0 && computerMove < 1/3){
        result = 'rock';
    }
    else if(computerMove > 1/3 && computerMove < 2/3){
        result = 'paper';
    }
    else if(computerMove > 2/3 && computerMove < 1){
        result = 'scissor';
    }
    return result;
}

function pickPlayerMove(playerMove){
    let result = '';
    let computerMove = pickComputerMove();
    if (computerMove === playerMove){
        result = 'tie';
        score.tie += 1;
    }else if((computerMove === 'rock' && playerMove === 'scissor') ||
             (computerMove === 'paper' && playerMove === 'rock') ||
             (computerMove === 'scissor' && playerMove === 'paper')){
                result = 'computer win';
                score.loss += 1;
             }
    else{
        result = 'User win.';
        score.win += 1;
    }
    alert(`Computer pick :${computerMove},Player picks :${playerMove},result is : ${result} User win : ${score.win},loss :${score.loss},tie : ${score.tie}`)
    return result;
}


function resetScore(){
    score = {'win' : 0,'loss' : 0,'tie': 0};
    localStorage.setItem(JSON.stringify(score));
}


//  gst calculater
function Scalc(){
    let value = document.getElementById('total').value;
    let result = '';
    value = parseFloat(value);
    if (value < 40 && value > 0){
        value += 10 ;
        result = `Your total cost is : ${value}`;
    }else{
        result = `Your total cost is : ${value}`
    }
    document.getElementById('calc').innerHTML = result;    
    
    
}


document.getElementById('subs').addEventListener('click',function(){
    var button = document.getElementById('subs');
    if (button.textContent === 'Subscribe'){
        button.textContent = 'Unsubscribe';
    }else{
        button.textContent = 'Subscribe' ;
    }

})