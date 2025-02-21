import React, { useEffect } from "react";
import Button from "./Button";

const End = () => {
  const saveScoreBtn = document.getElementById("saveScoreBtn");

  useEffect(() => {
    const finalScore = document.getElementById("finalScore");
    const mostRecentScore = localStorage.getItem("mostRecentScore");

    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    const MAX_HIGH_SCORES = 5;

    finalScore.innerText = mostRecentScore;
  });

  //   username.addEventListener("keyup", () => {
  //     saveScoreBtn.disabled = !username.value;
  //   });

  const saveHighScore = (e) => {
    e.preventDefault();
    console.log("iyou");
    //     const username = document.getElementById("username");
    //     const score = {
    //       score: mostRecentScore,
    //       name: username.value,
    //     };

    //     highScores.push(score);
    //     highScores.sort((a, b) => {
    //       return b.score - a.score;
    //     });
    //     highScores.splice(5);
    //     localStorage.setItem("highScores", JSON.stringify(highScores));

    //     return window.location.assign("#/quiz/highscores");
  };

  return (
    <div className="grid grid-col-12 space-y-2 h-full place-items-center">
      <div id="end" className="grid col-span-12 space-y-2">
        <h1
          id="finalScore"
          className="col-span-12 space-y-2 place-items-center align-middle"
        >
          0
        </h1>
        <form className="grid grid-cols-12 col-span-12 space-y-2 space-x-2">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            className="col-span-6"
          />
          <button
            disabled
            type="submit"
            className="btn cursor-pointer col-span-6"
            id="saveScoreBtn"
            onClick={saveHighScore}
            // onClick="saveHighScore(event)"
          >
            Salvar
          </button>
        </form>
        <div className="col-span-12 grid space-y-2">
          <Button className="col-span-12" link="#/quiz/game">
            Jogar de Novo
          </Button>
          <Button className="col-span-12" link="#/quiz">
            Voltar ao menu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default End;
