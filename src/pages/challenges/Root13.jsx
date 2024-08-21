import React, { useEffect, useState } from "react";
import styles from "./Root13.module.css";

const Root13 = () => {
  const [leftValue, setLeftValue] = useState("Texto Normal");
  const [rightValue, setRightValue] = useState("Texto Encriptado");

  function convertLeftSide(e) {
    console.log("what");
    setRightValue(e.target.value);
    setLeftValue(rot13(false, e.target.value.toUpperCase()));
  }

  function convertRightSide(e) {
    setLeftValue(e.target.value);
    setRightValue(rot13(true, e.target.value.toUpperCase()));
  }

  function copy() {}

  useEffect(() => {
    window.addEventListener("load", () => {
      setRightValue(rot13(false, rightValue.toUpperCase()));
    });
  });

  return (
    <main className={styles.main}>
      <label className={styles.title}>Encriptador de Texto</label>
      <div className={styles.content}>
        <textarea
          id="left-side"
          onInput={convertRightSide}
          value={leftValue}
        ></textarea>
        <textarea
          id="right-side"
          onInput={convertLeftSide}
          className="copy-text"
          value={rightValue}
        ></textarea>
      </div>
      <button onClick={copy}>Copiar</button>
    </main>
  );
};

function rot13(encrypt, str) {
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let arr = str.split("");
  let swap = [];
  arr.forEach((el) => {
    if (/[^a-z]/gi.test(el)) {
      swap.push(el);
    } else {
      let index = alphabet.indexOf(el.toUpperCase());

      if (encrypt) {
        if (index + 13 <= 25) {
          swap.push(alphabet[index + 13]);
        } else {
          swap.push(alphabet[index - 13]);
        }
      } else {
        if (index - 13 < 0) {
          swap.push(alphabet[index + 13]);
        } else {
          swap.push(alphabet[index - 13]);
        }
      }
    }
  });
  return swap.join("");
}

export default Root13;
