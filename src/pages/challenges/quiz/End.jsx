import React, { useEffect } from "react";
import Button from "./Button";

const End = () => {
  const mostRecentScore = localStorage.getItem("mostRecentScore");
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  useEffect(() => {
    const MAX_HIGH_SCORES = 5;

    const username = document.getElementById("username");
    const finalScore = document.getElementById("finalScore");
    finalScore.innerText = mostRecentScore;

    username.addEventListener("keyup", (e) => {
      e.preventDefault();
      const saveScoreBtn = document.getElementById("saveScoreBtn");
      saveScoreBtn.disabled = !username.value;
    });
  });

  const saveHighScore = (e) => {
    e.preventDefault();
    const username = document.getElementById("username");

    const score = {
      score: mostRecentScore,
      name: username.value,
    };

    highScores.push(score);
    highScores.sort((a, b) => {
      return b.score - a.score;
    });
    highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores));

    return window.location.assign("#/quiz/highscores");
    // return window.location.assign("#/quiz/end");
    // link="#/quiz/highscores"
  };

  return (
    <div className="grid grid-col-12 space-y-2 h-full place-items-center p-10">
      <div id="end" className="grid col-span-12 space-y-2">
        <h1 id="finalScore" className="col-span-12 space-y-2  ">
          0
        </h1>
        <div className="grid grid-cols-12 col-span-12  space-x-2 place-items-center">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            className="h-full col-span-6"
            style={{
              border: "1px solid #000",
              borderRadius: "1px",
              padding: "15px",
            }}
          />
          <button
            // disabled
            type="submit"
            className="btn cursor-pointer col-span-6 h-full w-full"
            id="saveScoreBtn"
            onClick={saveHighScore}
          >
            Salvar
          </button>
        </div>
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
