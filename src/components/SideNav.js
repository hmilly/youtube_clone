import React from 'react'
import { Link } from "gatsby"
import * as styles from '../styles/nav.module.css'

const SideNav = () => {
  return (
    <div className={styles.sideNav} >
      <div className={styles.sideNavLinks}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/subscriptions">Subscriptions</Link>
          </li>
          <em></em>
          <li>
            <Link to="/library">Library</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li style={{fontSize: "14px"}}>Sign in to like videos, comment, and subscribe</li>
          <li>
            <button className={styles.blueBtn}>
              <span role="img" aria-label="profile">👤</span>
              <p>SIGN IN</p>
              </button>
            </li>
        </ul>
      </div>
      <div>
        <h4>BEST OF YOUTUBE</h4>
        <ul>
          <li>
            <p>Music</p>
          </li>
          <li>
            <p>Sports</p>
          </li>
          <li>
            <p>Gaming</p>
          </li>
          <li>
            <p>Movie & Shows</p>
          </li>
          <li>
            <p>News</p>
          </li>
          <li>
            <p>Live</p>
          </li>
          <li>
            <p>Fashion</p>
          </li>
          <li>
            <p>Learning</p>
          </li>
          <li>
            <p>Spotlight</p>
          </li>
          <li>
            <p>360 Video</p>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <p>Browse Channels</p>
          </li>
        </ul>
      </div>
      <div>
        <h4>MORE FROM YOUTUBE</h4>
        <ul>
          <li>
            <p>YouTube Premium</p>
          </li>
          <li>
            <p>Live</p>
          </li>
          <em></em>
          <li>
            <p>Settings</p>
          </li>
          <li>
            <p>Report History</p>
          </li>
          <li>
            <p>Help</p>
          </li>
          <li>
            <p>Send Feedback</p>
          </li>
          <em></em>
        </ul>
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
          <p>© 2020 Google LLC</p>
        </section>
      </div>
    </div>
  )
}

export default SideNav