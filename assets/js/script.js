function classCpu() {
    const cpu_plays = document.getElementById("cpu_plays");
    let play = cpuPlays();
    cpu_plays.className = "";
    cpu_plays.classList.add("cpu-" + play, play);
}


function cpuPlays() {
    let plays = ["rock", "paper", "scissors"]
    return plays[getRandomBetween0AndTwo()];
}

function getRandomBetween0AndTwo() {
    return Math.floor(Math.random() * (3));
}


const player_plays = document.getElementById("player_plays");

const playerPaper_button = document.getElementById("player-paper_button");
playerPaper_button.onclick = function () {
    player_plays.className = "";
    player_plays.classList.add("player-paper", "paper");
    classCpu()
    let gameReult = document.getElementById("game_result");
    gameReult.innerText = game()
};

const playerRock_button = document.getElementById("player-rock_button");
playerRock_button.onclick = function () {
    player_plays.className = "";
    player_plays.classList.add("player-rock", "rock");
    classCpu()
    let gameReult = document.getElementById("game_result");
    gameReult.innerText = game()
};

const playerScissors_button = document.getElementById("player-scissors_button");
playerScissors_button.onclick = function () {
    player_plays.className = "";
    player_plays.classList.add("player-scissors", "scissors");
    classCpu()
    let gameReult = document.getElementById("game_result");
    gameReult.innerText = game()
};

function getClassPlayer() {
    let divPlayer = document.getElementById('player_plays');
    let classPlayer = divPlayer.classList[1];
    return classPlayer;
}

function game() {
    let cpuPlays = document.getElementById("cpu_plays");
    cpuPlaysClass = cpuPlays.classList[1];

    let playerPlays = document.getElementById('player_plays');
    playerPlaysClass = playerPlays.classList[1];

    if (cpuPlaysClass === playerPlaysClass) {
        return "Empate";
    } else if (playerPlaysClass === "rock") {
        if (cpuPlaysClass === "scissors") {
            return "Você Ganhou";
        } else if (cpuPlaysClass === "paper") {
            return "Você Perdeu";
        }
    } else if (playerPlaysClass === "paper") {
        if (cpuPlaysClass === "rock") {
            return "Você Ganhou";
        } else if (cpuPlaysClass === "scissors") {
            return "Você Perdeu";
        }
    } else if (playerPlaysClass === "scissors") {
        if (cpuPlaysClass === "paper") {
            return "Você Ganhou";
        } else if (cpuPlaysClass === "rock") {
            return "Você Perdeu";
        }
    }

}