import React from 'react'
import { Link } from "gatsby"
import * as styles from '../styles/nav.module.css'
import { StaticImage } from "gatsby-plugin-image"
import LinkItem from './LinkItem'

const SmallSideNav = () => {
    return (
        <div className={styles.smNav}>
            <ul >
                <li>
                    <Link to="/">
                        <StaticImage src="../images/compass.png" alt="compass" />
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link to="/explore">
                        <StaticImage src="../images/compass.png" alt="compass" />
                        <p>Explore</p>
                    </Link>
                </li>
                <li>
                    <Link to="/subscriptions">
                        <StaticImage src="../images/subscriptions.png" alt="subscriptions" />
                        <p>Subscriptions</p></Link>
                </li>
                <li>
                    <Link to="/library">
                        <StaticImage src="../images/lib.png" alt="library" />
                        <p>Library</p>
                    </Link>
                </li>
                <li>
                    <Link to="/history">
                        <StaticImage src="../images/history.png" alt="history" />
                        <p>History</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SmallSideNav
