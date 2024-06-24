const pBottom = document.querySelector(".pBottom");
const timeEl = document.querySelector(".time");
const hitEl = document.querySelector(".hit");
const scoreEl = document.querySelector(".score");

let hitRn = 0;
let score = 0;

function makeBubble() {
    let bubble = "";
    for (var i = 1; i < 97; i++) {
        var rn = Math.floor(Math.random() * 10)
        bubble += `<div class="bubble">${rn}</div>`
    }
    pBottom.innerHTML = bubble
}
function runTimer() {
    let timer = 60;
    let time = setInterval(() => {
        if (timer > 0) {
            timer--;
            timeEl.textContent = timer;
        } else {
            clearInterval(time)
            pBottom.innerHTML = 'Game Over';
        }
    }, 1000);
}
function getNewHit() {
    hitRn = Math.floor(Math.random() * 10)
    hitEl.innerText = hitRn
}
function increaseScore() {
    score += 5
    scoreEl.innerText = score
}
pBottom.addEventListener('click', (e) => {
    let clickNumber = (Number(e.target.textContent));
    if (clickNumber === hitRn) {
        increaseScore()
        makeBubble()
        getNewHit()
    }
})


makeBubble()
runTimer()
getNewHit()
