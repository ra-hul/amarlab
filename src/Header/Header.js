import React from "react";
import logo from "./../images/logo.png";
import location from "./../images/location.png";
import cart from "./../images/cart.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="fixed w-full">
        <div className="flex upper_nav  ">
          <h2 className="call_order">
            Call For Order: <span className="font-bold">09643445566</span>{" "}
          </h2>
          <div className="icons space-x-4 ">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram-square"></i>
          </div>
        </div>

        <div className="flex lower_nav">
          <img src={logo} className="nav_img"></img>

          <div className="flex ml-12 space-x-12">
            <h2>Diagnostic</h2>
            <h2>Packages</h2>
          </div>
          <div className="flex ml-96 space-x-4 ">
            <div>
              <div className="flex">
                <img src={location} className="location_img"></img>
                <h5 className="ur_location">Your Location</h5>
              </div>

              <div className="flex space-x-4">
                <p className="dhk_position">Dhaka</p>
                <li class="fas fa-angle-down drop-icon"></li>
              </div>
            </div>
            <button className="login">Login</button>
            <button className="signup">Signup</button>
            <img src={cart} className="cart"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
