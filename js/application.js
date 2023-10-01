function generateProblem() {

  let a = Math.floor(Math.random() * 99);
  let b = Math.floor(Math.random() * 99);

  return [a,b];

}

function displayProblem(values) {

  $(".math-problem").text(String(values[0] + " + " + values[1]));

}

$(document).ready( () => {

  // Start Game
  $(".new-game-button").on("click", () => {

    // Clear Score
    $(".current-score").text(0);

    // Generate First Math Problem
    let values = generateProblem();  
    let answer = values[0] + values[1];

    // Display New Problem in DOM
    displayProblem(values);

    // On user input, check if it's correct
    // If it is correct, increment the current score and
    // generate a new math problem
    $(".math-answer-attempt").on("change", (event) => {

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

      }

    });

  });

});