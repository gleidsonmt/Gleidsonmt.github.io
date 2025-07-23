import React from "react";

import global from "../Global";
import certficates from "./Certificates";

const CertificateSection = () => {
  return (
    <div className="mt-10 mb-10 flex items-center flex-wrap justify-evenly gap-20">
      {certficates.map((el, index) => (
        <div key={index} className={` justify-items-center `}>
          <a
            href={el.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center"
          >
            <img
              src={global.courses + el.img}
              alt={el.name}
              className="max-w-md rounded-xl"
            />
          </a>
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

export default CertificateSection;
