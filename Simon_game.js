let Gameseq = [];
let Userseq = [];
let Highscore = [];

let started = false;
let level = 0;

let body = document.querySelector("body");
let h2 = document.querySelector(".header");
let h3 = document.querySelector("h3");
let btns = document.querySelectorAll(".btn");
for (btn of btns) {
    btn.addEventListener("click", pressbtn);
}

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
})

function levelUp() {
    Userseq = [];
    level++;
    h2.innerText = `Level ${level}`
    let rendom_btn = document.querySelector(`.container${rendom()}`);
    Gameseq.push(rendom_btn);
    gameFlash(rendom_btn);
}

function rendom() {
    let num = Math.floor((Math.random() * 4) + 1);
    return num;
}

function pressbtn() {
    let btn = this;
    userFlash(btn);
    Userseq.push(btn);
    CheckAns(Userseq.length-1);
}

function CheckAns(idx) {
    if (Gameseq[idx] == Userseq[idx]) {
        if (Userseq.length == Gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        Gameover();
    }
}

function Gameover() {
    Gameoverflash();
    h2.innerText = `Game is Over. Your Score was ${level-1}.\nPress Any Key To Restart The Game`;
    Highscore.push(level-1);
    let g = Math.max(...Highscore);
    h3.innerText = `High Score : ${g}`;
    startOver();
}

function startOver(){
    level = 0;
    started = false;
    Gameseq = [];
    Userseq = [];
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function Gameoverflash() {
    body.classList.add("gameover");
    setTimeout(() => {
        body.classList.remove("gameover");
    }, 150);

}