import React from "react";

const Layout = (props) => {
  return (
    <div className="w-full max-w-screen-xl relative mx-auto px-6 py-3">
      {props.children}
    </div>
  );
};

export default Layout;
