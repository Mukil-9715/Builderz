// import logo from "./logo.svg";
import "./App.css";
import plogo from "./png/main logo.png";
import home from "./png/bghome1.png";
import home1 from "./png/Screenshot 2023-03-25 151024.jpg";
import decoration from "./png/service/decoration.png";
import exterior_design from "./png/service/exterior design.png";
import furniture from "./png/service/furniture.png";
import interior from "./png/service/interior.png";
import planning from "./png/service/planning.png";
import professional_design from "./png/service/professional design.png";
// import BGI from "./png/contact abstract.png";
import contact from "./png/contact icon.png";
import telegram from "./png/telegram white .png";
import whatsapp from "./png/whatsapp white.png";
import fb from "./png/fb white.png";
import insta from "./png/instagram white.png";

function App() {
  return (
    <div className="master_container">
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
      <div className="section_1">
        <div className="left">
          <div className="texth1">
            We construct your <span className="outline">Dream</span>
          </div>
          <div className="tp">
            <a href=""> Discover Project</a>
          </div>
        </div>
        <div>
          <img className="section1_pic" src={home} alt=""></img>
        </div>
      </div>
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
      <div className="section_3 ">
        <div className="flex0 space">
          <span className="strip"></span>
          <div className="l">Our Works</div>
          <span className="strip"></span>
        </div>
        <div className="flex">
          <div className="serial_pic_child">
            <img
              className="serial_pic"
              src="https://images.pexels.com/photos/3255245/pexels-photo-3255245.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            ></img>
          </div>
          <div className="serial_pic_child">
            <img
              className="serial_pic"
              src="https://images.pexels.com/photos/12401710/pexels-photo-12401710.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            ></img>
          </div>
          <div className="serial_pic_child">
            <img
              className="serial_pic"
              src="https://images.pexels.com/photos/4255726/pexels-photo-4255726.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div className="section_4">
        <div className="flex0 space">
          <span className="strip"></span>
          <div className="l">OUR CAPABILITIES</div>
          <span className="strip"></span>
        </div>
        <div className="con">
          <div className="flex2">
            <div className="capabilities">
              <div>
                <img className="capabilities_pic" src={planning} alt=""></img>
              </div>
              <div className="c"> Perfect Planning</div>
              <div className="cp">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                explicabo aliquid alias numquam iure obcaecati atque! Ea
                recusandae ab iusto reiciendis temporibus, id blanditiis dolores
                sapiente non eum sint impedit.
              </div>
            </div>
            <div className="capabilities">
              <div>
                <img
                  className="capabilities_pic"
                  src={professional_design}
                  alt=""
                ></img>
              </div>
              <div className="c"> Professional Design</div>
              <div className="cp">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                explicabo aliquid alias numquam iure obcaecati atque! Ea
                recusandae ab iusto reiciendis temporibus, id blanditiis dolores
                sapiente non eum sint impedit.
              </div>
            </div>
            <div className="capabilities">
              <div>
                <img className="capabilities_pic" src={interior} alt=""></img>
              </div>
              <div className="c"> Best Interior</div>
              <div className="cp">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                explicabo aliquid alias numquam iure obcaecati atque! Ea
                recusandae ab iusto reiciendis temporibus, id blanditiis dolores
                sapiente non eum sint impedit.
              </div>
            </div>
          </div>
          <div className="flex2">
            <div className="capabilities">
              <div>
                <img className="capabilities_pic" src={furniture} alt=""></img>
              </div>
              <div className="c"> Furniture</div>
              <div className="cp">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                explicabo aliquid alias numquam iure obcaecati atque! Ea
                recusandae ab iusto reiciendis temporibus, id blanditiis dolores
                sapiente non eum sint impedit.
              </div>
            </div>
            <div className="capabilities">
              <div>
                <img className="capabilities_pic" src={decoration} alt=""></img>
              </div>
              <div className="c">Complete Decoration</div>
              <div className="cp">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                explicabo aliquid alias numquam iure obcaecati atque! Ea
                recusandae ab iusto reiciendis temporibus, id blanditiis dolores
                sapiente non eum sint impedit.
              </div>
            </div>
            <div className="capabilities">
              <div>
                <img
                  className="capabilities_pic"
                  src={exterior_design}
                  alt=""
                ></img>
              </div>
              <div className="c">Exterior Design </div>
              <div className="cp">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                explicabo aliquid alias numquam iure obcaecati atque! Ea
                recusandae ab iusto reiciendis temporibus, id blanditiis dolores
                sapiente non eum sint impedit.
              </div>
            </div>
          </div>
        </div>

        <div className="flex1 con top">
          <div className="flex3">
            <div className="th3">25</div>
            <div>Years Of Experience</div>
          </div>
          <div className="flex3">
            <div className="th3">40</div>
            <div>Expect specialist</div>
          </div>
          <div className="flex3">
            <div className="th3">320+</div>
            <div>Success Projects</div>
          </div>
          <div className="flex3">
            <div className="th3">250+</div>
            <div>Happy Customers</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="wd flex7">
          <div className="flex4">
            <div className="c1">BUILDERZ.</div>
            <div className="just c2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              explicabo aliquid alias numquam iure obcaecati atque! Ea
              recusandae ab iusto reiciendis temporibus, id blanditiis dolores
              sapiente non eum sint impedit.
            </div>
            <div className="flex tp">
              <div className="pad">
                <img width="30px" src={fb} alt=""></img>
              </div>
              <div className="pad">
                <img width="30px" src={whatsapp} alt=""></img>
              </div>
              <div className="pad">
                <img width="30px" src={insta} alt=""></img>
              </div>
              <div>
                <img width="30px" src={telegram} alt=""></img>
              </div>
            </div>
          </div>
          <div>
            <div className="c1">Our Service</div>
            <div>
              <ul className="c2 marleft">
                <li>Prefect planing</li>
                <li>Professional Design</li>
                <li>Best Interior</li>
                <li>Modern Furniture</li>
                <li>Complete Decoration</li>
                <li>Exterior Design</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="c1">Contact</div>
            <div className="flex5">
              <div>
                <img className="tm" src={contact} alt="" width="16px"></img>
              </div>
              <div className="c2 flex6">
                <div>
                  23D, New Street,<br></br>
                  New Town, Pondicherry
                </div>
                <div>+91 9878654531</div>
                <div>Builderz@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
