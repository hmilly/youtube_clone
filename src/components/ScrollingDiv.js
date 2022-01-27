import React, { useState } from "react";

const ScrollingDiv = ({ titles, setClicked, clicked }) => {
  const [scrollNum, setScrollNum] = useState(0);
  const [ulWidth, setUlWidth] = useState(600);

  const scrollLeft = (e) => {
    if (scrollNum - 300 >= 300) {
      setScrollNum(scrollNum - 300);
      e.target.parentElement.scrollLeft -= 300;
    } else {
      setScrollNum(0);
      e.target.parentElement.scrollLeft = 0;
    }

    setScrollNum(scrollNum - 300);
    e.target.parentElement.scrollLeft -= 300;
    console.log("left");
    console.log(scrollNum);
  };

  const scrollRight = (e) => {
    setUlWidth(e.target.parentElement.offsetWidth);
    if (scrollNum + 300 <= ulWidth) {
      setScrollNum(scrollNum + 300);
      e.target.parentElement.scrollLeft += 300;
    } else {
      setScrollNum(ulWidth);
      e.target.parentElement.scrollLeft = ulWidth;
    }
  };

  return (
    <ul className="scrollingDiv">
      {scrollNum < ulWidth && (
        <button id="scrollRight" onClick={(e) => scrollRight(e)}>
          ›
        </button>
      )}
      {scrollNum > 0 && (
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
