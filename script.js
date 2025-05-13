 
let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");






const genCompchoice = () =>{
    const option = ["rock","paper","scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
}


const drawgame = () => {
    msg.innerText = "Game was draw.Play again!";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin,userchoice,compchoice) => {
    if(userWin){
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorePara.innerText = compscore; 
        msg.innerText = `You Lost!  ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playgame = (userchoice) =>{
    const compchoice = genCompchoice();

    if (userchoice === compchoice){
        drawgame();
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userWin = compchoice === "scissor" ? false : true;
        }else{
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})