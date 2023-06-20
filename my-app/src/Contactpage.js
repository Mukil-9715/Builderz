import React from "react";
import Nav from "./Nav";
import contactpic from "./png/bg contact image.png";
import Footer from "./Footer";
import callpic from "./png/contact/call icon.png";
import locpic from "./png/contact/location icon.png";
import mailpic from "./png/contact/mail icon.png";

const Contactpage = () => {
  return (
    <div>
      <Nav />
      <div>
        <img className="pagepic" src={contactpic} alt="" width="100%" />
      </div>
      <div className="contact_main flex3">
        <div className=" flex0 contact_contacts">
          <div className="cap flex3">
            <div>
              <img src={locpic} alt="" width="80px" />
            </div>
            <div className="c0">Address</div>
            <div className="cp">
              23D, New city street,
              <br />
              new town, puducherry
            </div>
          </div>
          <div className="cap flex3">
            <div>
              <img src={mailpic} alt="" width="80px" />
            </div>
            <div className="c0"> Mail Us</div>
            <div className="cp">
              buliderz@gmail.com
              <br />
              thebuliderz@gmail.com
            </div>
          </div>
          <div className="cap flex3">
            <div>
              <img src={callpic} alt="" width="80px" />
            </div>
            <div className="c0">Call Now</div>
            <div className="cp">
              +91 84848 48484
              <br />
              +91 95959 59595
            </div>
          </div>
        </div>
        <div className="contact_title texth2">Have Any Question?</div>
        <div className="contact_container">
          <form>
            <div className="cap1">
                  <input className="tinput" type="text" placeholder="Name" />
                  <input className="tinput" type="text" placeholder="Name" />
                  <textarea className="tinput"></textarea>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contactpage;
