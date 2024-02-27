let boxes = document.querySelectorAll(".box");
resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-cont");
let msg= document.querySelector("#msg");
let turnO = true;
let score = 0;
const winPatterns = [
    [0,1,2,3],
    [0,4,8,12],
    [0,5,10,15],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [3,6,9,12],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15]
]
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide"); 
    score = 0;

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("you have the button")
        if(turnO){
            box.innerText="O";
            turnO =false;
            box.style.color="red"
            ++score;
        } else {
            box.innerText="X";
            box.style.color="green"
            turnO=true;
            ++score;
        }
         box.disabled=true;
        // if(score === 9 ){
        //     alert("Match draw")
        // }
       checkWinner();
    });
    
});
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const showWinner =(winner) =>{
    msg.innerText = `Congratulation✨🥳 winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const gameDraw =() =>{
    msg.innerText = 'Game Over! Try again ';
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = ()=> {
    for (let pattern of winPatterns){
     let pos1Val = boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;
     let pos4Val = boxes[pattern[3]].innerText;
     if (pos1Val !=""&& pos2Val !=""&& pos3Val !=""&& pos4Val !=""){
        console.log(score)
        if(pos1Val === pos2Val && pos2Val === pos3Val && pos3Val === pos4Val){
        console.log("winner",pos1Val);
        showWinner(pos1Val);
        break;
     }else if(score >= 16){
        gameDraw();
     }
    }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);