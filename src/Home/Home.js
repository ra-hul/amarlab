import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="flex upper_nav ">
         <h2 className="call_order">Call For Order: <span className="font-bold">09643445566</span> </h2>
         <div className="icons space-x-4 ">
         <i class="fa-brands fa-facebook"></i>
         <i class="fa-brands fa-linkedin"></i>
         <i class="fa-brands fa-instagram-square"></i>
         </div>
        </div>
    );
};

export default Home;