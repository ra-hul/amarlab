import React from 'react';
import './Home.css';
import logo from './../images/logo.png';
import location from './../images/location.png';
import cart from './../images/cart.png';
import cart_2 from './../images/cart_2.png';
import cart_3 from './../images/inject.png';
import cart_4 from './../images/prescribe.png';

const Home = () => {
    return (


        <>
         <div className="flex upper_nav " >
          <h2 className="call_order">Call For Order: <span className="font-bold">09643445566</span> </h2>
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
        <h5 className='ur_location'>Your Location</h5>
        </div>
      
           <div className="flex space-x-4">
           <p className='dhk_position'>Dhaka</p>
            <li class="fas fa-angle-down drop-icon"></li>
           </div>
        </div>
            <button className="login">Login</button>
            <button className="signup">Signup</button>
            <img src={cart}  className="cart"></img>
        </div>
      
        </div>

        <div className="">
            <div className="diag" >
              <h1>Diagnostics</h1>
              <h1 className="door_step">At Your Doorstep</h1>
            </div>
            <div>
            <p className='door_step2'>Making Healthcare Easily Accessible to Everyone, Everywhere.</p>
           
            </div>
            

              <div className="flex space-x-7">
              <div className='flex space-x-3 ml-36 mt-3'>
                <img className="w-4 h-4 ml-7 " src={cart_2}></img>
                <div>  
                <h5> <span> Step 01:</span> Order tests</h5>
                 <small className="book_test">Book tests & checkups</small>
              </div>
              </div>
              <div  className='flex space-x-3 ml-36 mt-3' >
              <img className="w-4 h-4 " src={cart_3}></img>
                <div>
                <h5>Step 02: Provide Sample</h5>
                <small className="book_test">From your doorstep</small>
                </div>
                </div>
              </div>
                <div className='flex space-x-3 ml-40 mt-3'>
                <img className="w-4 h-4 " src={cart_4 }></img>
                <div>
                <h5>Step 03: Get Report</h5>
                <small className="book_test">From your doorstep</small>
                </div>
                </div>
               
            </div>
    

        </>

       
       
    );
};

export default Home;