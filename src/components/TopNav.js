import React from 'react'
import { Link } from "gatsby"
import * as styles from '../styles/nav.module.css'

const TopNav = ({ changeNav }) => {
  return (
    <div className={styles.topNav}>
      <div className={styles.topNavLeft}>
        <button>
          <span role="img" aria-label="dropdown" onClick={() => changeNav()}>☰</span>
        </button>
        <Link to="/">
          <span role="img" aria-label="play button">▶</span>
          <p>YouTube</p>
        </Link>
      </div>
      <div className={styles.topNavMid}>
        <form>
          <input placeholder="Search"></input>
          <div>
            <button>
              <span role="img" aria-label="dropdown">🔍</span>
            </button>
            <button>
              <span role="img" aria-label="dropdown">🎤</span>
            </button>
          </div>
        </form>
      </div>
      <div className={styles.topNavRight}>
        <button className={styles.btn1}>
          <span role="img" aria-label="grid">▦</span>
        </button>
        <button className={styles.btn2}>
          <span role="img" aria-label="3 dots">⋮</span>
        </button>
        <Link className={styles.blueBtn} to="/signin">
          <span role="img" aria-label="profile">👤</span>
          <p>SIGN IN</p>
        </Link>
      </div>
    </div>
  )
}

export default TopNav