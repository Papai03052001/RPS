let score=JSON.parse(localStorage.getItem('score'));
    if(!score){
        score={
            win:0,
            losses:0,
            tie:0
        }
    }

function pickCompMove(){
    const randomNum= (Math.floor(Math.random()*3)+1);
    let compMove='';
    if(randomNum===1){
        compMove=('rock');
    }
    else if(randomNum===2){
        compMove=('paper');
    }
    else{
        compMove=('scissors');
    }
    return compMove;
}


function playGame(playerMove){
    const compMove=pickCompMove();
    let result='';
    if(playerMove==='scissors'){
        if(compMove==='rock'){
            result='lost';
        }
        else if(compMove==='paper'){
            result='win'
        }
        else{
            result='tie';
        }
                    
                    
    }
    else if(playerMove==='paper'){
        if(compMove==='rock'){
            result='win';
        }
        else if(compMove==='paper'){
            result='tie'
        }
        else{
            result='lost';
        }
                    
    }
    else if(playerMove==='rock'){
        if(compMove==='rock'){
            result='tie';
        }
        else if(compMove==='paper'){
            result='lost'
        }
        else{
            result='win';
        }
                    
    }
    if(result==='tie'){
        score.tie+=1;
    }
    else if(result==='lost'){
        score.losses+=1;
    }
    else if(result==='win'){
        score.win+=1;
    }

    localStorage.setItem('score',JSON.stringify(score))
    updateScore();
    document.querySelector('.result-el').innerHTML=result;
    document.querySelector('.moves-el').innerHTML=`You
        <img class="moveicon" src="image/${playerMove}-emoji.png" alt="">
        <img class="moveicon" src="image/${compMove}-emoji.png" alt="">
        Computer`;
                
}
updateScore();
    function updateScore(){
    document.querySelector('.score-el').innerHTML=`wins: ${score.win},losses: ${score.losses},tie: ${score.tie}`;
}