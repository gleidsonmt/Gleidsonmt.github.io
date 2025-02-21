import React from "react";
import Highscores from "../Highscores";
import Button from "./Button";

const Quiz = () => {
  return (
    <div className={`grid grid-col-12 h-full place-items-center text-blue-500`}>
      <div id="home" className="flex flex-col space-y-4">
        <h1>Quiz Raiz</h1>
        <Button link="#/quiz/game">Jogar</Button>
        <Button link="#/quiz/highscores">Tops</Button>
        <Button link="#/">Retornar ao Site</Button>
      </div>
    </div>
  );
};

export default Quiz;
