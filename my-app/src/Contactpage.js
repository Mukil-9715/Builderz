import React from "react";
import Nav from "./Nav";
import contactpic from "./png/bg contact image.png";
import Footer from "./Footer";

const Contactpage = () => {
  return (
    <div>
      <Nav />
      <div>
        <img src={contactpic} alt="" width="100%" />
      </div>

      <Footer />
    </div>
  );
};

export default Contactpage;
