let scoreHome = 0
let scoreGuest = 0

let hScore = document.getElementById("H-score")
let gScore = document.getElementById("G-score")

function hAdd1(){
    scoreHome += 1
    hScore.textContent = scoreHome 
}

function hAdd2(){
    scoreHome += 2
    hScore.textContent = scoreHome 
}

function hAdd3(){
    scoreHome += 3
    hScore.textContent = scoreHome 
}

function gAdd1(){
    scoreGuest += 1
    gScore.textContent = scoreGuest 
}

function gAdd2(){
    scoreGuest += 2
    gScore.textContent = scoreGuest 
}

function gAdd3(){
    scoreGuest += 3
    gScore.textContent = scoreGuest 
}

function reset(){
    scoreGuest = 0
    gScore.textContent = scoreGuest 
    scoreHome = 0
    hScore.textContent = scoreHome 
}