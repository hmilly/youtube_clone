import React from 'react'
import Video from './Video.js'

const VideoCont = ({ genre }) => {
  return (
    <>
      {genre.map((vidData, i) => (
        <div className="videoCategory" key={`video_${i}`}>
          <Video vidData={vidData} />
        </div>
      ))}
    </>
  )
}

export default VideoCont