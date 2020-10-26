import React from "react";
import { Link } from "react-router-dom";

const otherFrontendsAvailableMap = {
  svelte: {
    previewLinkPrefix: "/svelte",
    previewName: "Svelte",
  },
  vue: {
    previewLinkPrefix: "/vue",
    previewName: "Vue",
  },
};

const PreviewLink = ({ link }) => {
  return (
    <Link
      className="bg-blue-200 rounded px-4 py-2 text-lg font-semibold text-blue-700 hover:text-blue-900"
      to={link}
    >
      <i className="fas fa-eye"></i> View
    </Link>
  );
};

const OtherFrontendsPreviewLink = ({ name, link }) => {
  const otherFrontend = otherFrontendsAvailableMap[name];

  if (otherFrontend) {
    return (
      <a
        className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 hover:text-gray-900 mr-2 mb-2"
        href={`${otherFrontend.previewLinkPrefix}${link}`}
      >
        {otherFrontend.previewName}
      </a>
    );
  } else {
    return null;
  }
};

const CodePreviewCard = ({
  title,
  description,
  previewLink,
  otherFrontendsAvailable,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out duration-700 transform hover:scale-105">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="flex justify-center mb-4 mx-4">
        <PreviewLink link={previewLink} />
      </div>
      {otherFrontendsAvailable.length > 0 && (
        <div className="mt-6">
          <p className="px-6 text-sm text-gray-600">
            See it implemented in some other way!
          </p>
          <div className="px-6 py-2">
            {otherFrontendsAvailable.map((otherFrontendAvailable, key) => (
              <OtherFrontendsPreviewLink
                name={otherFrontendAvailable}
                link={previewLink}
                key={key}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodePreviewCard;
