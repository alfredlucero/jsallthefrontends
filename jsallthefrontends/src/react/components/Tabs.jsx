import React, { useState } from "react";
import Code from "./Code";

const Tabs = ({
  initialActiveTab = {
    tabName: "",
    tabNavComponent: null,
    tabContentComponent: null,
  },
  tabs = [],
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const selectTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col">
      <nav className="flex flex-row bg-white">
        {tabs.map((tab, key) => (
          <button
            className={
              activeTab.tabName === tab.tabName
                ? "text-blue-500 border-b-2 font-medium border-blue-500 py-4 px-6 block hover:text-blue-500 focus:outline-none"
                : "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
            }
            type="button"
            onClick={() => {
              selectTab(tab);
            }}
            key={key}
          >
            {tab.tabNavComponent}
          </button>
        ))}
      </nav>
      <div className="p-6 bg-gray-100">{activeTab.tabContentComponent}</div>
    </div>
  );
};

const tabsCode = `const Tabs = ({
  initialActiveTab = {
    tabName: "",
    tabNavComponent: null,
    tabContentComponent: null,
  },
  tabs = [],
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const selectTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col">
      <nav className="flex flex-row bg-white">
        {tabs.map((tab, key) => (
          <button
            className={
              activeTab.tabName === tab.tabName
                ? "text-blue-500 border-b-2 font-medium border-blue-500 py-4 px-6 block hover:text-blue-500 focus:outline-none"
                : "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
            }
            type="button"
            onClick={() => {
              selectTab(tab);
            }}
            key={key}
          >
            {tab.tabNavComponent}
          </button>
        ))}
      </nav>
      <div className="p-6 bg-gray-100">{activeTab.tabContentComponent}</div>
    </div>
  );
};`;

export const TabsCode = () => {
  return <Code code={tabsCode} language="javascript" />;
};

export default Tabs;
