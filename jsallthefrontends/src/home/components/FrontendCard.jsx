import React from "react";

const FrontendCard = ({ frontend }) => {
  return (
    <div className="max-w-sm bg-gray-200 rounded overflow-hidden shadow-lg transition ease-in-out duration-700 transform hover:scale-105 px-6 py-4">
      <div className="mb-4 font-bold text-xl text-center">{frontend.name}</div>

      <div className="flex justify-center">
        <a
          className="bg-blue-200 rounded px-4 py-2 text-base font-semibold text-blue-600 hover:text-blue-800"
          href={frontend.link}
        >
          <i className="fas fa-eye"></i> View
        </a>
      </div>
    </div>
  );
};

export default FrontendCard;
