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

    // Start Timer

  });

});