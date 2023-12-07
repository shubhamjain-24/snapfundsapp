import React from "react";
import "./Loan_sec.css";
import { FaHome } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { AiTwotoneGold } from "react-icons/ai";
import { FaCarAlt } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import { LuShoppingBag } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Loan_sec = () => {
  return (
    <>
      <div className="Loan_s_mainContainer">
        {/* Heading for loan types */}
        <div className="Loan_s_headText">
          What type of loan are you <br /> looking for?
        </div>
        {/* Grid container for loan types */}
        <div className="Loan_s_gridContainer">
          {/* Home Loans */}
          <div className="Loan_s_griddiv1">
            <div className="Loan_s_icon">
              <FaHome />
              <p className="Loan_s_subtext">Home Loans</p>
            </div>
            <div className="Loan_s_button">
              {/* Link to the loan page */}
              <NavLink className="navlink" to="/loan">
                <div className="Loan_s_icon2">
                  <FaArrowRight />
                </div>
              </NavLink>
            </div>
          </div>

          {/* Gold Loans */}
          <div className="Loan_s_griddiv1">
            <div className="Loan_s_icon">
              <AiTwotoneGold />
              <p className="Loan_s_subtext">Gold Loans</p>
            </div>
            <div className="Loan_s_button">
              <NavLink className="navlink" to="/loan">
                <div className="Loan_s_icon2">
                  <FaArrowRight />
                </div>
              </NavLink>
            </div>
          </div>

          {/* Car Loans */}
          <div className="Loan_s_griddiv1">
            <div className="Loan_s_icon">
              <FaCarAlt />
              <p className="Loan_s_subtext">Car Loans</p>
            </div>
            <div className="Loan_s_button">
              <NavLink className="navlink" to="/loan">
                <div className="Loan_s_icon2">
                  <FaArrowRight />
                </div>
              </NavLink>
            </div>
          </div>

          {/* Education Loans */}
          <div className="Loan_s_griddiv1">
            <div className="Loan_s_icon">
              <LiaUniversitySolid />
              <p className="Loan_s_subtext">Education Loans</p>
            </div>
            <div className="Loan_s_button">
              <NavLink className="navlink" to="/loan">
                <div className="Loan_s_icon2">
                  <FaArrowRight />
                </div>
              </NavLink>
            </div>
          </div>

          {/* Purchase Loans */}
          <div className="Loan_s_griddiv1">
            <div className="Loan_s_icon">
              <LuShoppingBag />
              <p className="Loan_s_subtext">Purchase Loans</p>
            </div>
            <div className="Loan_s_button">
              <NavLink className="navlink" to="/loan">
                <div className="Loan_s_icon2">
                  <FaArrowRight />
                </div>
              </NavLink>
            </div>
          </div>

          {/* Fix and Flip Loans */}
          <div className="Loan_s_griddiv1">
            <div className="Loan_s_icon">
              <IoSettingsOutline />
              <p className="Loan_s_subtext">Fix and Flip Loans</p>
            </div>
            <div className="Loan_s_button">
              <NavLink className="navlink" to="/loan">
                <div className="Loan_s_icon2">
                  <FaArrowRight />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loan_sec;
