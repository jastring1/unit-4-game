var targetScore = 0;
var gemValues = [0, 0, 0, 0];
var gameTotal = 0;
var wins = 0;
var losses = 0;

var targetText = document.getElementById("target-text");
var winlossText = document.getElementById("winloss-text");
var runningText = document.getElementById("running-text");

function resetGame() {
    targetScore = Math.floor(Math.random() * 102 + 19);
    for (var i = 0; i < 4; i++) { gemValues[i] = Math.floor(Math.random() * 12 + 1); }
    gameTotal = 0;
}
function updateScoreboard() {
    targetText.textContent = targetScore;
    winlossText.textContent = "Wins: " + wins + "   Losses: " + losses;
    runningText.textContent = gameTotal;
}
function checkResults() {
    if (gameTotal === targetScore) {
        wins++;
        resetGame();
    }
    else if (gameTotal > targetScore) {
        losses++;
        resetGame();
    }
    updateScoreboard();
}
targetScore = Math.floor(Math.random() * 101 + 19);
targetText.textContent = targetScore;
winlossText.textContent = "Wins: " + wins + "   Losses: " + losses;
for (var i = 0; i < 4; i++) { gemValues[i] = Math.floor(Math.random() * 12 + 1); }
gameTotal = 0;

$(document).ready(function () {

    $("#gem1").on("click", function () {
        gameTotal += gemValues[0];
        checkResults();
    });
    $("#gem2").on("click", function () {
        gameTotal += gemValues[1];
        checkResults();
    });
    $("#gem3").on("click", function () {
        gameTotal += gemValues[2];
        checkResults();
    });
    $("#gem4").on("click", function () {
        gameTotal += gemValues[3];
        checkResults();
    });
});

