import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { GiNewspaper } from "react-icons/gi";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      {/* Top Section */}
      <div className="introau_mainContainer">
        <div className="introau_textContainer">
          <div className="introau_headText">About Us</div>
          <div className="introau_seoText">
            <AiFillHome className="introau_icon" />
            &nbsp; Home &nbsp;
            <BsArrowRightShort /> &nbsp; <MdContactPhone /> &nbsp; About Us
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="au_bottomHeadContainer">
        <div className="au_bottomContainer">
          {/* Company Description */}
          <div className="au_subText">
            WELCOME TO SNAP FUNDS, YOUR TRUSTED FINANCIAL PARTNER
          </div>
          <div className="ab_subText2">
            About the company
            <p className="ab_subtext3">
              At Snap Funds, we are dedicated to transforming financial aspirations into reality.
              With a profound commitment to transparency, innovation, and personalized service,
              we stand as your trusted partner in the journey toward financial success.
              Our mission is to redefine the lending experience, offering tailored loan solutions
              that address the unique needs of each individual. Whether you're striving for homeownership,
              pursuing education, or navigating unexpected expenses, we provide a seamless and efficient process.
              At the heart of our approach is a customer-centric philosophy, ensuring that you receive not just loans,
              but comprehensive financial solutions. Backed by a team of professionals,
              we prioritize transparency, quick processing, and unwavering support.
              Join us at [Your Company Name] and embark on a path where financial empowerment meets your dreams,
              creating a brighter and more secure future for you.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="au_serviceDiv">
        <div className="au_serviceSubDiv">
          {/* Services Text */}
          <div className="au_serviceText1">Our Services</div>

          {/* Services Cards */}
          <div className="au_serviceGridDiv">
            <div className="au_card1">
              <div className="au_cardIcon">
                <RiCustomerService2Fill />
              </div>
              <div className="au_cardText">24/7 Customer Support</div>
            </div>
            <div className="au_card1">
              <div className="au_cardIcon">
                <FaCircleCheck />
              </div>
              <div className="au_cardText">Quick Approval and Disbursement</div>
            </div>
            <div className="au_card1">
              <div className="au_cardIcon">
                <MdManageAccounts />
              </div>
              <div className="au_cardText">Online Account Management</div>
            </div>
            <div className="au_card1">
              <div className="au_cardIcon">
                <GiNewspaper />
              </div>
              <div className="au_cardText">Financial Education Resources</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
