import React from "react";
import Highscores from "../Highscores";
import Button from "./Button";

const Quiz = () => {
  return (
    <div className={`grid grid-col-12 h-full place-items-center text-blue-500`}>
      <div id="home" className="flex flex-col space-y-4">
        <h1>Quiz Raiz</h1>
        <Button link="#/quiz/game">Jogar</Button>
        <Button link="#/quiz/Highscores">Tops</Button>
        <a class="bg-transparent hover:bg-accent text-accent font-semibold hover:text-white py-2 px-4 border border-accent hover:border-transparent cursor-pointer rounded active:animate-ping">
          Retornar ao Site
        </a>
      </div>
    </div>
  );
};

export default Quiz;
