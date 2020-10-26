import React from "react";

const CodePreview = (props) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="rounded-t-md lg:rounded-tl-md lg:rounded-bl-md lg:rounded-tr-none overflow-hidden bg-blue-100 p-4 flex-1 flex justify-center items-center">
        <div>{props.preview}</div>
      </div>
      <div className="flex-1">{props.code}</div>
    </div>
  );
};

export default CodePreview;
