import React, { useState } from "react";
import NavTop from "./NavTop";
import NavSide from "./NavSide";

const Layout = ({ children }) => {
  const [lgNav, setLgnav] = useState(true);
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
