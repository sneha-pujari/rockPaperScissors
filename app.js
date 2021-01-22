const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.getElementById('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}

//play game
function play(e){
    restart.style.display = "inline-block";
    console.log(e.target.id);
    const playerChoice = e.target.id;
    const compChoice = getCompChoice();
    console.log(playerChoice,compChoice)
    const winner = getWinner(playerChoice, compChoice);
    console.log(winner);
    showWinner(winner,compChoice);
}

//game winner
function getWinner(p,c){
    if(p === c){
        return 'draw';
    } else if(p === "rock"){
        if(c === "paper"){
         return 'computer';   
        }
        else{
            return 'player';
        }
    }
    else if(p === "paper")
    {
        if(c === "scissors"){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
    else if(p === "scissors"){
        if(c === "rock"){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
}

//computer choice
function getCompChoice(){
const rand = Math.random();
if(rand < 0.34) {
return 'rock';
}
else if(rand <= 0.67){
    return 'paper';
}
else{
    return 'scissors';
}
}

function showWinner(winner, compChoice){
    if(winner === "player"){
        scoreboard.player++;
        result.innerHTML = `<h1 class="text-win">You Win!</h1>
        <i class="fas fa-hand-${compChoice} fa-10x"></i>
        <p>Computer chose <strong> ${compChoice}</strong></p>`;
    }
    else if(winner === "computer"){
        scoreboard.computer++;
        result.innerHTML = `<h1 class="text-lose">You Lose!</h1>
        <i class="fas fa-hand-${compChoice} fa-10x"></i>
        <p>Computer chose <strong> ${compChoice}</strong></p>`;
    }
    else{
        result.innerHTML = `<h1>Draw!</h1>
        <i class="fas fa-hand-${compChoice} fa-10x"></i>
        <p>Computer chose <strong> ${compChoice}</strong></p>`;   
    }

    score.innerHTML = `<table><tr><td>Player: ${scoreboard.player}</td> <td>Computer: ${scoreboard.computer}</td></tr></table>`;
//  modal.style.display = 'block';
var m = document.getElementById("mod");
m.style.display = 'block';
}

function clearModal(e){
    console.log("checky"+e.target)
    var x = document.getElementById("mod");
    if(e.target == x){

      
x.style.display = 'none';
    }
}

function restartgame(){
 scoreboard.player = 0;
 scoreboard.player = 0;
 score.innerHTML = `<table><tr><td>Player: 0</td> <td>Computer:0</td></tr></table>`;
 
}

//event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartgame);