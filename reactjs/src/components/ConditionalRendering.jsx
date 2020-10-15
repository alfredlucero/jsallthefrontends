import React, { useState } from "react";

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={onClickLogout} />
      ) : (
        <LoginButton onClick={onClickLogin} />
      )}
    </div>
  );
};

const LoginButton = (props) => {
  return <button onClick={props.onClick}>Log In</button>;
};

const LogoutButton = (props) => {
  return <button onClick={props.onClick}>Log Out</button>;
};

export default ConditionalRendering;
