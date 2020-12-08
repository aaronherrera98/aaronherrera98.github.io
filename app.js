console.log("Hola")
const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')

let score = document.querySelector('#score')

let result = 0
let currenTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition) {
            result = result + 1;
            score.textContent = result
            hitposition = null;
        }
    })
})

function moveMole() {
    let timerId = nulltimerId = setInterval(randomSquare, 1000)
}



function countDown() {
    currenTime--
    timeLeft.textContent = currenTime
    moveMole()

    if(currenTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Tu puntaje final es de ' + result)
        return;
    }
}

let timerId = setInterval(countDown, 1000)
