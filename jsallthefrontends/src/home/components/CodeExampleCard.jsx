import React from "react";

const CodeExampleCard = ({ codeExample }) => {
  const { title, description, exampleLinkPath, frontendExamples } = codeExample;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out duration-700 transform hover:scale-105">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-600">{description}</p>
      </div>
      {frontendExamples.length > 0 && (
        <div className="mt-2">
          <p className="px-6 text-sm text-gray-600">
            See it implemented in different ways!
          </p>
          <div className="px-6 py-2">
            {frontendExamples.map((frontendExample, key) => (
              <a
                className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-600 hover:text-gray-800 mr-2 mb-2"
                href={`${frontendExample.link}${exampleLinkPath}`}
                key={key}
              >
                {frontendExample.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeExampleCard;
