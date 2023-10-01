function newProblem() {

  let a = Math.floor(Math.random() * 99);
  let b = Math.floor(Math.random() * 99);

  return [a,b];

}

$(document).ready( () => {
  
  $(".new-game-button").on("click", () => {

    // Generate First Math Problem
    let values = newProblem();  
    let answer = values[0] + values[1];

    // Display New Problem in DOM
    $(".math-problem").text(String(values[0] + " + " + values[1]));

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

      }

    });


    // Start Timer

  });

});