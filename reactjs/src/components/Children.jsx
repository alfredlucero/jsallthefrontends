import React from "react";

const Children = (props) => {
  return (
    <div>
      Place your children underneath here and compose things
      {props.children}
    </div>
  );
};

export default Children;
