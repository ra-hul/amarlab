import React from 'react';
import './Home.css';
import logo from './../images/logo.png';
import location from './../images/location.png';
import cart from './../images/cart.png';
import cart_2 from './../images/cart_2.png';
import cart_3 from './../images/inject.png';
import cart_4 from './../images/prescribe.png';
import homepic from './../images/home_pic.jpg';
import homepicOne from './../images/home_pic_1.jpg';
import homepicTwo from './../images/home_pic_2.jpg';
import popular from './../images/popular.png';
import ibn from './../images/ibn.png';
import united from './../images/united.png';
import dr from './../images/drlal.jpg';
import thy from './../images/thy.jpg';
import islami from './../images/islami.png';
import oncos from './../images/oncos.png';





const Home = () => {
  var counter = 1 ;
  setInterval(function(){
   document.getElementById('radio' + counter).checked = true;
   counter++;
   if(counter > 4){
    counter = 1;
   }

  }, 5000);
  
 
 
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

        <div className="flex">
          <div>
          <div className="diag" >
              <h1>Diagnostics</h1>
              <h1 className="door_step">At Your Doorstep</h1>
            </div>
            <div>
              <div>
              <p className='door_step2'>Making Healthcare Easily Accessible to Everyone, Everywhere.</p>
              </div>
            
           
            </div>
            

              <div className="flex  space-x-4">
              <div className='flex space-x-0 ml-36 mt-3'>
                <img className="w-4 h-4 ml-7 " src={cart_2}></img>
                <div>  
                <h5> <span className='header'> Step 01:</span> Order tests</h5>
                 <small className="book_test">Book tests & checkups</small>
              </div>
              </div>
              <div  className='flex space-x-0  mt-3' >
              <img className="w-4 h-4 " src={cart_3}></img>
                <div>
                <h5><span className='header'>Step 02:</span> Provide Sample</h5>
                <small className="book_test2">From your doorstep</small>
                </div>
                </div>
              </div>
                <div className='flex space-x-0 ml-40 mt-3'>
                <img className="w-4 h-4 " src={cart_4 }></img>
                <div>
                <h5><span className='header'>Step 03:</span> Get Report</h5>
                <small className="book_test">Your report delivered</small>
                </div>
                </div>
                <div className='flex space-x-4'>
                    <button className='Order_test'> Order Test</button>
                    <button className="Call_order"> Call to Order</button>
                </div>
          </div>
            
             <div className='slider'>
              <div className='slides'>

                <input type='radio' name="radio-btn" id="radio1" />
                <input type='radio' name="radio-btn" id="radio2" />
                <input type='radio' name="radio-btn" id="radio3" />
                <input type='radio' name="radio-btn" id="radio4" />


                <div className='slide first'>
                  <img src={homepic} />
                </div>
                <div className='slide'>
                  <img src={homepicOne} />
                </div>
                <div className='slide'>
                  <img src={homepicTwo} />
                </div>
                <div className='slide'>
                  <img src={homepic} />
                </div>

                <div className='navigation-auto'>
                  <div className="auto-btn1"></div>
                  <div className="auto-btn2"></div>
                  <div className="auto-btn3"></div>
                  <div className="auto-btn4"></div>
                </div>

              </div>
              <div className='navigation-manual'>
                <label for="radio1" className='manual-btn'></label>
                <label for="radio2" className='manual-btn'></label>
                <label for="radio3" className='manual-btn'></label>
                <label for="radio4" className='manual-btn'></label>

              </div>

             </div>

            </div>
          
            <div className='container flex'>
              <div className='justify-center service-container' >
                <h5 className="counter"> <span >4 Years +</span></h5>
                <small>Services</small>
              </div>
              <div className='divide-line ' ></div>
              <div className=' tests' >
                <h5 className="counter"> <span> 52297 +</span> </h5>
                <small>Tests done</small>
              </div>

            </div>
            <div>
              <div className='lab-container'>
                <h5 className="partners">Our Lab Partners</h5>
                <p className="yourtest">Your tests will be done from our partner labs where quality
                   <br/>
                is uncompromised.
                </p>
                <div className='flex justify-center  space-x-7 labs-sponsor'>
                  <div className='popular'>
                    <div>
                     <img  src={popular} />
                    </div>
                  </div>
                  <div className='popular'>
                    <div>
                     <img  src={ibn} />
                    </div>
                  </div>
                  <div className='popular2'>
                    <div>
                     <img  src={united} />
                    </div>
                  </div>
                  <div className='popular3'>
                    <div>
                     <img  src={dr} />
                    </div>
                  </div>

                </div>
                <div>
                  <div className="flex justify-center  space-x-7 labs-sponsor2">
                  <div className='popular'>
                    <div>
                     <img  src={thy} />
                    </div>
                  </div>
                  <div className='popular4'>
                    <div>
                     <img  src={islami} />
                    </div>
                  </div>
                  <div className='popular5'>
                    <div>
                     <img  src={oncos} />
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
           <div className='icon'>
            <div className='inject'>
              <img  src={cart_3} />
            </div>
           
            <h5 className="safe">Safe Home Sample <br/> Collection</h5>
           <p className='sample'>A certified professional <br/> will collect your sample <br/> from your location.</p>


           <div className='inject'>
           <img  src={cart_3} /> 
           </div>
           <h5 className="safe">Safe Home Sample <br/> Collection</h5>
           <p className='sample'>A certified professional <br/> will collect your sample <br/> from your location.</p>

           </div>
           

           

         </div>
     
    

        </>

       
       
    );
};

export default Home;