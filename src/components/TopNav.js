import React from 'react'
import { Link } from "gatsby"
import * as styles from '../styles/nav.module.css'
import { StaticImage } from "gatsby-plugin-image"

const TopNav = ({ changeNav }) => {
  return (
    <div className={styles.topNav}>
      <div className={styles.topNavLeft}>
        <button>
          <span role="img" aria-label="dropdown" onClick={() => changeNav()}>☰</span>
        </button>
        <Link to="/">
          <StaticImage src="../images/yt.png" alt="Youtube logo" />
        </Link>
      </div>
      <form className={styles.topNavMid}>
        <input placeholder="Search"></input>
        <button>
          <span role="img" aria-label="dropdown">🔍</span>
        </button>
        <button>
          <span role="img" aria-label="dropdown">🎤</span>
        </button>
      </form>
      <div className={styles.topNavRight}>
        <button>
          <span role="img" aria-label="grid">▦</span>
        </button>
        <button>
          <span role="img" aria-label="3 dots">⋮</span>
        </button>
        <Link id="blueBtn" to="/signin">
          <span role="img" aria-label="profile">👤</span>
          <p>SIGN IN</p>
        </Link>
      </div>
    </div>
  )
}

export default TopNav