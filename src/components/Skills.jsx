import React from "react";
import ProgrammingBar from "./ProgrammingBar";

const Skills = () => {
  return (
    <div className=" w-full col-span-12 xl:col-span-5 order-0 xl:order-3">
      <div className="flex w-full flex-col items-center">
        <ProgrammingBar language="Java +20" percent={96} />
        <ProgrammingBar language="Javascript (Ecma +6)" percent={72} />
        <ProgrammingBar language="React (Latest)" percent={65} />
      </div>
    </div>
  );
};

export default Skills;
