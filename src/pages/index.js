import React from "react";
import Layout from "../components/Layout";
import db from "../content/db";
import { GlobalStyles } from "../styles/Global";
import VideoCont from "../components/VideoCont";

const IndexPage = () => {
  return (
    <main className="index">
      <title>Youtube clone</title>
      <GlobalStyles />
      <Layout>
        <div className="videoContainer">
          {Object.values(db).map((d, i) => (
            <VideoCont genres={d} key={`genre_${i}`} />
          ))}
        </div>
      </Layout>
    </main>
  );
};

export default IndexPage;
