import styled from "styled-components";

export const TopNav = styled.div`
  grid-area: topNav;
  display: grid;
  grid-template-columns: 225px minmax(100px, 740px) 210px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  gap: 10px;
  .left {
    display: grid;
    grid-template-columns: 60px auto;
    align-items: center;
    justify-items: center;
    button {
      width: 100%;
      background-color: white;
      border: none;
    }
    a,
    div {
      padding: 0;
      width: 120px;
      height: 30px;
    }
  }
  .mid {
    display: grid;
    grid-template-columns: minmax(60px, 720px) 64px 40px;
    grid-template-rows: 50px;
    padding: 0 3=40px;
    justify-content: center;

    input {
      padding: 1% 2%;
      font-size: 16px;
      color: rgba(223, 222, 222, 0.871);
      border: solid 1px rgba(223, 222, 222, 0.871);
    }
    button {
      width: 100%;
      justify-self: start;
      background-color: #f8f8f8;
      border: solid 1px rgba(223, 222, 222, 0.871);
      &:last-child {
        border: none;
        background-color: white;
      }
    }
    span {
      font-size: 20px;
      height: auto;
    }
  }

  .right {
    display: grid;
    grid-template-columns: 40px 40px 130px;
    grid-template-rows: 50px;
    align-items: center;
    justify-content: end;
    button {
      border: none;
      background-color: white;
    }
  }
`;

export const SideNav = styled.div`
  grid-area: sideNav;
  width: 255px;
  height: 100%;
  padding-right: 10px;
  overflow: hidden;

  &:hover {
    overflow: scroll;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 0;
    padding: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(182, 182, 182);
    border-radius: 10px;
  }
  h4 {
        width: 210px;
        font-size: 14px;
        padding: 22px 20px 0;
        color: rgb(114, 113, 113);
      }
`;

export const Ul = styled.ul`
    padding: 10px 0;
    list-style-type: none;
    border-bottom: 1px solid rgba(213, 213, 213, 0.618);
    li,
    a {
      display: grid;
      grid-template-columns: 50px 150px;
      grid-template-rows: 44px;
      align-items: center;
      justify-items: start;
      font-size: 17px;
      padding: 0 20px;
      &:hover {
        background-color: rgb(240, 239, 239);
        cursor: pointer;
      }
      &active {
        text-decoration: none;
      }
      /* imgs */
      div {
        width: 24px;
        height: 30px;
      }
      h2 {
        background-color: white;
      }
      p {
        justify-self: left;
        color: black;
        text-decoration: none !important;
      }
    }

`;

export const Section = styled.section`
    width: auto;
    padding: 12px;
    h5 {
      display: inline-block;
      position: relative;
      margin: 3px;
      padding: 0;
      font-size: 14px;
      color: #606060;
      &:hover {
        cursor: pointer;
      }
    }
    p {
      font-size: 14px;
      font-weight: 500;
      color: rgb(148, 148, 148);
    }
    &:last-child {
      padding: 15px;
    }
  `;

export const SignInSection = styled.section`
    display: grid;
    align-content: space-evenly;
    justify-items: start;
    height: 133px;
    padding: 10px 10px 10px 30px;
    border-bottom: 1px solid rgba(213, 213, 213, 0.618);
    p {
      font-size: 16px;
      color: black;
    }
    a {
      padding: 0;
  }
  `;


  /* .smNav {
  grid-area: sideNav;
  max-width: 80px;
}
.smNav ul {
  display: grid;
  list-style-type: none;
  padding: 0;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  align-content: center;
  justify-content: center;
}
.smNav a {
  display: grid;
  grid-template-columns: 80px;
  grid-template-rows: repeat(2, 36px);
  justify-items: center;
  text-decoration: none;
}
.smNav div {
  align-self: end;
  width: 24px;
  height: 24px;
}
.smNav p {
  align-self: start;
  color: grey;
  font-size: 12px;
} */