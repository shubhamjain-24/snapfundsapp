import React, { useState, useEffect } from "react";
import "./ValueCalculator.css";
import { FaHome } from "react-icons/fa";
import { AiFillGold } from "react-icons/ai";
import { FaCarAlt } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";

const ValueCalculator = () => {
  // State for principal, interestRate, and time
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [time, setTime] = useState(0);

  // useEffect can be used for any side effects, currently empty in your case
  useEffect(() => {}, [principal, interestRate, time]);

  // Function to calculate simple interest
  const calculateSimpleInterest = () => {
    const interest = (principal * interestRate * time) / 100;
    return interest.toFixed(2);
  };

  // Function to calculate final amount
  const calculateFinalAmount = () => {
    const interest = calculateSimpleInterest();
    return (parseFloat(principal) + parseFloat(interest)).toFixed(2);
  };

  // State for icon hover effect
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Function to handle mouse enter
  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <>
      <div className="VC_mainContainer">
        <h1 className="VC_headText">
          Financial Planning and Loan Estimation Tool
        </h1>
        <div className="VC_subContainer">
          {/* Principal Range Input */}
          <div className="VC_range">
            <label>
              <div className="VC_pricipalDiv">
                <p className="VC_label">Principal Value:</p>
                <span className="VC_label">{principal}</span>
              </div>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="VC_rangeinput"
              />
            </label>
          </div>

          {/* Loan Types */}
          <div className="loanTypes">
            <label className="VC_radio">
              <input
                className="VC_radio_input"
                type="radio"
                value="10"
                checked={interestRate === 10}
                onChange={() => setInterestRate(10)}
              />
              <p className="VC_radio_value">3.5%</p>
              <FaHome
                style={{
                  fontSize: "30px",
                  color: hoveredIcon === "home" ? "#51e75d" : "gray",
                  transition: 'color 0.3s ease-in-out',
                }}
                onMouseEnter={() => handleMouseEnter("home")}
                onMouseLeave={handleMouseLeave}
              />
            </label>

            <label className="VC_radio">
              <input
                type="radio"
                value="8"
                checked={interestRate === 8}
                onChange={() => setInterestRate(8)}
              />
              <p className="VC_radio_value">1.5%</p>
              <AiFillGold
                style={{
                  fontSize: "30px",
                  color: hoveredIcon === "gold" ? "#f4cc1c" : "gray",
                  transition: 'color 0.3s ease-in-out',
                }}
                onMouseEnter={() => handleMouseEnter("gold")}
                onMouseLeave={handleMouseLeave}
              />
            </label>

            <label className="VC_radio">
              <input
                type="radio"
                value="7"
                checked={interestRate === 7}
                onChange={() => setInterestRate(7)}
              />
              <p className="VC_radio_value">4%</p>
              <FaCarAlt
                style={{
                  fontSize: "30px",
                  color: hoveredIcon === "car" ? "#6976dc" : "gray",
                  transition: 'color 0.3s ease-in-out',
                }}
                onMouseEnter={() => handleMouseEnter("car")}
                onMouseLeave={handleMouseLeave}
              />
            </label>

            <label className="VC_radio">
              <input
                type="radio"
                value="20"
                checked={interestRate === 20}
                onChange={() => setInterestRate(20)}
              />
              <p className="VC_radio_value">5%</p>
              <LiaUniversitySolid
                style={{
                  fontSize: "30px",
                  color: hoveredIcon === "university" ? "#563373" : "gray",
                  transition: 'color 0.3s ease-in-out',
                }}
                onMouseEnter={() => handleMouseEnter("university")}
                onMouseLeave={handleMouseLeave}
              />
            </label>
          </div>

          {/* Number of Years Input */}
          <div className="VC_yearsDiv">
            <label>
              <p className="VC_yearText">Number of Years:</p>
              <input
                type="number"
                value={time}
                min={1}
                onChange={(e) => setTime(e.target.value)}
                className="numberInput"
              />
            </label>
          </div>

          {/* Result Sum Container */}
          <div className="VC_sumContainer">
            <p>
              Calculated Simple Interest: &nbsp;
              <span className="VC_sumValue">
                {calculateSimpleInterest()}
              </span>{" "}
            </p>
            <p>
              Final Amount:{" "}
              <span className="VC_sumValue">{calculateFinalAmount()}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValueCalculator;
