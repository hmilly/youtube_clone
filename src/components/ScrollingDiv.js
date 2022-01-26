import React, { useState, useRef } from "react";
import { useEffect } from "react";

const ScrollingDiv = ({ titles, setClicked, clicked }) => {
  const [scrollNum, setScrollNum] = useState(0);
  const [ulWidth, setUlWidth] = useState(1000);

  const ul = useRef(null);
  useEffect(() => {
    if (ul.current) {
      setUlWidth(ul.current.offsetWidth);
    }
  }, [ul]);

  const scrollLeft = (e) => {
    setScrollNum((e.target.parentElement.scrollLeft -= 300));
    e.target.parentElement.scrollLeft -= 300;
  };

  const scrollRight = (e) => {
    setScrollNum((e.target.parentElement.scrollLeft += 300));
    e.target.parentElement.scrollLeft += 300;
    console.log(e);
  };

  return (
    <ul className="scrollingDiv" ref={ul}>
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
