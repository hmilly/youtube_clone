import React, { useState } from 'react'

const ScrollingDiv = ({ titles, setClicked }) => {
    return (
        <ul className="scrollingDiv">
            <button>➤</button>
            <li>
                <p onClick={() => setClicked("")}>All</p>
            </li>
            {titles.map(t => (
                <li onClick={() => setClicked(t.data)}>
                    <p>{t.title}</p>
                </li>
            ))}
        </ul>
    )
}

export default ScrollingDiv
