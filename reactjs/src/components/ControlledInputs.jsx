import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const [lastName, setLastName] = useState("");
  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <form>
      {(firstName || lastName) && (
        <p>
          Hello, {firstName} {lastName}
        </p>
      )}
      <label htmlFor="first-name">
        First Name
        <input
          id="first-name"
          type="text"
          value={firstName}
          onChange={onChangeFirstName}
        />
      </label>

      <label htmlFor="last-name">
        Last Name
        <input
          id="last-name"
          type="text"
          value={lastName}
          onChange={onChangeLastName}
        />
      </label>
    </form>
  );
};

export default ControlledInputs;
