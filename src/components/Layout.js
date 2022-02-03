import React, { useState, useLayoutEffect, useEffect } from "react";
import PgHead from "./PgHead";
import NavSide from "./NavSide";
import { GlobalStyles } from "../styles/Global";

const Layout = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState();
  const [lgNav, setLgnav] = useState(true);

  useEffect(() => {
    windowWidth <= 1330 ? setLgnav(false) : setLgnav(true);
  }, [windowWidth]);

  useLayoutEffect(() => {
    const updateSize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", updateSize);
  });

  return (
    <body className="index">
      <GlobalStyles />
      <title>Youtube clone</title>
      <PgHead lgNav={lgNav} setLgnav={setLgnav} />
      <main className="sideNavContainer">
        <NavSide lgNav={lgNav} />
        {children}
      </main>
    </body>
  );
};

export default Layout;
