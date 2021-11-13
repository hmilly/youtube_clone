import React, {useState} from 'react'
import Video from './Video.js'
import ScrollingDiv from './ScrollingDiv'

const VideoCont = ({ genres }) => {
const [clicked, setClicked] = useState()

  return (
    <>
    <ScrollingDiv titles={genres}/>
      {genres.map((genre, i) => (
        <div className="videoCategory" key={`video_${i}`}>
          <h1>{genre.title}</h1>
          <div className="videos">
            <Video vidData={genre.data} />
          </div>
        </div>
      ))}
    </>
  )
}

export default VideoCont