import React from "react";
import "./Home.css";
import logo from "./../images/logo.png";
import location from "./../images/location.png";
import cart from "./../images/cart.png";
import cart_2 from "./../images/cart_2.png";
import cart_3 from "./../images/inject.png";
import cart_4 from "./../images/prescribe.png";
import cart_5 from "./../images/offers.jpg";
import capture from "./../images/Capture.PNG";
import capture_2 from "./../images/Capture2.PNG";
import inverted from "./../images/inverted.jpg";
import basis from "./../images/basis.png";
import banglalink from "./../images/banglalink.png";
import apex from "./../images/apex.png";
import beol from "./../images/beol.png";
import biop from "./../images/biop.png";
import bkash from "./../images/bkash.png";
import gpstar from "./../images/gpstar.png";
import impact from "./../images/impact.png";
import doctime from "./../images/doctime.png";
import yy from "./../images/yy.png";
import pulse from "./../images/pulse.png";
import confidence from "./../images/confidence.png";
import meetup from "./../images/meetup.jpeg";
import causes from "./../images/causes.png";
import homepic from "./../images/home_pic.jpg";
import homepicOne from "./../images/home_pic_1.jpg";
import homepicTwo from "./../images/home_pic_2.jpg";
import popular from "./../images/popular.png";
import ibn from "./../images/ibn.png";
import united from "./../images/united.png";
import dr from "./../images/drlal.jpg";
import thy from "./../images/thy.jpg";
import islami from "./../images/islami.png";
import oncos from "./../images/oncos.png";

