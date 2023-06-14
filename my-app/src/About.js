import React from 'react'
import "./App.css";
import home1 from "./png/Screenshot 2023-03-25 151024.jpg";

const About = () => {
  return (
    <div className="section_2">
        <div className="section_2_left">
          <img className="section2_pic" src={home1} alt=""></img>
        </div>
        <div className="section_2_right">
          <div className="flex">
            <span className="strip"></span>
            <div className="l">About Us</div>
          </div>
          <div className="texth2">
            We Offer You Professional Interior Design
          </div>
          <div className="wrap">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            explicabo aliquid alias numquam iure obcaecati atque! Ea recusandae
            ab iusto reiciendis temporibus, id blanditiis dolores sapiente non
            eum sint impedit.
          </div>
          <div className="tp">
            <a href=""> Discover Project</a>
          </div>
        </div>
      </div>
  )
}

export default About