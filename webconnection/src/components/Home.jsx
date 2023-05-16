import React from "react";
import { NavBar } from "./NavBar";
import { PageProducts } from "./PageProducts";

const Home = () => {
  return (
    <>
      <NavBar />
      <br />
      <div className="grid-container">
        <PageProducts />
      </div>
    </>
  );
};

export default Home;
