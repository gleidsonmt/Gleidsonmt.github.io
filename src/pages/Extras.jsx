import React from "react";

const extras = [
  {
    title: "Quiz",
    description: "Teste seus conhecimentos com um quiz interativo.",
    link: "#/quiz",
  },
  {
    title: "Root 13",
    description: "Decifre mensagens codificadas com o método Root 13.",
    link: "#/root13",
  },
  {
    title: "Romanos",
    description: "Converta números para algarismos romanos.",
    link: "#/romanos",
  },
  {
    title: "Binário",
    description: "Converta números para o sistema binário.",
    link: "#/binary",
  },
];

const Extras = () => {
  return (
    <div className="grid grid-col-12 h-full place-content-center space-y-4">
      <h1>Extras</h1>
      <div className="flex flex-row justify-center space-x-4">
        {extras.map((extra, index) => (
          <a
            key={index}
            className="border-gray-200 rounded-xl circle border-2 h-full p-10 hover:border-gray-400"
            href={extra.link}
          >
            {extra.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Extras;
