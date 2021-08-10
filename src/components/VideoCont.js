import React from 'react'
import Video from './Video.js'
import ScrollingDiv from './ScrollingDiv'

const VideoCont = ({ genre }) => {
  return (
    <>
    <ScrollingDiv/>
      {genre.map((vidData, i) => (
        <div className="videoCategory" key={`video_${i}`}>
          <h1>Trending</h1>
          <div className="videos">
            <Video vidData={vidData} />
          </div>
        </div>
      ))}
    </>
  )
}

export default VideoCont