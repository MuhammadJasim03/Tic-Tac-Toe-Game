const buttons=document.querySelectorAll(".box");
const msg=document.getElementById("msg");
const msgcontainer=document.querySelector(".msg-container");
const newbutton=document.querySelector(".new-button");
const resetbutton=document.querySelector(".reset-button");

turnO=true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const showwinner =(winner)=>{
   msg.innerHTML=`Congraluation, Winner is ${winner}`
    disableBoxes();
    msgcontainer.classList.remove("hide");
}

const disableBoxes = () => {
  for (let button of buttons) {
    button.disabled = true;
  }
};

const enableBoxes = () => {
  for (let button of buttons) {
    button.disabled = false;
    button.innerHTML="";
  }
};

const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide")
}

buttons.forEach((button) => {
    button.addEventListener("click",()=>{
        if(turnO===true){
            button.innerHTML="O"
            turnO=false;
        }
        else{
            button.innerHTML="X"
            turnO=true;
        }
        button.disabled=true;
        checkWinner();
        
    })
})

const checkWinner=()=>{
for (let pattern of winPatterns){
    let val0 = buttons[pattern[0]].innerHTML;
    let val1 = buttons[pattern[1]].innerHTML;
    let val2 = buttons[pattern[2]].innerHTML;

    if(val0 != "" && val1 != "" && val2 != ""){

        if(val0===val1 && val1===val2){
            showwinner(val0);

        }
    }
}
}

newbutton.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);
