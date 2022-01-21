import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const ListItem = ({ imgName, name }) => {
  return (
    <li>
      <GatsbyImage image={imgName} alt={name} />
      <p>{name}</p>
    </li>
  );
};

export default ListItem;
