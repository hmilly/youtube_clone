import React from "react";
import { Link } from "gatsby";
import { SideNav, Ul, Section, SignInSection } from "../styles/Nav.styled";
import NavItem from "./NavItem";
import { StaticImage } from "gatsby-plugin-image";

const NavSide = ({ lgNav }) => {
  return (
    <SideNav sm={!lgNav}>
      <>
        <Ul sm={!lgNav}>
          <NavItem
            tag={"/"}
            img={<StaticImage src="../images/yt-grey.png" alt="Home" />}
            name={"Home"}
          />
          <NavItem
            tag={"/explore"}
            img={<StaticImage src="../images/compass.png" alt="explore" />}
            name={"Explore"}
          />
          <NavItem
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
          <NavItem
            tag={"/library"}
            img={<StaticImage src="../images/lib.png" alt="library" />}
            name={"Library"}
          />
          <NavItem
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
            <NavItem
              img={<StaticImage src="../images/music.png" alt="music" />}
              name={"Music"}
            />
            <NavItem
              img={<StaticImage src="../images/sport.png" alt="sport" />}
              name={"Sports"}
            />
            <NavItem
              img={<StaticImage src="../images/game.png" alt="gaming" />}
              name={"Gaming"}
            />
            <NavItem
              img={
                <StaticImage src="../images/movie.png" alt="movies and shows" />
              }
              name={"Movie & Shows"}
            />
            <NavItem
              img={<StaticImage src="../images/news.png" alt="news" />}
              name={"News"}
            />
            <NavItem
              img={<StaticImage src="../images/live.png" alt="live" />}
              name={"Live"}
            />
          </Ul>
          <Ul>
            <NavItem
              img={<StaticImage src="../images/fash.png" alt="fashion" />}
              name={"Fashion"}
            />
            <NavItem
              img={<StaticImage src="../images/learn.png" alt="learning" />}
              name={"Learning"}
            />
            <NavItem
              img={<StaticImage src="../images/yt-red.png" alt="spotlight" />}
              name={"Spotlight"}
            />
            <NavItem
              img={<StaticImage src="../images/vr.png" alt="vr 360 video" />}
              name={"360 Video"}
            />
          </Ul>
          <Ul>
            <NavItem
              img={
                <StaticImage src="../images/plus.png" alt="browse channels" />
              }
              name={"Browse Channels"}
            />
          </Ul>
          <h4>MORE FROM YOUTUBE</h4>
          <Ul>
            <NavItem
              img={
                <StaticImage
                  src="../images/yt-grey.png"
                  alt="youtube premium"
                />
              }
              name={"YouTube Premium"}
            />
            <NavItem
              img={<StaticImage src="../images/live.png" alt="live" />}
              name={"Live"}
            />
            <NavItem
              img={<StaticImage src="../images/setting.png" alt="settings" />}
              name={"Settings"}
            />
            <NavItem
              img={
                <StaticImage src="../images/flag.png" alt="report history" />
              }
              name={"Report History"}
            />
            <NavItem
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
