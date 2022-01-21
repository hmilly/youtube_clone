import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"


const LinkItem = ({ tag, imgName, name }) => {
  return (
    <Link to={`${tag}`}>
      <GatsbyImage image={imgName} alt={name} />
      {/* <img src={`../images/${imgName}.png`} alt={name} /> */}
      <p>{name}</p>
    </Link>
  );
};

export default LinkItem;
