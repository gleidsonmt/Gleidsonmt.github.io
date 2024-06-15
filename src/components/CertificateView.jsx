import React from "react";

import {
  DiCss3Full,
  DiJava,
  DiJavascript,
  DiJavascript1,
} from "react-icons/di";

const CertificateView = ({ language, icon, children }) => {
  // icon.className = "text-9xl text-accent";

  return (
    <div className="body flex flex-col justify-center items-center gap-6 max-w-48 min-w-48 p-4">
      <div className="border-accent border-solid border-1 border-y-4 rounded-md p-2 max-w-[200px]">
        <div className="text-9xl text-accent">{icon}</div>
        <p className="text-accent">{language}</p>
      </div>
      <div className="text-center">{children}</div>
    </div>
  );
};

export default CertificateView;
