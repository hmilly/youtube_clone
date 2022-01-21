import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/nav.module.css";
import ListItem from "./ListItem";
import LinkItem from "./LinkItem";

const SideNav = () => {
  return (
    <div className={styles.sideNav}>
      <ul>
        <LinkItem tag={"/"} imgName={"compass"} name={"Home"} />
        <LinkItem tag={"/explore"} imgName={"compass"} name={"Explore"} />
        <LinkItem
          tag={"/subscriptions"}
          imgName={"compass"}
          name={"Subscriptions"}
        />
      </ul>
      <ul>
        <LinkItem tag={"/library"} imgName={"lib"} name={"Library"} />
        <LinkItem tag={"/history"} imgName={"history"} name={"History"} />
      </ul>
      <section className={styles.signInSect}>
        <p>Sign in to like videos, comment, and subscribe</p>
        <Link id="blueBtn" to="/signin">
          <span role="img" aria-label="profile">
            👤
          </span>
          <p>SIGN IN</p>
        </Link>
      </section>
      <h4>BEST OF YOUTUBE</h4>
      <ul>
        <ListItem imgName={"music"} name={"Music"} />
        <ListItem imgName={"sport"} name={"Sports"} />
        <ListItem imgName={"game"} name={"Gaming"} />
        <ListItem imgName={"movie"} name={"Movie & Shows"} />
        <ListItem imgName={"news"} name={"News"} />
        <ListItem imgName={"live"} name={"Live"} />
      </ul>
      <ul>
        <ListItem imgName={"fash"} name={"Fashion"} />
        <ListItem imgName={"learn"} name={"Learning"} />
        <ListItem imgName={"yt-red"} name={"Spotlight"} />
        <ListItem imgName={"vr"} name={"360 Video"} />
      </ul>
      <ul>
        <ListItem imgName={"plus"} name={"Browse Channels"} />
      </ul>
      <h4>MORE FROM YOUTUBE</h4>
      <ul>
        <ListItem imgName={"yt-grey"} name={"YouTube Premium"} />
        <ListItem imgName={"live"} name={"Live"} />
        <ListItem imgName={"setting"} name={"Settings"} />
        <ListItem imgName={"flag"} name={"Report History"} />
        <ListItem imgName={"help"} name={"Help"} />
        <li>
          <h2>!</h2>
          <p>Send Feedback</p>
        </li>
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
  );
};

export default SideNav;
