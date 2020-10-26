import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const HomePage = () => {
  return (
    <Layout>
      <h2>Code Examples</h2>
      <Link to="/hello-world">Hello World</Link>
    </Layout>
  );
};

export default HomePage;
