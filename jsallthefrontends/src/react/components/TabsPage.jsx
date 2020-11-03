import React from "react";
import Layout from "./Layout";
import CodePreview from "./CodePreview";
import Tabs, { TabsCode } from "./Tabs";

const TabsPreview = () => {
  const tabs = [
    {
      tabName: "Tab 1",
      tabNavComponent: <>Tab 1</>,
      tabContentComponent: <>Tab 1 Content</>,
    },
    {
      tabName: "Tab 2",
      tabNavComponent: <>Tab 2</>,
      tabContentComponent: <>Tab 2 Content</>,
    },
    {
      tabName: "Tab 3",
      tabNavComponent: <>Tab 3</>,
      tabContentComponent: <>Tab 3 Content</>,
    },
  ];
  const initialActiveTab = tabs[0];

  return <Tabs initialActiveTab={initialActiveTab} tabs={tabs} />;
};

const TabsPage = () => {
  return (
    <Layout>
      <h2 className="mb-4">Tabs</h2>
      <p className="mb-6">
        Clicking a button and showing one piece of content at a time. Learn
        composition, conditionals, and state management with tabs.
      </p>
      <CodePreview preview={<TabsPreview />} code={<TabsCode />} />
    </Layout>
  );
};

export default TabsPage;
