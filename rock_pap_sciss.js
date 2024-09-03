let userScore=0,compScore=0,randIdx;
const userpara=document.querySelector("#uscore");
const compara=document.querySelector("#comscore");
const showWinner=(userWin)=>{
    if(userWin){
       msg.innerText="You Win";
       userScore++;
       msg.style.backgroundColor="green";
       userpara.innerText=userScore;
}
    else{
        compScore++;
        compara.innerText=compScore;
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
}
}
const drawGame=()=>{
     msg.innerText="play Again";
     msg.style.backgroundColor="rgb(53, 53, 112)";
}
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const playGame=(userChoice)=>{
const compChoice=genCompChoice();
if(userChoice==compChoice){
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
      userWin= compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin= compChoice==="scissor"?false:true;
      }
    else{
        userWin=compChoice==="rock"?false:true;
    }  
    showWinner(userWin);
}
};
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#play");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});