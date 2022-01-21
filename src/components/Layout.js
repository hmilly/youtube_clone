import React, { useState } from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import SmallSideNav from "./SmallSideNav";

const Layout = ({ children }) => {
  const [lgNav, setLgnav] = useState(true);
  return (
    <>
      <TopNav lgNav={lgNav} setLgnav={setLgnav} />
      <div className="sideNavContainer">
        {lgNav ? <SideNav /> : <SmallSideNav />}
        {children}
      </div>
    </>
  );
};

export default Layout;
