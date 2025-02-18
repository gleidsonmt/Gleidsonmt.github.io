import React, { useState } from "react";

const BinaryConverter = () => {
  const numberInput = document.getElementById("number-input");
  const convertBtn = document.getElementById("convert-btn");
  const result = document.getElementById("result");

  const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
      return String(input);
    } else {
      return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }

    // const inputs = [];
    // const quotients = [];
    // const remainders = [];

    // if (input == 0) {
    //   result.innerText = "0";
    //   return;
    // }

    // while (input > 0) {
    //   const quotient = Math.floor(input / 2);
    //   const remainder = input % 2;
    //   inputs.push(input);
    //   quotients.push(quotient);
    //   remainders.push(remainder);
    //   input = quotient;
    // }
    // console.log("Inputs: ", inputs);
    // console.log("Quotients: ", quotients);
    // console.log("Remainders: ", remainders);

    // result.innerText = remainders.reverse().join("");
  };

  const checkUserInput = () => {
    if (
      !numberInput.value ||
      isNaN(parseInt(numberInput.value)) ||
      parseInt(numberInput.value) < 0
    ) {
      alert("Please provide a decimal number greater than or equal to 0");
      return;
    }

    result.textContent = decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
  };

  return (
    <div className="grid grid-cols-12 w-full h-full place-items-center justify-center">
      <h1 className="w-full col-span-12">Decimal to Binary Converter</h1>
      <section className="grid grid-cols-12 col-start-2 col-span-10 w-full space-x-8">
        <h4 className="col-span-4">Enter a decimal number</h4>
        <input
          style={{
            padding: "0.3rem",
          }}
          id="number-input"
          className="col-span-6 "
          type="number"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkUserInput();
            }
          }}
        />
        <button
          id="convert-btn"
          className="col-span-2"
          onClick={checkUserInput}
        >
          Convert
        </button>
      </section>
      <section className="grid grid-cols-12 col-span-12 w-full space-x-8 justify-center">
        <output
          id="result"
          style={{
            marginInline: "auto",
            width: "clamp(320px, 50vw, 460px)",
          }}
          className="col-span-12 h-20 bg-red-300"
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
