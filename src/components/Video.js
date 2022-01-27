import React from "react";
import { VideoCard, VideoData } from "../styles/Vid.styled";

const Video = ({ vidData }) => {
  const getDate = (year) => {
    const date = new Date();
    const y = date.getFullYear() - year > 15 ? 15 : date.getFullYear() - year;
    return y === 1 ? 2 : y;
  };

  const getPopularity = (popularity) => {
    const arr = popularity.split(".");
    const sec = arr[0];
    return arr[0].concat(".", sec[0]);
  };

  return (
    <>
      {vidData.map((v, i) => (
        <VideoCard key={`v_${i}`}>
          <iframe
            src={`https://www.youtube.com/embed/${v.youtube_trailer_key}`}
            loading="lazy"
            title={v.title}
            samesite="secure"
            width="100%"
            height="auto"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            rel="0"
            origin="https://www.youtube.com/"
            modestbranding="1"
            autohide="1"
            showinfo="0"
            frameBorder="0"
          />
          <VideoData>
            <div className="img">
              <span role="img" aria-label="tick">
                👤
              </span>
            </div>
            <div className="details">
              <h3>{v.title}</h3>
              <div>
                <p>{v.directors[0]}</p>
                <span role="img" aria-label="tick">
                  ✔
                </span>
              </div>
              <div>
                <p>{`${getPopularity(v.popularity)}K views`}</p>
                <span role="img" aria-label="dot">
                  •
                </span>
                <p>{` ${getDate(v.year)} weeks ago`}</p>
              </div>
            </div>
          </VideoData>
        </VideoCard>
      ))}
    </>
  );
};

export default Video;
