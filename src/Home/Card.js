import React from 'react';
import homepic from './../images/home_pic.jpg';
import homepicOne from './../images/home_pic_1.jpg';
import homepicTwo from './../images/home_pic_2.jpg';

const Card = ({number}) => {
    return (
        <div className='flex'>
            {number}
            <img src={homepic}></img>
            <img src={homepicOne}></img>
            <img src={homepicTwo}></img>
  
        </div>
    );
};

export default Card;