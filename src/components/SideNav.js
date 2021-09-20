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
        <li>
          <StaticImage src="../images/compass.png" alt="compass" />
          <Link to="/">Home</Link>
        </li>
        <li>
          <StaticImage src="../images/compass.png" alt="compass" />
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <StaticImage src="../images/subscriptions.png" alt="subscriptions" />
          <Link to="/subscriptions">Subscriptions</Link>
        </li>
      </ul>
      <ul>
        <li>
          <StaticImage src="../images/lib.png" alt="library" />
          <Link to="/library">Library</Link>
        </li>
        <li>
          <StaticImage src="../images/history.png" alt="history" />
          <Link to="/history">History</Link>
        </li>
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