import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const SnBestOf = () => {
    return (
        <ul>
            <li>
                <StaticImage src="../images/music.png" alt="music" />
                <p>Music</p>
            </li>
            <li>
                <StaticImage src="../images/sport.png" alt="sport" />
                <p>Sports</p>
            </li>
            <li>
                <StaticImage src="../images/game.png" alt="game" />
                <p>Gaming</p>
            </li>
            <li>
                <StaticImage src="../images/movie.png" alt="movies and shows" />
                <p>Movie & Shows</p>
            </li>
            <li>
                <StaticImage src="../images/news.png" alt="news" />
                <p>News</p>
            </li>
            <li>
                <StaticImage src="../images/live.png" alt="live" />
                <p>Live</p>
            </li>
            <li>
                <StaticImage src="../images/fash.png" alt="fashion" />
                <p>Fashion</p>
            </li>
            <li>
                <StaticImage src="../images/learn.png" alt="learning" />
                <p>Learning</p>
            </li>
            <li>
                <StaticImage src="../images/yt-red.png" alt="youtube icon" />
                <p>Spotlight</p>
            </li>
            <li>
                <StaticImage src="../images/vr.png" alt="vr symbol" />
                <p>360 Video</p>
            </li>
        </ul>
    )
}

export default SnBestOf
