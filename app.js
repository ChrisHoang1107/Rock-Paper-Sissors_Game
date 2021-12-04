const computerHandArray = ["Rock", "Paper", "Sissors"];
function letsPlay(clickedText) {
  const playerScore = document.getElementById("playerScore");
  const computerScore = document.getElementById("computerScore");
  const compHandIndex = parseInt(Math.random() * computerHandArray.length);
  const computerHand = computerHandArray[compHandIndex];

  if (
    (clickedText === "Rock" && computerHand === "Paper") ||
    (clickedText === "Paper" && computerHand === "Sissors") ||
    (clickedText === "Sissors" && computerHand === "Rock")
  ) {
    const computerScoreUpdate = parseInt(computerScore.textContent) + 1;
    document.getElementById("computerScore").innerHTML = computerScoreUpdate;
    document.getElementById("resultTitle").innerHTML = " = The Computer Won";
  } else if (clickedText === computerHand) {
    document.getElementById("resultTitle").innerHTML = " = It was a draw!";
  } else {
    const playerScoreUpdate = parseInt(playerScore.textContent) + 1;
    document.getElementById("playerScore").innerHTML = playerScoreUpdate;
    document.getElementById("resultTitle").innerHTML = " = The Player Won";
  }
}
