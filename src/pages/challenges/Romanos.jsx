import React, { useState } from "react";

const Romanos = () => {
  let [value, setValue] = useState("");
  let [converted, setConverted] = useState("");

  function handleOnChange(e) {
    // console.log("wow a rebincoca da parafuseta e sinistra");

    // console.log("here " + e.target.value.match(/[^0-9]/g));
    console.log(e.target.value === 0);

    if (e.target.value.match(/[^0-9]/g) !== null) {
      //     label.innerHTML = "Colocou uma letra, é sério isso?"
      setConverted("Colocou uma letra, é sério isso?");
    } else if (e.target.value == 0) {
      setValue("");
      setConverted("'Eita 0? ai não da...'");
    } else {
      setValue(e.target.value);
      setConverted(convertToRoman(e.target.value));
    }

    // } else if (input.value == 0) {
    // label.innerHTML = 'Eita 0? ai não da...'
    // } else
    //     label.innerHTML =  convertToRoman(input.value)
    // console.log(input.value)

    // setValue(e.target.value);
    // setConverted(e.target.value);
  }

  return (
    <div className="w-full h-screen flex items-center gap-4 justify-center flex-col">
      <input
        size={1}
        maxLength={4}
        onChange={handleOnChange}
        value={value}
        className="w-96 h-20 text-center rounded-full p-4 border-2 border-gray-500"
      />
      <label
        style={{
          fontFamily: "Courier New",
          fontWeight: "bolder",
        }}
      >
        {converted}
      </label>
    </div>
  );
};

function convertToRoman(num) {
  let arr = num.toString().split("");
  let newArr = [];
  let simbols = ["M", "D", "C", "L", "X", "V", "I"];

  function recurse(arr) {
    if (arr.length < 1) {
      return [];
    } else {
      let a = "";
      if (arr.length == 4) a = "M";
      else if (arr.length == 3) a = "C";
      else if (arr.length == 2) a = "X";
      else if (arr.length == 1) a = "I";
      newArr.push(...convertUnit(arr[0], a));
      arr.splice(0, 1);
      return recurse(arr);
    }
  }

  function convertUnit(n, char) {
    let arr = [];
    let index = simbols.indexOf(char);
    if (n == 9) {
      arr.push(char + simbols[index - 2]);
    } else if (n < 4) {
      arr.push(char.replace(/(\w+)/, "$1".repeat(n)));
    } else if (n == 4) {
      arr.push(char + simbols[index - 1]);
    } else if (n == 5) {
      arr.push(
        simbols[index - 1] === undefined ? simbols[0] : simbols[index - 1]
      );
    } else if (n > 5) {
      arr.push(simbols[index - 1] + char.replace(/(\w+)/, "$1".repeat(n - 5)));
    }
    return arr;
  }

  recurse(arr);
  return newArr.join("");
}

export default Romanos;
