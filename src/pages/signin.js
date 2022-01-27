import React from "react";
import { SignIn, Header, Form } from "../styles/SignIn.styled";

const signin = () => {
  return (
    <SignIn>
      <main>
        <Header>
          <div>
            <p>G</p>
            <p>o</p>
            <p>o</p>
            <p>g</p>
            <p>l</p>
            <p>e</p>
          </div>
          <h2>Sign in</h2>
          <h4>to continue to YouTube</h4>
        </Header>
        <Form>
          <div>
            <input placeholder="Email or phone"></input>
            <button>Forgot email?</button>
          </div>
          <div>
            <p>Not your computer? Use Guest mode to sign in privately.</p>
            <button>Learn more</button>
          </div>
          <div>
            <button>Create account</button>
            <button>Next</button>
          </div>
        </Form>
      </main>
      <footer>
        <p>English (United States)</p>
        <p>Help</p>
        <p>Privacy</p>
        <p>Terms</p>
      </footer>
    </SignIn>
  );
};

export default signin;
