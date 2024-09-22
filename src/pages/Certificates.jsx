import React from "react";
import dayjs from "dayjs";
import global from "../Global";

const Certificates = () => {
  const certficates = [
    {
      name: "Javascript Legacy - Algorithms and Data Structures",
      from: "freeCodeCamp",
      finishedAt: dayjs("2024-09-19").format("YYYY-MM-DD"),
      img: "certiifcado_legacy_javascrript_algorithms_and_data_sctructures.png",
    },
    {
      name: "Responsive Web Design",
      from: "freeCodeCamp",
      finishedAt: dayjs("2023-03-17").format("YYYY-MM-DD"),
      img: "certificado_responsive_web_design.png",
    },
  ];

  return (
    <div className="mt-10 mb-10 flex items-center flex-wrap justify-evenly gap-20">
      {certficates.map((el, index) => (
        <div key={index} className={` justify-items-center `}>
          <img
            src={global.courses + el.img}
            alt={el.name}
            className="max-w-md rounded-xl"
          />
          <h5 className="instagram-headline">{el.name}</h5>
          <p className="text-accent">{el.from}</p>
          <div className="flex flex-col mt-2">
            <p className="text-gray-600 ">{el.finishedAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificates;
