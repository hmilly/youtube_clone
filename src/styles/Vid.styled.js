import styled from "styled-components";

export const Genres = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  gap: 20px;
  margin: 15px 5%;
  border-bottom: 4px solid rgb(209, 209, 209);

  h1 {
    color: black;
    padding: 20px;
    width: 100%;
    font-size: 24px;
  }
  .videos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: auto;
    min-width: 300px;
    gap: 10px;
    align-content: flex-start;
    justify-content: flex-start;
  }
`;

export const VideoCard = styled.div`
  overflow: hidden;
  padding-bottom: 100%;
  position: relative;
  height: 100%;
  iframe {
    position: absolute;
    height: 70%;
    width: 100%;
  }
`;

export const VideoData = styled.section`
  position: absolute;
  top: 72%;
  height: auto;
  display: grid;
  grid-template-columns: 34px 1fr;
  grid-template-rows: 1fr;
  gap: 10px;

  .img {
    span {
      height: 34px;
      border: solid purple 1px;
      background: purple;
      font-size: 22px;
      border-radius: 50%;
    }
  }
  .details {
    display: grid;
    grid-template-rows: 1.5fr 1fr 1fr;
    gap: 2px;
    h2 {
      font-size: 120%;
    }
    div {
      display: grid;
      grid-template-columns: auto 15px 1fr;
      grid-template-rows: 1fr;
      align-items: center;
      justify-items: center;
      gap: 5px;
      p {
        white-space: nowrap;
        font-size: 100%;
        color: grey;
        justify-self: start;
      }
      span {
        width: 14px;
        height: 14px;
        font-size: 10px;
        border-radius: 50%;
        background-color: grey;
        color: white;
      }
    }
    &:last-child span {
      width: 3px;
      height: 3px;
      font-size: 1px;
      background-color: grey;
    }
  }
`;
