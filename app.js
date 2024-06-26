let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;


const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    boxes.forEach((box) => {
        box.innerText = "";
    });

   
};

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

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner ();
        checkDraw();
    });
    
});


const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}


const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
    }
}

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`; 
    msgContainer.classList.remove("hide");
    disableBoxes();

};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText; 

        if ( posVal1 != "" && posVal2 != "" && posVal3 !="") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                showWinner(posVal1);
            }
        }
    
    };
        
};

const checkDraw = () => {
    
    let allFilled = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            allFilled = false;
            break;
        }
    }

    if (allFilled) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
        disableBoxes(); 
    }
};




newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


