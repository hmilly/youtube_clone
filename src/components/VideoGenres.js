import React, { useState, useEffect } from "react";
import Video from "./Video.js";
import ScrollingDiv from "./ScrollingDiv";
import { Genres } from "../styles/Vid.styled";

const VideoGenres = ({ filmData }) => {
  const [clicked, setClicked] = useState([{ title: "", data: [] }]);

  useEffect(() => {
    setClicked(filmData);
  }, [filmData]);

  return (
    <>
      <ScrollingDiv
        filmData={filmData}
        setClicked={setClicked}
        clicked={clicked}
      />
      {clicked.map((genre, i) => (
        <Genres key={`video_${i}`}>
          <h1>{genre.title}</h1>
          <div className="videos">
            <Video vidData={genre.data} />
          </div>
        </Genres>
      ))}
    </>
  );
};

export default VideoGenres;
