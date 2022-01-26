import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/nav.module.css";
import ListItem from "./ListItem";
import { StaticImage } from "gatsby-plugin-image";

const SideNav = ({ lgNav }) => {
  console.log(lgNav);

  return (
    <div className={styles.sideNav}>
      <ul>
        <ListItem
          tag={"/"}
          img={<StaticImage src="../images/yt-grey.png" alt="Home" />}
          name={"Home"}
        />
        <ListItem
          tag={"/explore"}
          img={<StaticImage src="../images/compass.png" alt="explore" />}
          name={"Explore"}
        />
        <ListItem
          tag={"/subscriptions"}
          img={
            <StaticImage
              src="../images/subscriptions.png"
              alt="Subscriptions"
            />
          }
          name={"Subscriptions"}
        />
      </ul>
      <ul>
        <ListItem
          tag={"/library"}
          img={<StaticImage src="../images/lib.png" alt="library" />}
          name={"Library"}
        />
        <ListItem
          tag={"/history"}
          img={<StaticImage src="../images/history.png" alt="history" />}
          name={"History"}
        />
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
        <ListItem
          img={<StaticImage src="../images/music.png" alt="music" />}
          name={"Music"}
        />
        <ListItem
          img={<StaticImage src="../images/sport.png" alt="sport" />}
          name={"Sports"}
        />
        <ListItem
          img={<StaticImage src="../images/game.png" alt="gaming" />}
          name={"Gaming"}
        />
        <ListItem
          img={<StaticImage src="../images/movie.png" alt="movies and shows" />}
          name={"Movie & Shows"}
        />
        <ListItem
          img={<StaticImage src="../images/news.png" alt="news" />}
          name={"News"}
        />
        <ListItem
          img={<StaticImage src="../images/live.png" alt="live" />}
          name={"Live"}
        />
      </ul>
      <ul>
        <ListItem
          img={<StaticImage src="../images/fash.png" alt="fashion" />}
          name={"Fashion"}
        />
        <ListItem
          img={<StaticImage src="../images/learn.png" alt="learning" />}
          name={"Learning"}
        />
        <ListItem
          img={<StaticImage src="../images/yt-red.png" alt="spotlight" />}
          name={"Spotlight"}
        />
        <ListItem
          img={<StaticImage src="../images/vr.png" alt="vr 360 video" />}
          name={"360 Video"}
        />
      </ul>
      <ul>
        <ListItem
          img={<StaticImage src="../images/plus.png" alt="browse channels" />}
          name={"Browse Channels"}
        />
      </ul>
      <h4>MORE FROM YOUTUBE</h4>
      <ul>
        <ListItem
          img={
            <StaticImage src="../images/yt-grey.png" alt="youtube premium" />
          }
          name={"YouTube Premium"}
        />
        <ListItem
          img={<StaticImage src="../images/live.png" alt="live" />}
          name={"Live"}
        />
        <ListItem
          img={<StaticImage src="../images/setting.png" alt="settings" />}
          name={"Settings"}
        />
        <ListItem
          img={<StaticImage src="../images/flag.png" alt="report history" />}
          name={"Report History"}
        />
        <ListItem
          img={<StaticImage src="../images/help.png" alt="help" />}
          name={"Help"}
        />
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
