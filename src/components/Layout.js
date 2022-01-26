import React, { useState } from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  const [lgNav, setLgnav] = useState(true);
  return (
    <>
      <TopNav lgNav={lgNav} setLgnav={setLgnav} />
      <div className="sideNavContainer">
        <SideNav lgNav={lgNav} />
        {children}
      </div>
    </>
  );
};

export default Layout;
