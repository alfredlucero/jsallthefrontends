import React, { useEffect } from "react";
import Prism from "prismjs";
import "./Code.css";

const Code = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="code-wrapper">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default Code;
