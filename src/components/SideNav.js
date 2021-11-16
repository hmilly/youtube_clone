import React from 'react'
import { Link } from "gatsby"
import * as styles from '../styles/nav.module.css'
import { StaticImage } from "gatsby-plugin-image"
import SnBestOf from './SnBestOf'
import SnMore from './SnMore'

const SideNav = () => {
  return (
    <div className={styles.sideNav} >
      <ul>
        <Link to="/">
          <StaticImage src="../images/compass.png" alt="compass" />
          <p>Home</p>
        </Link>
        <Link to="/explore">
          <StaticImage src="../images/compass.png" alt="compass" />
          <p>Explore</p>
        </Link>
        <Link to="/subscriptions">
          <StaticImage src="../images/subscriptions.png" alt="subscriptions" />
          <p>subscriptions</p>
        </Link>
      </ul>
      <ul>
        <Link to="/library">
          <StaticImage src="../images/lib.png" alt="library" />
          <p>Library</p>
        </Link>
        <Link to="/history">
          <StaticImage src="../images/history.png" alt="history" />
          <p>History</p>
        </Link>
      </ul >
      <section className={styles.signInSect}>
        <p>Sign in to like videos, comment, and subscribe</p>
        <Link id="blueBtn" to="/signin">
          <span role="img" aria-label="profile">👤</span>
          <p>SIGN IN</p>
        </Link>
      </section>
      <h4>BEST OF YOUTUBE</h4>
      <SnBestOf />
      <ul>
        <li>
          <StaticImage src="../images/plus.png" alt="plus symbol" />
          <p>Browse Channels</p>
        </li>
      </ul>
      <h4>MORE FROM YOUTUBE</h4>
      <SnMore />
      <section>
        <h5>About</h5>
        <h5>Press</h5>
        <h5>Copyright</h5>
        <h5>Contact us</h5>
        <h5>Creators</h5>
        <h5>Advertise</h5>
        <h5>Developers</h5>
      </section>
      <section>
        <h5>Terms</h5>
        <h5>Privacy</h5>
        <h5>Policy & Safety</h5>
        <h5>How YouTube works</h5>
        <h5>Test new features</h5>
      </section>
      <section>
        <p>© 2021 Google LLC</p>
      </section>
    </div >
  )
}

export default SideNav