import React from 'react'

const ScrollingDiv = ({ titles, setClicked, clicked }) => {

    const scrollLeft = (e) => e.target.parentElement.scrollLeft += 500
    const scrollRight = (e) => e.target.parentElement.scrollLeft += 500
    return (
        <ul className="scrollingDiv">
            <button id="scrollBtn" onClick={(e) => scrollRight(e)}>➤</button>
            <button onClick={() => setClicked(titles)}> 
                All
            </button>
            {titles.map(t => (
                <button onClick={() => setClicked([{ ...clicked, data: t.data }])}>
                    {t.title}
                </button>
            ))}
        </ul>
    )
}

export default ScrollingDiv
