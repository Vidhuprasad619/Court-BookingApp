import React from "react";
import Header from "../components/Navbar";
import Cards from "../components/Cards";
import "../components/css/padding-top.css";

function Home() {
  return (
    <div>
      <div className="padding-top">
        <Header />
      </div>

      <div className="container-fluid">
        <div className="row d-flex justify-content-center gap-4 pt-4">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>

      {/* footer */}
    </div>
  );
}

export default Home;
