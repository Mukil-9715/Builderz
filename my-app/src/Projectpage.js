import React from "react";
import "./App.css";
import Nav from "./Nav";
import projectpic from "./png/bg project image.png";
import Footer from "./Footer";
import img1 from './png/product image/arc 1.png'
import img2 from './png/product image/arc2.png'
import img3 from './png/product image/arc3.png'
import img4 from './png/product image/arc4.png'
import img5 from './png/product image/arc5.png'
import img6 from './png/product image/interior1.png'
import img7 from './png/product image/interior2.png'
import img8 from './png/product image/interior3.png'
import img9 from './png/product image/interior4.png'

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

          <div className="work_child"><img className="work_img" src={img2}alt="" width="400px"/></div>
          <div className="work_child"><img className="work_img" src={img6}alt="" width="400px"/></div>
          <div className="work_child"><img className="work_img" src={img3}alt="" width="400px"/></div>
          <div className="work_child"><img className="work_img" src={img7}alt="" width="400px"/></div>
          <div className="work_child"><img className="work_img" src={img4}alt="" width="400px"/></div>
          <div className="work_child"><img className="work_img" src={img8}alt="" width="400px"/></div>
          <div className="work_child"><img className="work_img" src={img1}alt="" width="400px"/></div>
          <div className="work_child"><img className="work_img" src={img9}alt="" width="400px"/></div>
          <div className="work_child"><img className="work_img" src={img5}alt="" width="400px"/></div>

          <div></div>



        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projectpage;
