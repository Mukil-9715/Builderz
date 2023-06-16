import React from 'react'
import "./App.css";
import { Link } from "react-router-dom";
import home from "./png/bghome1.png";



import Nav from './Nav'
import About from './About'
import Project from './Project'
import Service from './Service'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="master_container">

      <Nav />

      <div className="section_1">
        <div className="left">
          <div className="texth1">
            We construct <br></br> your <span className="outline">Dream</span>
          </div>
          <div className="tp">
            <div><Link className='a' to="/Project">Discover Project</Link></div>

          </div>
        </div>
        <div>
          <img className="section1_pic" src={home} alt=""></img>
        </div>
      </div>


      <About />
      <Project />
      <Service />
      <Footer />
    </div>
  )
}

export default Home