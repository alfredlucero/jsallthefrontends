import React, { useState, useEffect } from "react";
import cn from "classnames";
import "./Nav.css";

const Nav = () => {
  const [activePath, setActivePath] = useState(window.location.pathname);
  const listenToPopstate = () => {
    const currentPath = window.location.pathname;
    setActivePath(currentPath);
  };

  useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);

  const reactPath = "/react";
  const isReactPageActive = activePath.startsWith(reactPath);

  const vuePath = "/vue";
  const isVuePageActive = activePath.startsWith(vuePath);

  const sveltePath = "/svelte";
  const isSveltePageActive = activePath.startsWith(sveltePath);

  const homePath = "/";
  const isHomePageActive = activePath === homePath;

  return (
    <nav className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
      <div className="w-full max-w-screen-xl relative mx-auto px-6 flex justify-between">
        <div>
          <a
            href="/"
            className={cn(
              "inline-block mr-6 text-xl transition ease-in-out duration-700 transform hover:scale-105 bg-gradient-to-r bg-clip-text text-transparent",
              {
                "from-teal-400 to-blue-500 border-b-2 border-transparent hover:border-blue-400": !isHomePageActive,
                "from-pink-500 to-orange-500 border-b-2 border-orange-400": isHomePageActive,
              }
            )}
          >
            <i className="fab fa-js-square"></i> All the Frontends
          </a>

          <a
            className={cn(
              "inline-block mr-4 text-xl bg-gradient-to-r bg-clip-text text-transparent transition ease-in-out duration-700 transform hover:scale-105",
              {
                "from-teal-400 to-blue-500 border-b-2 border-transparent hover:border-blue-400": !isReactPageActive,
                "from-pink-500 to-orange-500 border-b-2 border-orange-400": isReactPageActive,
              }
            )}
            href="/react"
          >
            React
          </a>

          <a
            className={cn(
              "inline-block mr-4 text-xl bg-gradient-to-r bg-clip-text text-transparent transition ease-in-out duration-700 transform hover:scale-105",
              {
                "from-teal-400 to-blue-500 border-b-2 border-transparent hover:border-blue-400": !isVuePageActive,
                "from-pink-500 to-orange-500 border-b-2 border-orange-400": isVuePageActive,
              }
            )}
            href="/vue"
          >
            Vue
          </a>

          <a
            className={cn(
              "inline-block mr-4 text-xl bg-gradient-to-r bg-clip-text text-transparent transition ease-in-out duration-700 transform hover:scale-105",
              {
                "from-teal-400 to-blue-500 border-b-2 border-transparent hover:border-blue-400": !isSveltePageActive,
                "from-pink-500 to-orange-500 border-b-2 border-orange-400": isSveltePageActive,
              }
            )}
            href="/svelte"
          >
            Svelte
          </a>
        </div>

        <a
          className="inline-block text-2xl text-gray-500 hover:text-gray-700 transition ease-in-out duration-700 transform hover:scale-110"
          href="https://github.com/alfredlucero/jsallthefrontends"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
