/* Crystal Collectors
    James Stringfield
    */
// Declaring and initializing the global variables needed for the Crystal Collectors Game
var targetScore = 0;
var gemValues = [0, 0, 0, 0];
var gameTotal = 0;
var wins = 0;
var losses = 0;
//using javascript to capture certain text areas that will be updated dynamically through html
var targetText = document.getElementById("target-text");
var winlossText = document.getElementById("winloss-text");
var runningText = document.getElementById("running-text");
// This function resets values when a game has ended in a win or loss to continue to another game
function resetGame() {
    targetScore = Math.floor(Math.random() * 102 + 19);
    for (var i = 0; i < 4; i++) { gemValues[i] = Math.floor(Math.random() * 12 + 1); }
    gameTotal = 0;
}//this function updates some html text content when a user clicks a gem or game ends
function updateScoreboard() {
    targetText.textContent = targetScore;
    winlossText.textContent = "Wins: " + wins + "   Losses: " + losses;
    runningText.textContent = gameTotal;
}
function checkResults() {//This function checks whether a win or loss has occured and updates the counters while also calling the update scoreboard function
    if (gameTotal === targetScore) {
        wins++;
        resetGame();
    }
    else if (gameTotal > targetScore) {
        losses++;
        resetGame();
    }
    updateScoreboard();
}// These few lines of code initialize the game and generate random values for the crystals
targetScore = Math.floor(Math.random() * 101 + 19);
targetText.textContent = targetScore;
winlossText.textContent = "Wins: " + wins + "   Losses: " + losses;
for (var i = 0; i < 4; i++) { gemValues[i] = Math.floor(Math.random() * 12 + 1); }
gameTotal = 0;
//main function that looks for clicks on the crystal images and updates values accordingly
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

