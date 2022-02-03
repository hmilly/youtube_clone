import React from "react";
import { Link } from "gatsby";
import { Header } from "../styles/Nav.styled";

const PgHead = ({ setLgnav, lgNav }) => {
  return (
    <Header>
      <div className="left">
        <button onClick={() => setLgnav(!lgNav)}>
          <span role="img" aria-label="dropdown">
            ☰
          </span>
        </button>
        <Link to="/">
          <img src={"/yt.png"} alt="Youtube logo" />
        </Link>
      </div>
      <form className="mid">
        <input placeholder="Search"></input>
        <button>
          <span role="img" aria-label="dropdown">
            🔍
          </span>
        </button>
        <button>
          <span role="img" aria-label="dropdown">
            🎤
          </span>
        </button>
      </form>
      <div className="right">
        <button>
          <span role="img" aria-label="grid">
            ▦
          </span>
        </button>
        <button>
          <span role="img" aria-label="3 dots">
            ⋮
          </span>
        </button>
        <Link id="blueBtn" to="/signin">
          <span role="img" aria-label="profile">
            👤
          </span>
          <p>SIGN IN</p>
        </Link>
      </div>
    </Header>
  );
};

export default PgHead;
