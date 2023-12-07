import React, { useState } from "react";
import "./SetLoan.css";
import { FaUserCircle } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { BsCalendarWeek } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SetLoan = () => {
  // Retrieve user information from localStorage
  const userInfos = JSON.parse(localStorage.getItem("userInfo")) || {};

  const [week, setWeek] = useState("");
  const [amount, setAmount] = useState("");
  const history = useNavigate();

  // Handle input change for loan duration
  const handleWeekChange = (e) => {
    setWeek(e.target.value);
  };

  // Handle input change for loan amount
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // Handle apply button click
  const handleApplyClick = () => {
    if (week < 1) {
      alert(
        "As per SNAP FUNDS regulations, the minimum loan duration is stipulated at one week."
      );
    } else if (amount < 500) {
      alert("As per SNAP FUNDS regulations, the minimum loan amount is 500.");
    } else {
      console.log("Apply logic triggered");
      // Place additional logic or API call here
    }
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Send loan application data to the server
      const { data } = await axios.post(
        "https://loanbackend.vercel.app/api/user/requesttobank",
        {
          email: "a@gmail.com",
          CustomerName: userInfos.UserName,
          CustomerEmail: userInfos.email,
          CustomerAmount: amount,
          CustomerWeek: week,
        },
        config
      );

      // Display success message and navigate to the next page
      alert("Loan application submitted successfully!");
      history("/userTable");
    } catch (error) {
      // Display error message for failed login
      alert("Loan application failed");
    }
  };

  return (
    <>
      <div className="St_mainContainer">
        <div className="St_subContainer">
          {/* User Information Section */}
          <div className="St_div1">
            <div className="St_usericon">
              <FaUserCircle />
            </div>
            <h1 className="St_userName">{userInfos.UserName}</h1>
            <h5 className="St_userEmail">{userInfos.email}</h5>
          </div>

          {/* Loan Application Section */}
          <div className="St_div2">
            <div className="St_textDiv">
              {/* Header Text */}
              <div className="St_text1">
                Let's Step into <br />
                Financial Confidence
              </div>
              <div className="St_text2">
                Your Journey to a Better Future Begins Here!
              </div>
            </div>

            {/* Loan Input Form */}
            <div className="St_inputDiv">
              {/* Loan Amount Input */}
              <div className="Su_inputDiv">
                <div className="Su_icon" style={{ fontSize: "25px" }}>
                  <GiReceiveMoney />
                </div>
                <input
                  type="number"
                  className="Su_input"
                  required
                  placeholder="Enter the amount"
                  min="500"
                  onChange={handleAmountChange}
                  value={amount}
                />
              </div>

              {/* Loan Duration Input */}
              <div className="Su_inputDiv" style={{ marginTop: "20px" }}>
                <div className="Su_icon" style={{ fontSize: "25px" }}>
                  <BsCalendarWeek />
                </div>
                <input
                  type="number"
                  className="Su_input"
                  required
                  placeholder="Enter weeks"
                  min="1"
                  onChange={handleWeekChange}
                  value={week}
                />
              </div>

              {/* Apply Now Button */}
              <button className="St_button" onClick={submitHandler}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetLoan;
