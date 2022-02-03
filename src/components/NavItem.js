import React from "react";
import { Link } from "gatsby";

const NavItem = ({ tag, img, name }) => {
  return tag !== undefined ? (
    <Link
      to={`${tag}`}
      activeStyle={{
        backgroundColor: "#dedede",
        fontWeight: 600,
      }}
    >
      <img src={`/${img}`} alt={`${name}`}></img>
      <p>{name}</p>
    </Link>
  ) : (
    <li>
      <img src={`/${img}`} alt={`${name}`}></img>
      <p>{name}</p>
    </li>
  );
};

export default NavItem;
