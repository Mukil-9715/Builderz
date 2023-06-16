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
        <img className="pagepic" src={projectpic} alt="" width="100%" />
      </div>
      <div className="work_main">
        <div className="flex0 space">
          <span className="strip"></span>
          <div className="l">Our Works</div>
          <span className="strip"></span>

        </div>
        <div className="work_container">

          <div className="work_child">1child</div>
          <div className="work_child">2child</div>
          <div className="work_child">3child</div>
          <div className="work_child">4child</div>
          <div className="work_child">5child</div>
          <div className="work_child">6child</div>
          <div className="work_child">7child</div>
          <div className="work_child">8child</div>
          <div className="work_child">9child</div>

          <div></div>



        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projectpage;
