import React from 'react';
import { NavLink } from 'react-router-dom';
import './Landing_sec.css';
import img from '../../../Images/Ls_img1.png';

const Landing_sec = () => {
  return (
    <>
      {/* Main container for landing section */}
      <div className="Ls_mainContainer">
        {/* Flex container for text and image */}
        <div className="Ls_flexContainer">
          {/* Text container */}
          <div className="Ls_textContainer">
            {/* Headline */}
            <div className="Ls_headtext">Your Journey to <br /> Financial  Prosperity Starts <br />Here.</div>
            {/* Subtext */}
            <div className="Ls_subtext">Embark on your journey to financial prosperity with us. Our comprehensive loan offerings are crafted to be the first step towards your success.</div>
            {/* Apply Now button */}
            <NavLink className="navlink" to='/login'>
              <div className="Ls_button">
                Apply Now
              </div>
            </NavLink>
          </div>
          {/* Image container */}
          <div className="Ls_imageContainer">
            <img src={img} alt="" className="Ls_image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing_sec;
