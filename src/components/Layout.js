import React, { useState, useLayoutEffect } from "react";
import NavTop from "./NavTop";
import NavSide from "./NavSide";

const Layout = ({ children }) => {
  const [lgNav, setLgnav] = useState(true);
  const [w, setW] = useState(1000);

  useLayoutEffect(() => {
    setW(window.innerWidth);
    const updateSize = () => {
      w <= 1330 ? setLgnav(false) : setLgnav(true);
    };

    window.addEventListener("resize", updateSize);
  });

  return (
    <>
      <NavTop lgNav={lgNav} setLgnav={setLgnav} />
      <div className="sideNavContainer">
        {w >= 800 && <NavSide lgNav={lgNav} />}
        {children}
      </div>
    </>
  );
};

export default Layout;
