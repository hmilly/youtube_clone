import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
//import db from "../content/db.json";
import { GlobalStyles } from "../styles/Global";
import VideoGenres from "../components/VideoGenres";

const IndexPage = () => {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch("https://my-json-server.typicode.com/hmilly/filmDb/films", {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json;odata.metadata=full",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => setFilmData(res))
        .catch((error) => console.log(error));
    };
    getData();
  }, []);

  return (
    <Layout>
      <GlobalStyles />
      <div className="videoContainer">
        <VideoGenres filmData={filmData} />
      </div>
    </Layout>
  );
};

export default IndexPage;
