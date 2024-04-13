let gameSeq = [];
let userSeq = [];

let  btns = ['red','blue','green','yellow'];

let started = false;
let level = 0;
let highest = 0;

h2=document.querySelector('h2')
document.addEventListener('keypress',function(){
    if(started==false)
    {
        console.log('started');
        started=true;

        levelUp();
    }
});

document.addEventListener('click',function(){
    if(started==false)
    {
        console.log('started');
        started=true;

        levelUp();
    }
});
function levelUp()
{
    userSeq=[];

    level++;
    let text = `Level ${level}`;
    h2.innerText=text;

    let randomIndex = Math.floor(Math.random()*4);
    let randomcolor = btns[randomIndex];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameSeq.push(randomcolor);
    btnFlash(randombtn);
}

function btnFlash(btn)
{
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },200);
}

function btnPress()
{
    let btn = this;
    let userColor = this.classList[1];
    userSeq.push(userColor);
    btnFlash(btn);

    checkSeq(userSeq.length-1);
}

function checkSeq(idx)
{
    if(gameSeq[idx]==userSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,250);
        }
    }
    else
    {
        h2.innerHTML=`Game Over ! Your Score was <b>${level}</b> <br/>Press Any Key to Start`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },250);
        h3=document.querySelector('h3');
        if(level>highest)
            h3.innerText=`Highest Score : ${level}`;
        reset();
    }
}

function reset()
{
    userSeq=[];
    gameSeq=[];
    started=false;
    level=0;
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns)
{
    btn.addEventListener('click',btnPress);
}