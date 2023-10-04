console.log("Welcome To Tic Tac Toe");
let music=new Audio("images/backgroundmusic.mp3");
let movementmusic=new Audio("images/movement.mp3");
let gameover=new Audio("images/gameover.mp3");
let turn='X';
let gamesover=false;

//Function to change the turn
const changeTurn=()=>{
    return turn==='X'?'0':'X'

}
//Function to check winner
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let win=[
        [0,1,2], //this is e[0] value is 0
        [3,4,5], // here e[0] value is 3
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText +" Won"
            gamesover=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="158px" //It displays the image
            gameover.play()
        //if((boxtext[e[0]].innerText!=="")&&(boxtext[e[1]].innerText!=="")&&(boxtext[e[2]].innerText!=="")!=win){
        //   document.querySelectorAll('.info').innerText="Game is Tie!!"


    // Above code not understood for tie situations take help
        //  }
        }

    })

}

//Main logic starts here
music.play()
let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            movementmusic.play()
            checkWin();
            if(!gamesover){
            document.getElementsByClassName('info')[0].innerText="Turn For "+turn;
            }
        }

    })

})
//Add one click listener to reset button
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    }
        )
        turn='X'
        gamesover=false
        document.getElementsByClassName('info')[0].innerText="Turn For "+turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px" //It displays the image
        music.play()
            

})
