import React, { useEffect } from "react";
import Button from "./quiz/Button";

const Highscores = () => {
  useEffect(() => {
    const highScoresList = document.getElementById("highScoresList");
    const highScores = JSON.parse(localStorage.getItem("highScores") || null);

    console.log(highScores);
    if (highScores != null) {
      highScoresList.innerHTML = highScores
        .map((score) => {
          return `<li class='high-score'>${score.name} - ${score.score}</li>`;
        })
        .join("");
    }
  });
  return (
    <div className="grid grid-col-12 h-full place-content-center space-y-4">
      <div className="flex flex-col space-y-4">
        <h1 id="finalScore">Maiores Pontuações</h1>
        <ul id="highScoresList"></ul>
        <Button link="#/quiz/game">Jogar Novamente</Button>
        <Button link="#/quiz">Voltar ao menu</Button>
      </div>

      {/* <a href="/quiz/game.html" class="btn">
        Jogar Novamente
      </a>
      <a href="/quiz/quiz.html" class="btn">
        Voltar ao menu
      </a> */}
    </div>
  );
};

export default Highscores;
