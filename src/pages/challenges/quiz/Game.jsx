import React, { useEffect } from "react";

import data from "./questions";
import "./game.css";

const CORRECT_BONUS = 10;

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionsCounter = 0;
let availableQuestions = [];
let max_questions = 0;

let questions = [];

const Game = () => {
  useEffect(() => {
    const game = document.getElementById("game");
    game.classList.remove("hidden");
    loader.classList.add("hidden");
    questions = data;
    startGame();
  });

  const startGame = () => {
    questionsCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
  };

  const getNewQuestion = () => {
    const question = document.getElementById("question");
    const choices = Array.from(document.getElementsByClassName("choice-text"));
    console.log(availableQuestions);
    // if (availableQuestions.length === 0 || questionsCounter >= max_questions) {
    //   localStorage.setItem("mostRecentScore", score);
    //     return window.location.assign("#/quiz/end.html");
    // }
    questionsCounter++;
    progressText.innerText = `Questões ${questionsCounter}/${max_questions}`;
    // updae progrress bar
    progressBarFull.style.width = `${
      (questionsCounter / max_questions) * 100
    }%`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach((choice) => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
    });
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
  };

  return (
    <div className="grid grid-col-12 h-full place-items-center">
      <div className="container">
        <div id="loader"></div>
        <div id="game" className="justify-center flex-column hidden">
          <div id="hud">
            <div id="hud-item">
              <p id="progressText" className="hud-prefix">
                Question
              </p>
              <div id="progressBar">
                <div id="progressBarFull"></div>
              </div>
            </div>

            <div id="hud-item">
              <p className="hud-prefix">Pontuação</p>
              <h1 className="hud-main-text" id="score">
                0
              </h1>
            </div>
          </div>

          <h2 id="question"></h2>
          <div className="choice-container">
            <p className="choice-prefix">A</p>
            <p className="choice-text" data-number="1"></p>
          </div>
          <div className="choice-container">
            <p className="choice-prefix">B</p>
            <p className="choice-text" data-number="2"></p>
          </div>
          <div className="choice-container">
            <p className="choice-prefix">C</p>
            <p className="choice-text" data-number="3"></p>
          </div>
          <div className="choice-container">
            <p className="choice-prefix">D</p>
            <p className="choice-text" data-number="4"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
