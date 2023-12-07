import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdContactPhone } from 'react-icons/md';
import './CuIntroduction.css';

const CuIntroduction = () => {
  return (
    <>
      {/* Main Container */}
      <div className="introcu_mainContainer">
        {/* Text Container */}
        <div className="introcu_textContainer">
          {/* Heading */}
          <div className="introcu_headText">
            Contact Us
          </div>
          {/* SEO Text */}
          <div className="introcu_seoText">
            {/* Home Icon */}
            <AiOutlineHome className='introcu_icon' /> &nbsp; Home &nbsp;
            {/* Arrow Icon */}
            <BsArrowRightShort/> &nbsp; 
            {/* Contact Icon */}
            <MdContactPhone/> &nbsp; Contact Us
          </div>
        </div>
      </div>
    </>
  );
};

export default CuIntroduction;
