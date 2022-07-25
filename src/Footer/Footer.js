import React from "react";
import "./Footer.css";
import logo from "./../images/footerlogo.png";
import ssl from "./../images/ssl.png";

const Footer = () => {
  return (
    <>
      <div className=" w-full footer-container">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="img-footer">
              <img src={logo} />
              <div className="footer-para">
                <p>
                  <small>AMARLAB</small> <br />
                  <span className="making">Making Healthcare Easily</span>{" "}
                  <br />
                  <span className="access">
                    Accessible to Everyone, Everywhere.
                  </span>
                </p>
              </div>
            </div>
            <div className="info">
              Email: info@amarlab.com <br />
              <span className="phone"> Phone: 09643445566</span> <br />
              <span className="office">
                Office: Level # 6, House # 35, Road # 07,
              </span>
              <br />
              <span className="block">Block # G, Banani, Dhaka - 1213</span>
            </div>
            {/* Font awsome */}
            <div className="space-x-7 footer-icons">
              <i class="fab fa-facebook-f facebook"></i>
              <i class="fab fa-linkedin-in linkedin"></i>
              <i class="fab fa-instagram instagram"></i>
            </div>
          </div>

          <div>
            <h2>AmarLab</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
