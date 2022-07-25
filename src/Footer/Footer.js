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

          <div className="mt-36">
            <h2 className="font-semibold text-lg">AmarLab</h2>
            <ul>
              <li className="about mr-6">About</li> <br />
              <li className="blog mr-8">Blog</li> <br />
              <li className="press mr-8">Press</li> <br />
              <li className="FAQ mr-16">FAQs</li> <br />
              <li className="terms ml-10">Terms Of Service</li> <br />
              <li className="payment ml-9">Payment Terms</li> <br />
              <li className="DOC ml-9">Company DOC</li>
            </ul>
            <img className="ssl-img" src={ssl} />
          </div>
          <div className="mt-36">
            <h2 className="font-semibold text-lg">Services</h2>
            <ul>
              <li className="ml-3">Diagnostic</li> <br />
              <li className="ml-12">Health Packages</li>
            </ul>
          </div>
          <div className="mt-36 ">
            <h2 className="font-semibold text-lg">For Patients</h2>
            <ul>
              <li className="ml-6">Create Account</li> <br />
              <li className="login-footer">Login</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="second-footer">
        <h2 className="footer-reserved">
          AmarLab Ltd. © 2022.{" "}
          <span className="font-semibold">Privacy & Terms</span>
        </h2>
      </div>
    </>
  );
};

export default Footer;
