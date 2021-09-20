import React from 'react'

const ScrollingDiv = () => {
    const scrollLeft = (e) => e.target.parentElement.scrollLeft -= 500
    const scrollRight = (e) => e.target.parentElement.scrollLeft += 500

    return (
        <div className="scrollingDivParent">
            <button className="scrollL" onClick={(e) => scrollLeft(e)}>⇦</button>
            <button className="scrollR" onClick={(e) => scrollRight(e)}>⇨</button>
            <ul className="scrollingDiv">
                <li>
                    <p>All</p>
                </li>
                <li>
                    <p>Deep House</p>
                </li>
                <li>
                    <p>Comedies</p>
                </li>
                <li>
                    <p>Olympic Games</p>
                </li>
                <li>
                    <p>Boats</p>
                </li>
                <li>
                    <p>Playlists</p>
                </li>
                <li>
                    <p>The Grand Tour</p>
                </li>
                <li>
                    <p>Music</p>
                </li>
                <li>
                    <p>Live</p>
                </li>
                <li>
                    <p>ASMR</p>
                </li>
                <li>
                    <p>Trailers</p>
                </li>
                <li>
                    <p>Goalkeepers</p>
                </li>
                <li>
                    <p>Hamburgers</p>
                </li>
                <li>
                    <p>Martial arts</p>
                </li>
            </ul>
        </div>

    )
}

export default ScrollingDiv
