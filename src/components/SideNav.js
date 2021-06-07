import React from 'react'
import { Link } from "gatsby"
import * as styles from '../styles/nav.module.css'
import { StaticImage } from "gatsby-plugin-image"

const SideNav = () => {
  return (
    <div className={styles.sideNav} >
      <div >
        <ul>
          <li>
            <span role="img" aria-label="home">🏠</span>
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
          <em></em>
          <li>
            <StaticImage src="../images/lib.png" alt="library" />
            <Link to="/library">Library</Link>
          </li>
          <li>
            <StaticImage src="../images/history.png" alt="history" />
            <Link to="/history">History</Link>
          </li>
        </ul>
      </div>
      <div>
        <section className={styles.signInSect}>
          <p>Sign in to like videos, comment, and subscribe</p>
          <button className={styles.blueBtn}>
            <span role="img" aria-label="profile">👤</span>
            <p>SIGN IN</p>
          </button>
        </section>
      </div>
      <h4>BEST OF YOUTUBE</h4>
      <div>
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
      </div>
      <div>
        <ul>
          <li>
            <StaticImage src="../images/plus.png" alt="plus symbol" />
            <p>Browse Channels</p>
          </li>
        </ul>
      </div>
      <h4>MORE FROM YOUTUBE</h4>
      <div>
        <ul>
          <li>
            <StaticImage src="../images/yt-grey.png" alt="youtube grey symbol" />
            <p>YouTube Premium</p>
          </li>
          <li>
            <StaticImage src="../images/live.png" alt="live" />
            <p>Live</p>
          </li>
          <em></em>
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
            <p>!</p>
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
          <p>© 2021 Google LLC</p>
        </section>
      </div>
    </div>
  )
}

export default SideNav