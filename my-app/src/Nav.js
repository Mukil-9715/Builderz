import React from 'react'
import "./App.css";
import plogo from "./png/main logo.png";

const Nav = () => {
  return (
    <div className="nav">
        <div className="nav_head">
          <div>
            <img src={plogo} alt="" width="40px"></img>
          </div>
          <div className="nav_app_title"> BUILDERZ. </div>
        </div>
        <div className="nav_button">
          <div className="nav_titles">Home</div>
          <div className="nav_titles">About</div>
          <div className="nav_titles">Project</div>
          <div className="nav_titles">Service</div>
          <div className="nav_titles">Contact</div>
        </div>
      </div>
  )
}

export default Nav