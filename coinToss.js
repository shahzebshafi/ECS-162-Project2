"use strict";
let coinButton = document.getElementById("coinTossButton");

let headsnum = 0;
let tailsnum = 0;

coinButton.addEventListener("click", toss);

function toss() {
    let coin = Math.floor(Math.random() * 2);
    let result = document.getElementById("result");
    let imgResult = document.getElementById("imgResult");
    if (coin === 0) {
        result.innerHTML = "Heads";
        imgResult.src = "head.png";
        imgResult.style.display = "block";
        imgResult.alt = "Heads";
        headsnum++;
        document.getElementById("heads").textContent = headsnum;
        document.getElementById("tails").textContent = tailsnum;


    } else {
        result.innerHTML = "Tails";
        imgResult.src= "tails.png";
        imgResult.style.display = "block";
        imgResult.alt = "Tails";
        tailsnum++;
        document.getElementById("heads").textContent = headsnum;
        document.getElementById("tails").textContent = tailsnum;
        
    }
}

