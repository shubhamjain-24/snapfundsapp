import React from "react";
import "./Footer.css";
import { BiRightArrow } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import img1 from '../../Images/logo2.png'
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    {/* Main Container for Footer Section */}
    <div className="footer_mainContainer">
      {/* Flex Container for Footer Content */}
      <div className="footer_flexContainer">
        {/* Footer Section 1 */}
        <div className="footer_div1">
          <div className="footer_logoContainer">
            <img src={img1} alt="" className="footerImg" />
          </div>
          <div className="footer_div1subtext">
            Achieve your financial goals with LoanAssist, turning borrowing dreams into reality with expert guidance and affordable loans.
          </div>
          <NavLink className="navlink" to="/contactUs">
            <div className="footer_div1button">Get in touch</div>
          </NavLink>
        </div>

        {/* Footer Section 2 */}
        <div className="footer_div2">
          <div className="footer_div2Headtext">Quick Links</div>
          <div className="footer_div2subText">
            <NavLink className="navlink" style={{ color: "white" }} to="/">
              <BiRightArrow /> &nbsp; Home
            </NavLink>
          </div>
          <div className="footer_div2subText">
            <NavLink className="navlink" style={{ color: "white" }} to="/loan">
              <BiRightArrow /> &nbsp; Loan
            </NavLink>
          </div>
          <div className="footer_div2subText">
            <NavLink className="navlink" style={{ color: "white" }} to="/aboutUs">
              <BiRightArrow /> &nbsp; About Us
            </NavLink>
          </div>
          <div className="footer_div2subText">
            <NavLink className="navlink" style={{ color: "white" }} to="/contactUs">
              <BiRightArrow /> &nbsp; Contact Us
            </NavLink>
          </div>
          <div className="footer_div2subText">
            <NavLink className="navlink" style={{ color: "white" }} to="/login">
              <BiRightArrow /> &nbsp; Login
            </NavLink>
          </div>
        </div>

        {/* Footer Section 3 */}
        <div className="footer_div3">
          <div className="footer_div3headText">Contact Info</div>
          <div className="footer_div3subText">
            <HiOutlineLocationMarker className="footer_div2logo" />
            J-1301 Jolly Residency, near Vijaya Laxmi hall, AB Road - Indore (452001)
          </div>
          <div className="footer_div3subText">
            <FiPhoneCall /> &nbsp; +91 8878923910
          </div>
          <div className="footer_div3subText">
            <FiMail /> &nbsp; Mail us at
          </div>
          <div className="footer_div3subText">
            For general inquiries: <br />
            contact@example.com <br />
          </div>
        </div>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="foot_bootom">
      <div className="foot-border"></div>
      <div className="foot_bottomContent">
        <div className="foot_bottom_text1">
          © All Copyright reserved SNAP FUNDS
        </div>
        <div className="foot_bottom_text1">
          Designed and developed by Shubham Jain
        </div>
        <div className="foot_bottom_icondiv">
          <div className="foot_bootom_icon"><FaFacebook /></div>
          <div className="foot_bootom_icon"><FaXTwitter /></div>
          <div className="foot_bootom_icon"><GrInstagram /></div>
          <div className="foot_bootom_icon"><FaLinkedin /></div>
          <div className="foot_bootom_icon"><FaWhatsapp /></div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Footer;
