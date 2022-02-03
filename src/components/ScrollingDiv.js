import React, { useState } from "react";

const ScrollingDiv = ({ filmData, setClicked, clicked }) => {
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
      <li>
        <button onClick={(e) => setClicked([...filmData])}>All</button>
      </li>
      {filmData.map((t, i) => (
        <li key={i}>
          <button onClick={(e) => setClicked([{ ...clicked, data: t.data }])}>
            {t.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ScrollingDiv;
