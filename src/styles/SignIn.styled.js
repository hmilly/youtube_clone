import styled from "styled-components";

export const SignIn = styled.body`
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr 450px 1fr;
    grid-template-rows: 200px 210px 320px 50px 1fr;
    gap: 0px 0px;
    grid-template-areas:
      ". . ."
      ". main ."
      ". main ."
      ". footer ."
      ". . .";
    main {
      display: grid;
      grid-template-columns: 1fr;
      border: 1px solid rgba(196, 195, 195, 0.659);
      grid-template-rows: 170px 320px;
      gap: 0px 0px;
      grid-template-areas:
        "header"
        "form";
      grid-area: main;
      justify-items: center;
      border-radius: 8px;
    }
    footer {
      display: grid;
      grid-template-columns: 3fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 0px 0px;
      grid-area: footer;
      align-items: center;
      font-size: 14px;
      color: rgb(90, 88, 88);
      p:hover {
        cursor: pointer;
      }
    }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 65px 50px 30px;
  gap: 0px 0px;
  grid-area: header;
  justify-items: center;
  div {
    display: grid;
    grid-template-columns: 18px repeat(3, 14px) 4px 15px;
    grid-template-rows: 1fr;
    align-items: end;
    justify-items: center;
    p {
      padding: 0;
      font-weight: bold;
      font-size: 24px;
      &:nth-child(1),
      &:nth-child(4) {
        color: rgb(66, 133, 244);
      }
      &:nth-child(2),
      &:nth-child(6) {
        color: rgb(234, 67, 53);
      }
      &:nth-child(3) {
        color: rgb(251, 188, 5);
      }
      &:nth-child(5) {
        color: rgb(52, 168, 83);
      }
    }
  }
  h2,
  h4 {
    font-weight: 500;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 360px;
  grid-template-rows: 100px 100px 100px;
  grid-area: form;
  align-items: center;

  div {
    button {
      background-color: white;
      border: none;
      color: #1a73e8;
      font-weight: 600;
      justify-self: start;
      padding: 8px 2px;
    }
    &:nth-child(1) {
      display: grid;
      grid-template-rows: 54px 1fr;
      grid-template-columns: 1fr;
      input {
        border-radius: 5px;
        border: 1px solid rgba(213, 213, 213, 0.659);
        padding: 0 15px;
        font-size: 16px;
      }
    }

    &:nth-child(2) p {
      font-size: 14px;
      color: grey;
    }
    &:nth-child(3) {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr;
      button {
        &:first-child {
          &:hover {
            background-color: rgba(230, 239, 247, 0.659);
          }
        }
        &:last-child {
          background-color: #1a73e8;
          color: white;
          padding: 12px 25px;
          border-radius: 5px;
          justify-self: end;
          &:hover {
            background-color: #0b62d5;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
