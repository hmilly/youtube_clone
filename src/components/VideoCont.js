import React, { useState, useEffect } from 'react'
import Video from './Video.js'
import ScrollingDiv from './ScrollingDiv'

const VideoCont = ({ genres }) => {
  const [clicked, setClicked] = useState([{ title: "", data: [] }])

  useEffect(() => {
    setClicked(genres)
  }, [genres])

  return (
    <>
      <ScrollingDiv titles={genres} setClicked={setClicked} clicked={clicked} />
      {clicked.map((genre, i) => (
        <div className="videoGenre" key={`video_${i}`}>
          {genre.title !== undefined && <h1>{genre.title}</h1>}
          <div className={genre.title !== undefined ? "videos" : "vids"}>
            <Video vidData={genre.data} />
          </div>
        </div>
      ))}
    </>
  )
}

export default VideoCont