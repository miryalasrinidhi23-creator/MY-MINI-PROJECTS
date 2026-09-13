let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["red","yellow","green","purple"];
document.addEventListener("keypress",()=>{
    if(started==false){
        started=true;
        levelup();
    }
})
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level${level}`;
    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=btns[randomIdx];
    gameseq.push(randomColor);
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameFlash(randomBtn);
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function checkAns(Idx){
    if(userseq[Idx]===gameseq[Idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <br>${level}</br></br>Press any key to reset Game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}
function btnpress(){
    let btn=this;
    userflash(btn);
    let userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    level=0;
    gameseq=[];
    userseq=[];
}