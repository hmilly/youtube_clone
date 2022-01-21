import React, { useState } from "react";

const ScrollingDiv = ({ titles, setClicked, clicked }) => {
  const [scrolled, setScrolled] = useState(false);

  const scrollLeft = (e) => {
    if (e.target.parentElement.scrollRight !== 0) setScrolled(false);
    e.target.parentElement.scrollRight -= 500;
  };
  const scrollRight = (e) => {
    if (e.target.parentElement.scrollLeft !== 0) setScrolled(true);
    e.target.parentElement.scrollLeft += 500;
  };

  return (
    <ul className="scrollingDiv">
      <button id="scrollRight" onClick={(e) => scrollRight(e)}>
        ›
      </button>
      {scrolled && (
        <button id="scrollLeft" onClick={(e) => scrollLeft(e)}>
          ‹
        </button>
      )}
      <button onClick={() => setClicked([...titles])}>All</button>
      {titles.map((t, i) => (
        <button
          key={i}
          onClick={() => setClicked([{ ...clicked, data: t.data }])}
        >
          {t.title}
        </button>
      ))}
    </ul>
  );
};

export default ScrollingDiv;
