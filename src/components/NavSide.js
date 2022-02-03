import React from "react";
import { Link } from "gatsby";
import { SideNav, Ul, Section, SignInSection } from "../styles/Nav.styled";
import NavItem from "./NavItem";

const NavSide = ({ lgNav }) => {
  return (
    <SideNav sm={!lgNav}>
      <>
        <Ul sm={!lgNav}>
          <NavItem tag="/" img="yt-grey.png" name="Home" />
          <NavItem tag="/explore" img="compass.png" name="Explore" />
          <NavItem
            tag="/subscriptions"
            img="subscriptions.png"
            name="Subscriptions"
          />
        </Ul>
        <Ul sm={!lgNav}>
          <NavItem tag="/library" img="lib.png" name="Library" />
          <NavItem tag="/history" img="history.png" name="History" />
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
            <NavItem img="music.png" name="Music" />
            <NavItem img="sport.png" name="Sports" />
            <NavItem img="game.png" name="Gaming" />
            <NavItem img="movie.png" name="Movie & Shows" />
            <NavItem img="news.png" name="News" />
            <NavItem img="live.png" name="Live" />
            <NavItem img="fash.png" name="Fashion & Beauty" />
            <NavItem img="learn.png" name="Learning" />
            <NavItem img="yt-red.png" name="Spotlight" />
            <NavItem img="vr.png" name="360 Video" />
          </Ul>
          <Ul>
            <NavItem img="plus.png" name="Browse Channels" />
          </Ul>
          <h4>MORE FROM YOUTUBE</h4>
          <Ul>
            <NavItem img="yt-grey.png" name="YouTube Premium" />
            <NavItem img="live-grey.png" name="Live" />
          </Ul>
          <Ul>
            <NavItem img="setting.png" name="Settings" />
            <NavItem img="flag.png" name="Report History" />
            <NavItem img="help.png" name="Help" />
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
