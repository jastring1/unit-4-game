var targetScore = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var gameTotal = 0;
var wins =0;
var losses =0;

var targetText = document.getElementById("target-text");
var winlossText = document.getElementById("winloss-text");
var runningText = document.getElementById("running-text");

function resetGame() {
    targetScore = Math.floor(Math.random() * 102 + 19);
    gem1 = Math.floor(Math.random() * 12 + 1);
    gem2 = Math.floor(Math.random() * 12 + 1);
    gem3 = Math.floor(Math.random() * 12 + 1);
    gem4 = Math.floor(Math.random() * 12 + 1);
    gameTotal = 0;
}

function updateScoreboard() {
    targetText.textContent = targetScore;
    winlossText.textContent = "Wins: " + wins +"   Losses: " + losses;
    runningText.textContent = gameTotal;

}
targetScore = Math.floor(Math.random() * 120 + 19);
targetText.textContent = targetScore;
winlossText.textContent = "Wins: " + wins +"   Losses: " + losses;
gem1 = Math.floor(Math.random() * 12 + 1);
gem2 = Math.floor(Math.random() * 12 + 1);
gem3 = Math.floor(Math.random() * 12 + 1);
gem4 = Math.floor(Math.random() * 12 + 1);
gameTotal = 0;

$(document).ready(function () {

    $("#gem1").on("click", function () {
        gameTotal += gem1;
        if (gameTotal === targetScore) {
            wins++;
            resetGame(); 
        }
        else if (gameTotal > targetScore) {
            losses++;
            resetGame();
        }
        else {
            
        }
        updateScoreboard();
    });
    $("#gem2").on("click", function () {
        gameTotal += gem2;
        if (gameTotal === targetScore) {
            wins++;
            resetGame();
        }
        else if (gameTotal > targetScore) {
            losses++;
            resetGame();
        }
        else {
           
        }
        updateScoreboard();
    });
    $("#gem3").on("click", function () {
        gameTotal += gem3;
        if (gameTotal === targetScore) {
            wins++;
            resetGame();
        }
        else if (gameTotal > targetScore) {
            losses++;
            resetGame();
        }
        else {
            
        }
        updateScoreboard();
    });
    $("#gem4").on("click", function () {
        gameTotal += gem4;
        if (gameTotal === targetScore) {
            wins++;
            resetGame();
        }
        else if (gameTotal > targetScore) {
            losses++;
            resetGame();  
        }
        else {
        }
        updateScoreboard();
    });
});

