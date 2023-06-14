import React from "react";
import "./App.css";
import Nav from "./Nav";
import projectpic from "./png/bg project image.png";
import Footer from "./Footer";

const Projectpage = () => {
  return (
    <div>
      <Nav />
      <div>
        <img src={projectpic} alt="" width="100%" />
      </div>

      <Footer />
    </div>
  );
};

export default Projectpage;
