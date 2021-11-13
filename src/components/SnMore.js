import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const SnMore = () => {
    return (
        <ul>
            <li>
                <StaticImage src="../images/yt-grey.png" alt="youtube grey symbol" />
                <p>YouTube Premium</p>
            </li>
            <li>
                <StaticImage src="../images/live.png" alt="live" />
                <p>Live</p>
            </li>
            <li>
                <StaticImage src="../images/setting.png" alt="settings" />
                <p>Settings</p>
            </li>
            <li>
                <StaticImage src="../images/flag.png" alt="history" />
                <p>Report History</p>
            </li>
            <li>
                <StaticImage src="../images/help.png" alt="help" />
                <p>Help</p>
            </li>
            <li>
                <h2>!</h2>
                <p>Send Feedback</p>
            </li>
        </ul>
    )
}

export default SnMore
