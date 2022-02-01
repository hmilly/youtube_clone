import React from "react";
import { Link } from "gatsby";
import { SideNav, Ul, Section, SignInSection } from "../styles/Nav.styled";
import ListItem from "./ListItem";
import { StaticImage } from "gatsby-plugin-image";

const NavSide = ({ lgNav }) => {
  return (
    <SideNav sm={!lgNav}>
      <>
        <Ul sm={!lgNav}>
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
        </Ul>
        <Ul sm={!lgNav}>
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
        </Ul>
      </>
      {lgNav && (
        <>
          <SignInSection>
            <p>Sign in to like videos, comment, and subscribe</p>
            <Link id="blueBtn" to="/signin">
              <span role="img" aria-label="profile">
                👤
              </span>
              <p>SIGN IN</p>
            </Link>
          </SignInSection>
          <h4>BEST OF YOUTUBE</h4>
          <Ul>
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
              img={
                <StaticImage src="../images/movie.png" alt="movies and shows" />
              }
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
          </Ul>
          <Ul>
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
          </Ul>
          <Ul>
            <ListItem
              img={
                <StaticImage src="../images/plus.png" alt="browse channels" />
              }
              name={"Browse Channels"}
            />
          </Ul>
          <h4>MORE FROM YOUTUBE</h4>
          <Ul>
            <ListItem
              img={
                <StaticImage
                  src="../images/yt-grey.png"
                  alt="youtube premium"
                />
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
              img={
                <StaticImage src="../images/flag.png" alt="report history" />
              }
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
          </Ul>
          <Section>
            <h5>About</h5>
            <h5>Press</h5>
            <h5>Copyright</h5>
            <h5>Contact us</h5>
            <h5>Creators</h5>
            <h5>Advertise</h5>
            <h5>Developers</h5>
          </Section>
          <Section>
            <h5>Terms</h5>
            <h5>Privacy</h5>
            <h5>Policy & Safety</h5>
            <h5>How YouTube works</h5>
            <h5>Test new features</h5>
          </Section>
          <Section>
            <p>© 2021 Google LLC</p>
          </Section>
        </>
      )}
    </SideNav>
  );
};

export default NavSide;
