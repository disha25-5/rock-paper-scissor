let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
 const userscorePara=document.querySelector("#user-score");
 const compscorePara=document.querySelector("#comp-score");
const compChoice = () => {
     const options= ['rock','scissors','paper'];
    const rand = Math.floor(Math.random() * 3) ;
    return options[rand];
}
const draw = () =>{
    msg.innerText="Game is draw";
     msg.style.backgroundColor =  "#081b31";
    
}
const showWinner =(userWin)=>{
    if(userWin){
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText="you win";
        msg.style.backgroundColor = "green"
    }
    else{
        compscore++;
        compscorePara.innerText=compscore;
        msg.innerText="you lose";
         msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice)=>
    {
        //computer choice
        const comChoice = compChoice();
        if(userChoice===comChoice){
            draw();
        }
        else{
            let userWin= true;
            if(userChoice==="rock" ){
                //paper,scissors
                userWin= comChoice ==="paper"?false:true;
            }
            else if(userChoice ==="paper"){
                //rock,scissors
                userWin=comChoice === "scissors"?false:true;
            }
            else{
                //rock,paper
                userWin=comChoice === "rock"?false:true;
            }
            showWinner(userWin);

        }
    };
choices.forEach((choice) => {
        choice.addEventListener("click",()  =>{
        const userChoice = choice.getAttribute("id");
               playGame(userChoice);
});
});