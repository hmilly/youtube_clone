import React, { useState, useEffect } from 'react'
import Video from './Video.js'
import ScrollingDiv from './ScrollingDiv'
import { VideoGenres } from "../styles/Vid.styled";

const VideoCont = ({ genres }) => {
  const [clicked, setClicked] = useState([{ title: "", data: [] }])

  useEffect(() => {
    setClicked(genres)
  }, [genres])

  return (
    <>
      <ScrollingDiv titles={genres} setClicked={setClicked} clicked={clicked} />
      {clicked.map((genre, i) => (
        <VideoGenres key={`video_${i}`}>
          <h1>{genre.title}</h1>
          <div className="videos">
            <Video vidData={genre.data} />
          </div>
        </VideoGenres>
      ))}
    </>
  )
}

export default VideoCont