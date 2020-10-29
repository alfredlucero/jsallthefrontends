import React from "react";

const CodePreview = (props) => {
  return (
    <div className="flex flex-col lg:flex-row md:max-h-screen">
      <div className="rounded-t-md lg:rounded-tl-md lg:rounded-bl-md lg:rounded-tr-none bg-blue-100 py-6 px-4 flex-1 flex justify-center items-center overflow-auto">
        <div className="w-5/6 max-h-full">{props.preview}</div>
      </div>
      <div className="flex-1 w-full lg:w-1/2 overflow-auto">{props.code}</div>
    </div>
  );
};

export default CodePreview;
