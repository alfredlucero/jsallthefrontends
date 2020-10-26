import React from "react";

const otherFrontends;

const CodePreviewCard = ({
  title,
  description,
  previewLink,
  otherFrontendsAvailable,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700">{description}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <a class="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

        </a>
      </div>
    </div>
  );
};

export default Card;