const Home = () => {
  //   var index = 0;
  //   var i = 0;

  //   var slider = document.getElementsByClassName("business-partners-slider");
  // auto();
  //   function show(n){
  //     for ( i = 0 ; i<slider.length ; i++ ){
  //       slider[i].style.display = "none";
  //     }
  //     slider[n-1].style.display = ("block");
  //   }

  //   function auto(){
  //     index++;
  //     if(index > slider.length){
  //       index= i;
  //     }
  //      show(index);
  //      setTimeout(auto,5000);
  //   }

  return (
    <>
      <div className="flex upper_nav ">
        <h2 className="call_order">
          Call For Order: <span className="font-bold">09643445566</span>{" "}
        </h2>
        <div className="icons space-x-4 ">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram-square"></i>
        </div>
      </div>

      <div className="flex my-4 lower_nav">
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

      <div className="flex">
        <div>
          <div className="diag">
            <h1>Diagnostics</h1>
            <h1 className="door_step">At Your Doorstep</h1>
          </div>
          <div>
            <div>
              <p className="door_step2">
                Making Healthcare Easily Accessible to Everyone, Everywhere.
              </p>
            </div>
          </div>

          <div className="flex  space-x-4">
            <div className="flex space-x-0 ml-36 mt-3">
              <img className="w-4 h-4 ml-7 " src={cart_2}></img>
              <div>
                <h5>
                  {" "}
                  <span className="header"> Step 01:</span> Order tests
                </h5>
                <small className="book_test">Book tests & checkups</small>
              </div>
            </div>
            <div className="flex space-x-0  mt-3">
              <img className="w-4 h-4 " src={cart_3}></img>
              <div>
                <h5>
                  <span className="header">Step 02:</span> Provide Sample
                </h5>
                <small className="book_test2">From your doorstep</small>
              </div>
            </div>
          </div>
          <div className="flex space-x-0 ml-40 mt-3">
            <img className="w-4 h-4 " src={cart_4}></img>
            <div>
              <h5>
                <span className="header">Step 03:</span> Get Report
              </h5>
              <small className="book_test">Your report delivered</small>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="Order_test"> Order Test</button>
            <button className="Call_order"> Call to Order</button>
          </div>
        </div>

        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />

            <div className="slide first">
              <img src={homepic} />
            </div>
            <div className="slide">
              <img src={homepicOne} />
            </div>
            <div className="slide">
              <img src={homepicTwo} />
            </div>
            <div className="slide">
              <img src={homepic} />
            </div>

            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
          </div>
          <div className="navigation-manual">
            <label for="radio1" className="manual-btn"></label>
            <label for="radio2" className="manual-btn"></label>
            <label for="radio3" className="manual-btn"></label>
            <label for="radio4" className="manual-btn"></label>
          </div>
        </div>
      </div>

      <div className="container flex">
        <div className="justify-center service-container">
          <h5 className="counter">
            {" "}
            <span>4 Years +</span>
          </h5>
          <small>Services</small>
        </div>
        <div className="divide-line "></div>
        <div className=" tests">
          <h5 className="counter">
            {" "}
            <span> 52297 +</span>{" "}
          </h5>
          <small>Tests done</small>
        </div>
      </div>
      <div>
        <div className="lab-container">
          <h5 className="partners">Our Lab Partners</h5>
          <p className="yourtest">
            Your tests will be done from our partner labs where quality
            <br />
            is uncompromised.
          </p>
          <div className="flex justify-center  space-x-7 labs-sponsor">
            <div className="popular">
              <div>
                <img src={popular} />
              </div>
            </div>
            <div className="popular">
              <div>
                <img src={ibn} />
              </div>
            </div>
            <div className="popular2">
              <div>
                <img src={united} />
              </div>
            </div>
            <div className="popular3">
              <div>
                <img src={dr} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center  space-x-7 labs-sponsor2">
              <div className="popular">
                <div>
                  <img src={thy} />
                </div>
              </div>
              <div className="popular4">
                <div>
                  <img src={islami} />
                </div>
              </div>
              <div className="popular5">
                <div>
                  <img src={oncos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h5 className="partners">Why Book With Us?</h5>
        </div>
        <div className="">
          <div className="icon flex space-x-44 ">
            <div>
              <div className="inject">
                <img src={cart_3} />
              </div>

              <div>
                <h5 className="safe">
                  Safe Home Sample <br /> Collection
                </h5>
                <p className="sample">
                  A certified professional <br /> will collect your sample{" "}
                  <br /> from your location.
                </p>
              </div>
            </div>

            <div>
              <div className="inject">
                <img src={cart_4} />
              </div>

              <div>
                <h5 className="safe">
                  Get Digital Report Within <br /> A Day
                </h5>
                <p className="sample">
                  Our labs ensure turn- <br /> around-time of 24 hours <br />{" "}
                  from specimen pickup
                </p>
              </div>
            </div>
            <div>
              <div className="inject">
                <img src={cart_5} />
              </div>

              <div>
                <h5 className="safe">
                  Offers And Affordable <br /> Prices
                </h5>
                <p className="sample">
                  Get great discounts and <br /> offers on tests and <br />{" "}
                  packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-24 space-x-7">
        <div className="order-card">
          <div className="order-diag">
            <h5 className="text-2xl font-semibold ">
              Order Diagnostics Service <br />{" "}
              <span className="from">From Top Labs</span>
            </h5>
            <span className="order-diag">
              Order Diagnostic Tests from Preferred <br /> Labs
            </span>
          </div>

          <div>
            <button className="order_now  my-10">Order Now</button>
          </div>
        </div>
        <div className="order-card">
          <div className="order-diag2">
            <h5 className="text-2xl font-semibold ">
              Order Packages From Top <br /> <span className="from2">Labs</span>
            </h5>
            <span className="order-heavily">
              Order Heavily Discounted packages.
            </span>
          </div>

          <div>
            <button className="order_now2">Order Now</button>
          </div>
        </div>
      </div>

      <div className=" need-help">
        <div className="book">
          <div className="booking-test">
            <h4>Need help in booking a test?</h4>
          </div>
          <div className="enter-contact">
            <p>Enter your contact details below and our team will call you.</p>
          </div>
        </div>
        <div className="flex space-x-4 button-input">
          <div>
            <input
              className="input-number"
              type="number"
              placeholder="Your Mobile Number"
            />
          </div>
          <div className="submit">
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div>
        <div className="enjoy">
          <h5>Enjoy Special Offers</h5>
        </div>
        <div className="flex space-x-7 special-offer">
          <img src={capture} />
          <img src={capture_2} />
        </div>
      </div>

      <div className="achieve-container p-10">
        <div className="our-achieve">
          <h5>Our Achievements</h5>
        </div>

        <div>
          <div className="hmove">
            <div className="hslide">
              <img className="inverted" src={inverted} />
              <p>
                Thanks1 to AmarLab for their excellent service. I have eye
                problems that do not allow me to go out for a diagnostic test.
                The agent was very <br /> cooperative and polite to collect my
                sample. And, I did not feel pain at all.
              </p>
              <div className="clients">
                <p>Sumaya Samad</p>
                <p>30 Years</p>
              </div>
              <div>
                <input type="radio" name="gender" value="male" />
              </div>
            </div>
            <div className="hslide">
              <img className="inverted" src={inverted} />
              <p>
                Thanks2 to AmarLab for their excellent service. I have eye
                problems that do not allow me to go out for a diagnostic test.
                The agent was very <br /> cooperative and polite to collect my
                sample. And, I did not feel pain at all.
              </p>
              <div className="clients">
                <p>Sumaya Samad</p>
                <p>30 Years</p>
              </div>
            </div>
            <div className="hslide">
              <img className="inverted" src={inverted} />
              <p>
                Thanks 3to AmarLab for their excellent service. I have eye
                problems that do not allow me to go out for a diagnostic test.
                The agent was very <br /> cooperative and polite to collect my
                sample. And, I did not feel pain at all.
              </p>
              <div className="clients">
                <p>Sumaya Samad</p>
                <p>30 Years</p>
              </div>
            </div>
            <div className="hslide">
              <img className="inverted" src={inverted} />
              <p>
                Thanks4 to AmarLab for their excellent service. I have eye
                problems that do not allow me to go out for a diagnostic test.
                The agent was very <br /> cooperative and polite to collect my
                sample. And, I did not feel pain at all.
              </p>
              <div className="clients">
                <p>Sumaya Samad</p>
                <p>30 Years</p>
              </div>
            </div>
            <div className="hslide">
              <img className="inverted" src={inverted} />
              <p>
                Thanks5 to AmarLab for their excellent service. I have eye
                problems that do not allow me to go out for a diagnostic test.
                The agent was very <br /> cooperative and polite to collect my
                sample. And, I did not feel pain at all.
              </p>
              <div className="clients">
                <p>Sumaya Samad</p>
                <p>30 Years</p>
              </div>
            </div>
          </div>
        </div>

        <div className="font-bold text-3xl my-10">
          <h5>Trusted By Over 80+ Businesses</h5>
        </div>
        <div className="flex space-x-7 justify-center">
          <div className="business-section">
            <div className="business-partners-slider">
              <div>
                <img src={basis} />
              </div>
            </div>
            <div className="business-partners-slider">
              <div>
                <img src={yy} />
              </div>
            </div>
            <div className="business-partners-slider">
              <div>
                <img className="banglalink" src={banglalink} />
              </div>
            </div>
            <div className="business-partners-slider">
              <div>
                <img className="apex" src={apex} />
              </div>
            </div>
            <div className="business-partners-slider">
              <div>
                <img className="apex" src={beol} />
              </div>
            </div>
            <div className="business-partners-slider">
              <div>
                <img className="apex" src={biop} />
              </div>
            </div>
            <div className="business-partners-slider">
              <div>
                <img className="apex" src={bkash} />
              </div>
            </div>
            <div className="business-partners-slider">
              <div>
                <img className="apex" src={gpstar} />
              </div>
            </div>
            <div className="business-partners-slider">
              <div>
                <img className="apex" src={impact} />
              </div>
            </div>
            <div className="business-partners-slider">
              <div>
                <img className="apex" src={doctime} />
              </div>
            </div>
            <div className="business-partners-slider">
              <div>
                <img className="apex" src={pulse} />
              </div>
            </div>
            <div className="business-partners-slider">
              <div>
                <img className="apex" src={confidence} />
              </div>
            </div>
          </div>
          <div className="prev-btn" onClick="pulsSlide(-1)">
            &#10094;
          </div>
          <div className="next-btn" onClick="pulsSlide(-1)">
            &#10095;
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-3  justify-items-center">
        <div className="article-container  ">
          <h5>Read Top Articles</h5>

          <p className="article-p">
            Read our thoughts on healthcare, our <br />
            <span className="article-p2">
              news and updates from Amarlab family.
            </span>
          </p>

          <button className="see-btn">See All Articles</button>
        </div>
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img src={meetup} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Health Camp at i-Farmer
              </div>
              <p className="text-gray-600 mr-48">Tech</p>
            </div>
            <div className="grid grid-flow-col gap-5 pb-2 px-6">
              <p className="font-base mb-2 mr-16">
                <span className="font-semibold">Written By,</span>Amarlab Blog
              </p>
            </div>
          </div>
        </div>
        <div className="py-10 causes2">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img className="causes" src={causes} />
            <div className="px-6 py-2">
              <div className="font-bold text-xl ">
                <span className="ml-10"> What are the Causes and Risk</span>{" "}
                <br /> <span className="ml-4">Factors of Prostate Cancer</span>
              </div>
              <p className="text-gray-600 mr-48">Tech</p>
            </div>
            <div className="grid grid-flow-col gap-5 pb-1 px-6">
              <p className="font-base mb-1 mr-14">
                <span className="font-semibold">Written By,</span>Amarlab Blog{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="asked-container">
          <h5>Frequently Asked Questions</h5>
        </div>
      </div>
    </>
  );
};

export default Home;
