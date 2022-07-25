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
import dailystar from "./../images/dailystar.jpg";
import financial from "./../images/financial.png";
import dhakatri from "./../images/dhakatri.jpg";
import future from "./../images/future.png";
import newage from "./../images/newage.png";
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
import Footer from "../Footer/Footer";

const Home = () => {
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
              Order Diagnostics Service <br />
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
                Thanks to AmarLab for their excellent service. I have eye
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
                Very professional service from AmarLab. The representative was
                really helpful to listen to our health problems and suggested us
                accordingly. I <br /> recommend them to everyone to try their
                service.
              </p>
              <div className="clients">
                <p>Rehana Habib</p>
                <p>52 Years</p>
              </div>
            </div>
            <div className="hslide">
              <img className="inverted" src={inverted} />
              <p>
                It was a great experience to receive the service of AmarLab. My
                healthcare need was rightly fulfilled by the Agent. I am very
                much impressed with <br /> AmarLab. Thank you AmarLab’s whole
                team for their amazing service.
              </p>
              <div className="clients">
                <p>M. Ahmed</p>
                <p>67 Years</p>
              </div>
            </div>
            <div className="hslide">
              <img className="inverted" src={inverted} />
              <p>
                AmarLab has taken a wonderful initiative to help the old sick
                patients at home. Their service is on a good track now. I wish
                them good luck so that <br /> they can go forward with this
                benevolent service for the people.
              </p>
              <div className="clients">
                <p>Md. Jasim</p>
                <p>40 Years</p>
              </div>
            </div>
            <div className="hslide">
              <img className="inverted" src={inverted} />
              <p>
                Very much satisfied with the service of AmarLab. The agents
                reached my home on time. They were taking proper safety
                precautions before taking <br /> my sample. So I was fully
                relieved to avail their service. Great service indeed!
              </p>
              <div className="clients">
                <p>Arif Mahmud</p>
                <p>32 Years</p>
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
            <div className="business-partnes-slider">
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
        <div className="FAQ">
          <div className="relative faq-w overflow-hidden border-2 rounded-md my-4 p-7">
            <input
              type="checkbox"
              className="peer absolute inset-x-0
           w-full h-12
           opacity-0 z-10 cursor-pointer"
            />
            <div
              className=" h-12 w-full
          pl-5 flex items-center"
            >
              <h2 className="text-lg font-semibold">What is Amarlab?</h2>
            </div>
            {/* Plus icon */}

            <div
              className=" absolute 
          transition-transform duration-500 
          peer-checked:rotate-180 
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {/* Content */}
            <div
              className="content overflow-hidden
            transition-all duration-500
            max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p>
                  Amarlab is an at-home-at-work pathology test service that
                  provides diagnostic services at home for your own comfort. We
                  go to <br /> your house, collect sample, transport them to the
                  lab of your choice for testing and then deliver the report at
                  your doorsteps. <br />
                  <br />
                  Amarlab service is beneficial to the patients who face
                  difficulty in travelling to receive healthcare facilities for
                  various reasons <br /> including inaccessible transport,
                  disability, old age or busy schedules. With the first of its
                  kind initiative in Dhaka, people do not <br /> need to travel
                  to and wait at diagnostic centers for medical tests. Enjoy
                  diagnostic services from the comfort of your own home <br />{" "}
                  with Amarlab!
                </p>
              </div>
            </div>
          </div>
          <div className="relative faq-w overflow-hidden border-2 rounded-md my-4 p-7">
            <input
              type="checkbox"
              className="peer absolute inset-x-0
           w-full h-12
           opacity-0 z-10 cursor-pointer"
            />
            <div
              className=" h-12 w-full
          pl-5 flex items-center"
            >
              <h2 className="text-lg font-semibold">How To Order Tests</h2>
            </div>
            {/* Plus icon */}

            <div
              className=" absolute 
          transition-transform duration-500 rotate-0
          peer-checked:rotate-180
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {/* Content */}
            <div
              className="content overflow-hidden
            transition-all duration-500
            max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p>
                  Clients can use Facebook Messenger, AmarLab website or call
                  directly to our hotline number 09643445566 or 01879443333 to
                  <br />
                  place an order. Once they provide the name of their preferred
                  lab, details of the tests they want to do, our agents will
                  inform them <br /> with the test price, discounts if available
                  and also the schedule of AmarLabs home sample collection
                  service.
                </p>
              </div>
            </div>
          </div>
          <div className="relative faq-w overflow-hidden border-2 rounded-md my-4 p-7">
            <input
              type="checkbox"
              className="peer absolute inset-x-0
           w-full h-12
           opacity-0 z-10 cursor-pointer"
            />
            <div
              className=" h-12 w-full
          pl-5 flex items-center"
            >
              <h2 className="text-lg font-semibold">What is The Cost</h2>
            </div>
            {/* Plus icon */}

            <div
              className=" absolute 
          transition-transform duration-500 rotate-0
          peer-checked:rotate-180
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {/* Content */}
            <div
              className="content overflow-hidden
            transition-all duration-500
            max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p>
                  The cost of AmarLab tests is what the chosen lab of a client
                  charges. If there is any discount, we offer it to clients.
                  AmarLab charges <br /> 50 taka for non-covid tests as material
                  cost per patient and 200-taka fixed service charge. Clients
                  can pay cash on delivery, through <br /> our website or make
                  Bkash payment.
                </p>
              </div>
            </div>
          </div>
          <div className="relative faq-w overflow-hidden border-2 rounded-md my-4 p-7">
            <input
              type="checkbox"
              className="peer absolute inset-x-0
           w-full h-12
           opacity-0 z-10 cursor-pointer"
            />
            <div
              className=" h-12 w-full
          pl-5 flex items-center"
            >
              <h2 className="text-lg font-semibold">
                How Sample Collection is Done?{" "}
              </h2>
            </div>
            {/* Plus icon */}

            <div
              className=" absolute 
          transition-transform duration-500 rotate-0
          peer-checked:rotate-180
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {/* Content */}
            <div
              className="content overflow-hidden
            transition-all duration-500
            max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p>
                  Our trained medical technicians will visit the household as
                  per schedule. They will collect the sample (blood, urine,
                  stool etc.) <br /> following standard medical practice. We
                  have dedicated collection and transportation policy developed
                  with the help of PUM <br /> Netherland. After collection the
                  sample shall be transported directly to lab by our custom
                  designed temperature-controlled carrier <br /> system.
                </p>
              </div>
            </div>
          </div>
          <div className="relative faq-w overflow-hidden border-2 rounded-md my-4 p-7">
            <input
              type="checkbox"
              className="peer absolute inset-x-0
           w-full h-12
           opacity-0 z-10 cursor-pointer"
            />
            <div
              className=" h-12 w-full
          pl-5 flex items-center"
            >
              <h2 className="text-lg font-semibold">How do I get report?</h2>
            </div>
            {/* Plus icon */}

            <div
              className=" absolute 
          transition-transform duration-500 rotate-0
          peer-checked:rotate-180
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {/* Content */}
            <div
              className="content overflow-hidden
            transition-all duration-500
            max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p>
                  After lab publishes the test results, we collect the report
                  and deliver to clients. For softcopy we deliver it as soon as
                  they are <br /> published by email. If client requests hard
                  copy of reports, we deliver it to the home of patients within
                  48 hours. There are no extra <br /> charges associated with
                  hardcopy delivery.
                </p>
              </div>
            </div>
          </div>
          <div className="relative faq-w overflow-hidden border-2 rounded-md my-4 p-7">
            <input
              type="checkbox"
              className="peer absolute inset-x-0
           w-full h-12
           opacity-0 z-10 cursor-pointer"
            />
            <div
              className=" h-12 w-full
          pl-5 flex items-center"
            >
              <h2 className="text-lg font-semibold">
                How do I know who is doing my lab tests?{" "}
              </h2>
            </div>
            {/* Plus icon */}

            <div
              className=" absolute 
          transition-transform duration-500 rotate-0
          peer-checked:rotate-180
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {/* Content */}
            <div
              className="content overflow-hidden
            transition-all duration-500
            max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p>
                  We are in official partnership with following premium
                  diagnostic centers:
                  <ul>
                    <li> 1. Dr. Lal Path Labs </li>
                    <li> 2. Popular Diagnostic </li>
                    <li>3. Thyrocare</li>
                    <li>4.IBN SINA</li>
                    <li> 5. Islami Bank Hospital</li>
                    <li> 6. United Hospital </li>
                    <li>7.Sigma Lab Chattogram and Others</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="relative faq-w overflow-hidden border-2 rounded-md my-4 p-7">
            <input
              type="checkbox"
              className="peer absolute inset-x-0
           w-full h-12
           opacity-0 z-10 cursor-pointer"
            />
            <div
              className=" h-12 w-full
          pl-5 flex items-center"
            >
              <h2 className="text-lg font-semibold">
                What are the working time for Amarlab?
              </h2>
            </div>
            {/* Plus icon */}

            <div
              className=" absolute 
          transition-transform duration-500 rotate-0
          peer-checked:rotate-180
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {/* Content */}
            <div
              className="content overflow-hidden
            transition-all duration-500
            max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p>
                  Amarlab is open 365 days a year to serve your heath care need.
                  From 8 am to 10 pm Amarlab customer service accepts order. You{" "}
                  <br />
                  can directly order from the website anytime or leave a message
                  in Facebook page. <br />
                  Sample collections are done from 8 am to 6 pm right now. But
                  we are working to make the hours longer.
                </p>
              </div>
            </div>
          </div>
          <div className="relative faq-w overflow-hidden border-2 rounded-md my-4 p-7">
            <input
              type="checkbox"
              className="peer absolute inset-x-0
           w-full h-12
           opacity-0 z-10 cursor-pointer"
            />
            <div
              className=" h-12 w-full
          pl-5 flex items-center"
            >
              <h2 className="text-lg font-semibold">
                What are our service areas?{" "}
              </h2>
            </div>
            {/* Plus icon */}

            <div
              className=" absolute 
          transition-transform duration-500 rotate-0
          peer-checked:rotate-180
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {/* Content */}
            <div
              className="content overflow-hidden
            transition-all duration-500
            max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p>
                  Amarlab currently operates in Dhaka metropolitan areas and
                  Chattogram city area. You can call the customer support unit
                  to check <br /> whether your area is within coverage.
                </p>
              </div>
            </div>
          </div>
          <div className="relative faq-w overflow-hidden border-2 rounded-md my-4 p-7">
            <input
              type="checkbox"
              className="peer absolute inset-x-0
           w-full h-12
           opacity-0 z-10 cursor-pointer"
            />
            <div
              className=" h-12 w-full
          pl-5 flex items-center"
            >
              <h2 className="text-lg font-semibold">
                Do you do covid service?
              </h2>
            </div>
            {/* Plus icon */}

            <div
              className=" absolute 
          transition-transform duration-500 rotate-0
          peer-checked:rotate-180
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {/* Content */}
            <div
              className="content overflow-hidden
            transition-all duration-500
            max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p>
                  We can provide at home RT-PCR and antigen service through our
                  partner labs. However as per government policy, for travel
                  <br />
                  purpose covid tests can not be done from home.
                </p>
              </div>
            </div>
          </div>
          <div className="relative faq-w overflow-hidden border-2 rounded-md my-4 p-7">
            <input
              type="checkbox"
              className="peer absolute inset-x-0
           w-full h-12
           opacity-0 z-10 cursor-pointer"
            />
            <div
              className=" h-12 w-full
          pl-5 flex items-center"
            >
              <h2 className="text-lg font-semibold">
                Do you do ECG x-ray, ultra-sonography etc?
              </h2>
            </div>
            {/* Plus icon */}

            <div
              className=" absolute 
          transition-transform duration-500 rotate-0
          peer-checked:rotate-180
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {/* Content */}
            <div
              className="content overflow-hidden
            transition-all duration-500
            max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p>
                  Sorry sir, x-rays at home could bring health hazards as walls
                  in resident style buildings are not built heavily to endure
                  this. Also, the <br /> environment at home could not be
                  controlled during x-rays. <br />
                  Ultrasonography and similar imaging tests are not possible to
                  do from home.
                  <br />
                  However, we can do at home ECG at Dhaka city.
                </p>
              </div>
            </div>
          </div>
          <div className="relative faq-w overflow-hidden border-2 rounded-md my-4 p-7">
            <input
              type="checkbox"
              className="peer absolute inset-x-0
           w-full h-12
           opacity-0 z-10 cursor-pointer"
            />
            <div
              className=" h-12 w-full
          pl-5 flex items-center"
            >
              <h2 className="text-lg font-semibold">
                What is Amarlab’s legal standing?
              </h2>
            </div>
            {/* Plus icon */}

            <div
              className=" absolute 
          transition-transform duration-500 rotate-0
          peer-checked:rotate-180
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            {/* Content */}
            <div
              className="content overflow-hidden
            transition-all duration-500
            max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p>
                  Amarlab is registered under both RJSC Bangladesh and ACRA
                  Singapore. It <br /> has license from DGHS to collect samples
                  for lab tests. It is also member of BASIS and E-CAB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20  featured">
        <div className="mb-10 font-bold text-xl">
          <h4>We Are Featured In</h4>
        </div>

        <div className="flex justify-center space-x-16 featured-slider-section">
          <div className="featured-slider">
            <div>
              <img src={dailystar} />
            </div>
          </div>
          <div className="featured-slider">
            <div>
              <img src={financial} />
            </div>
          </div>
          <div className="featured-slider">
            <div>
              <img src={dhakatri} />
            </div>
          </div>
          <div className="featured-slider">
            <div>
              <img src={future} />
            </div>
          </div>
          <div className="featured-slider">
            <div>
              <img src={newage} />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
