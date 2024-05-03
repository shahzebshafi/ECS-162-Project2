"use strict";
let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");

let youscore = 0;
let cpuscore = 0;

rockButton.addEventListener("click", rock);
paperButton.addEventListener("click", paper);
scissorsButton.addEventListener("click", scissors);

function rock() {
    let userChoice = "rock";
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let cpu = document.getElementById("cpuChoice");
    let result = document.getElementById("result");
    if (computerChoice === "rock") {
        cpu.innerHTML = "Computer chooses Rock";
        result.innerHTML = "Rock vs. Rock: It's a tie!";
        document.getElementById("you").textContent = youscore;
        document.getElementById("computer").textContent = cpuscore;
    } else if (computerChoice === "paper") {
        cpu.innerHTML = "Computer chooses Paper";
        result.innerHTML = "Rock vs. Paper: You lose!";
        cpuscore++;
        document.getElementById("you").textContent = youscore;
        document.getElementById("computer").textContent = cpuscore;
    } else {
        cpu.innerHTML = "Computer chooses Scissors";
        result.innerHTML = "Rock vs. Scissors: You win!";
        youscore++;
        document.getElementById("you").textContent = youscore;
        document.getElementById("computer").textContent = cpuscore;
    }
}

function paper() {
    let userChoice = "paper";
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let cpu = document.getElementById("cpuChoice");
    let result = document.getElementById("result");
    if (computerChoice === "rock") {
        cpu.innerHTML = "Computer chooses Rock";
        result.innerHTML = "Paper vs. Rock: You win!";
        youscore++;
        document.getElementById("you").textContent = youscore;
        document.getElementById("computer").textContent = cpuscore;
    } else if (computerChoice === "paper") {
        cpu.innerHTML = "Computer chooses Paper";
        result.innerHTML = "Paper vs. Paper: It's a tie!";
        document.getElementById("you").textContent = youscore;
        document.getElementById("computer").textContent = cpuscore;
    } else {
        cpu.innerHTML = "Computer chooses Scissors";
        result.innerHTML = "Paper vs. Scissors: You lose!";
        cpuscore++;
        document.getElementById("you").textContent = youscore;
        document.getElementById("computer").textContent = cpuscore;
    }
}

function scissors() {
    let userChoice = "scissors";
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let cpu = document.getElementById("cpuChoice");
    let result = document.getElementById("result");
    if (computerChoice === "rock") {
        cpu.innerHTML = "Computer chooses Rock";
        result.innerHTML = "Scissors vs. Rock: You lose!";
        cpuscore++;
        document.getElementById("you").textContent = youscore;
        document.getElementById("computer").textContent = cpuscore;
    } else if (computerChoice === "paper") {
        cpu.innerHTML = "Computer chooses Paper";
        result.innerHTML = "Scissors vs. Paper: You win!";
        youscore++;
        document.getElementById("you").textContent = youscore;
        document.getElementById("computer").textContent = cpuscore;
    } else {
        cpu.innerHTML = "Computer chooses Scissors";
        result.innerHTML = "Scissors vs. Scissors: It's a tie!";
        document.getElementById("you").textContent = youscore;
        document.getElementById("computer").textContent = cpuscore;
    }
}