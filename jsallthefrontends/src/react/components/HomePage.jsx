import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2>Code Examples</h2>
      <Link to="/hello-world">Hello World</Link>
    </div>
  );
};

export default HomePage;
