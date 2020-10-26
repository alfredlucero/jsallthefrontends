import React, { useEffect } from "react";
import Prism from "prismjs";
import "./Code.css";

const Code = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="rounded-b-md lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr-md lg:rounded-br-md bg-gray-800 scrollbar-none m-0 p-4 text-base">
      <code className={`language-${language} inline-block scrolling-touch`}>
        {code}
      </code>
    </pre>
  );
};

export default Code;
