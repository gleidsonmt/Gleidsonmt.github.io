import React, { useState } from "react";

const BinaryConverter = () => {
  const convertBtn = document.getElementById("convert-btn");

  const decimalToBinary = (input) => {
    // if (input === 0 || input === 1) {
    //   return String(input);
    // } else {
    //   // console.log("floor", Math.floor(input / 2));
    //   // console.log(input % 2);
    //   return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    // }

    const inputs = [];
    const quotients = [];
    const remainders = [];

    if (input === 0 || input === 1) {
      return String(input);
    }

    while (input > 0) {
      const quotient = Math.floor(input / 2);
      const remainder = input % 2;
      inputs.push(input);
      quotients.push(quotient);
      remainders.push(remainder);
      input = quotient;
    }

    const inps = document.getElementById("inputs");
    const remains = document.getElementById("remainders");
    const quo = document.getElementById("quotients");
    // <p className="col-span-12" id="remainders">Remainders: 3</p>
    // <p className="col-span-12" id="quotients">Quotients: 1</p>
    inps.innerText = "Inputs: " + inputs;
    remains.innerText = "Remainders: " + remainders;
    quo.innerText = "Quotients: " + quotients;

    // console.log("Inputs: ", inputs);
    // console.log("Quotients: ", quotients);
    // console.log("Remainders: ", remainders);
    return remainders.reverse().join("");
  };

  const checkUserInput = () => {
    const numberInput = document.getElementById("number-input");
    const result = document.getElementById("result");

    if (
      !numberInput.value ||
      isNaN(parseInt(numberInput.value)) ||
      parseInt(numberInput.value) < 0
    ) {
      alert("Please provide a decimal number greater than or equal to 0");
      return;
    }

    result.textContent = decimalToBinary(parseInt(numberInput.value));
    // numberInput.value = "";
  };

  return (
    <div className="grid grid-cols-12 w-full h-full place-items-center justify-center">
      <h1 className="w-full col-span-12">Decimal to Binary Converter</h1>
      <section className="grid grid-cols-12 col-span-12 p-10 md:col-span-12 w-full space-x-8">
        <h4 className="col-span-12 md:col-span-3 mb-10 md:mb-0  align-center">
          Enter a decimal number
        </h4>
        <input
          style={{
            padding: "0.4rem",
            borderRadius: "5px",
            border: "1px solid black",
            textAlign: "center",
            fontSize: "1.5rem",
          }}
          id="number-input"
          className="col-span-12 md:col-span-6 h-full mb-10 md:mb-0"
          type="number"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkUserInput();
            }
          }}
        />
        <button
          id="convert-btn"
          className="col-span-12 md:col-span-3 p-10 mt-10 md:mt-0"
          onClick={checkUserInput}
        >
          Convert
        </button>
      </section>
      <section className="grid grid-cols-12  col-span-12 w-full">
        <p className="col-span-12" id="inputs">
          Inputs: 6
        </p>
        <p className="col-span-12 tex-tcenter" id="quotients">
          Quotients: 1
        </p>
        <p className="col-span-12" id="remainders">
          Remainders: 3
        </p>

        <output
          id="result"
          style={{
            marginInline: "auto",
            width: "clamp(320px, 50vw, 460px)",
            border: "1px solid black",
            borderRadius: "10px",
            textAlign: "center",
            alignContent: "center",
            fontSize: "1.5rem",
          }}
          className="col-span-12 h-20"
        ></output>
        <h2 className="col-span-12">Call Stack</h2>
        <div
          id="animation-container"
          className="col-span-12 h-20 bg-red-300"
          style={{
            marginInline: "auto",
            width: "clamp(320px, 50vw, 460px)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default BinaryConverter;
