import React from "react";
import "./Loan.css";
import { FaArrowRight } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { AiTwotoneGold } from "react-icons/ai";
import { FaCarAlt } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import { FiShoppingBag } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { loanData } from "./loandata";
import { NavLink } from "react-router-dom";

const Loan = () => {
  // Function to get the appropriate icon component based on the iconName
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "IoHome":
        return <IoHome />;
      case "AiTwotoneGold":
        return <AiTwotoneGold />;
      case "FaCarAlt":
        return <FaCarAlt />;
      case "LiaUniversitySolid":
        return <LiaUniversitySolid />;
      case "FiShoppingBag":
        return <FiShoppingBag />;
      case "IoSettingsSharp":
        return <IoSettingsSharp />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="Loan_mainContainer">
        <div className="Loan_headText">
          Empowering Your Financial Future <br /> Explore a Diverse Range of
          Tailored Loans
        </div>
        <div className="Loan_gridContainer">
          {loanData.map((loan) => (
            <div
              key={loan.id}
              className={`Loan_card${loan.id}`}
              style={{ backgroundImage: loan.backgroundColor }}
            >
              <div className="Loan_arrowbuttonDiv">
                <div className="Loan_homeIcon">
                  {getIconComponent(loan.icon)}
                </div>
                {/* Using NavLink to navigate to the login page */}
                <NavLink className="navlink" to='/login'>
                  <div className="Loan_arrowbutton">
                    <FaArrowRight />
                  </div>
                </NavLink>
              </div>
              <div className="Loan_cardTextdiv">
                <div className="Loan_cardText1">{loan.title}</div>
                <div className="Loan_cardText2">
                  <span className="Loan_cardText3">Interest Rates</span> &nbsp;{" "}
                  {loan.interestRate}
                </div>
                <div className="Loan_cardText2">
                  <span className="Loan_cardText3">Loan Amount Range</span>{" "}
                  &nbsp; {loan.loanAmountRange}
                </div>
                <div className="Loan_cardText2">
                  <span className="Loan_cardText3">Repayment Period</span>{" "}
                  &nbsp; {loan.repaymentPeriod}
                </div>
                {loan.loanToValue && (
                  <div className="Loan_cardText2">
                    <span className="Loan_cardText3">Loan to Value (LTV)</span>{" "}
                    &nbsp; {loan.loanToValue}
                  </div>
                )}
                <div className="Loan_cardText2">
                  <span className="Loan_cardText3">Special Features</span>{" "}
                  &nbsp; {loan.specialFeatures}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Loan;
