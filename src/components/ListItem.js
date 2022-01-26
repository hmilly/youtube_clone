import React from "react";
import { Link } from "gatsby";

const ListItem = ({ tag, img, name }) => {

  
  return tag !== undefined ? (
    <Link to={`${tag}`}>
      {img}
      <p>{name}</p>
    </Link>
  ) : (
    <li>
      {img}
      <p>{name}</p>
    </li>
  );
};

export default ListItem;
