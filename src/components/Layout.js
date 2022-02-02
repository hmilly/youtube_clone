import React, { useState, useLayoutEffect, useEffect } from "react";
import NavTop from "./NavTop";
import NavSide from "./NavSide";

const Layout = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(1400);
  const [lgNav, setLgnav] = useState(true);

  useEffect(() => {
    windowWidth <= 1330 ? setLgnav(false) : setLgnav(true);
  }, [windowWidth]);

  useLayoutEffect(() => {
    const updateSize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", updateSize);
  });

  return (
    <>
      <NavTop lgNav={lgNav} setLgnav={setLgnav} />
      <div className="sideNavContainer">
        <NavSide lgNav={lgNav} />
        {children}
      </div>
    </>
  );
};

export default Layout;
