let gameStarted = false;

function generateProblem() {

  let a = Math.floor(Math.random() * 99);
  let b = Math.floor(Math.random() * 99);

  return [a,b];

}

function displayProblem(values) {

  $(".math-problem").text(String(values[0] + " + " + values[1]));

}

function startGame() {

  // Clear Score
  $(".final-score").text("");
  $(".current-score").text(0);

  // Generate First Math Problem
  let values = generateProblem();  
  let answer = values[0] + values[1];

  // Display New Problem in DOM
  displayProblem(values);

  let startTime = new Date().getTime();

  let count = 0;

  $(".time-remaining").text("10s Remaining");

  // Start Timer
  let newTimer = setInterval(() => {

    count++;

    let timeLeft = (10 - count);

    $(".time-remaining").text(timeLeft + "s Remaining");

    // Game Over
    if (count >= 10) {

      clearInterval(newTimer);

      let finalScore = Number($(".current-score").text());

      // Reset Current Score
      $(".current-score").text(0);

      // Display Final Score
      $(".final-score").text("Final Score: " + finalScore);

      // Remove Problem
      $(".math-problem").text("");

      gameStarted = false;
    } 

  }, 1000);

  return answer;

}

$(document).ready( () => {

  let answer;

  // Start Game
  $(".new-game-button").on("click", () => {

    gameStarted = true;

    answer = startGame();

  });

  // On user input, check if it's correct
  // If it is correct, increment the current score and
  // generate a new math problem
  $(".math-answer-attempt").on("keydown", (event) => {

    if (!gameStarted) {

      gameStarted = true;

      answer = startGame();

    }

    let answerAttempt = Number($(".math-answer-attempt").val());

    // Answer is correct
    if (answerAttempt === answer) {

      let currentScore = $(".current-score").text();

      // Increment and display score
      currentScore ? 
        $(".current-score").text(Number(currentScore) + 1) :
        $(".current-score").text(0);

      // Generate a new problem
      values = generateProblem();
      answer = values[0] + values[1];

      // Display New Problem in DOM
      displayProblem(values);

      // Clear Answer Input Element
      $(".math-answer-attempt").val("")
    }

  });


});