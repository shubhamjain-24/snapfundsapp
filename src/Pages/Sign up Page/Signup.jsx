import React, { useState } from "react";
import "./Signup.css";
import img from "../../Images/signup.png";
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [income, setIncome] = useState("");
  const [occupation, setOccupation] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [nameOfUser, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!nameOfUser || !email || !password || !income || !occupation) {
      alert("Please fill all the details");
      return;
    }

    if (income < 5000) {
      setShowAlert(true);
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://loanbackend.vercel.app/api/user/register",
        {
          UserName: nameOfUser,
          email,
          password,
          loanApproval: false,
        },
        config
      );
      alert("Registration successful");

      localStorage.setItem("userInfo", JSON.stringify(data));

      history("/setloan");
    } catch (error) {
      alert("Error Occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <div className="loader">Signing in...</div>}
      <div className="Su_mainContainer">
        <div className="Su_flexContainer">
          <div className="Su_imgDiv">
            <img src={img} alt="" className="Su_img" />
          </div>
          <div className="Su_formDiv">
            <div className="Su_formContainer">
              <div className="Su_headText">Sign Up</div>
              <div className="Su_inputDiv">
                <FaUser />
                <input
                  type="text"
                  className="Su_input"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={nameOfUser}
                  placeholder="User name"
                />
              </div>
            </div>

            <div className="Su_formContainer">
              <div className="Su_inputDiv">
                <MdEmail />
                <input
                  type="email"
                  className="Su_input"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="Su_formContainer">
              <div className="Su_inputDiv">
                <FaUserTie />
                <input
                  type="text"
                  onChange={(e) => setOccupation(e.target.value)}
                  value={occupation}
                  className="Su_input"
                  required
                  placeholder="Occupation"
                />
              </div>
            </div>
            <div className="Su_formContainer">
              <div className="Su_inputDiv">
                <GiReceiveMoney />
                <input
                  type="number"
                  className="Su_input"
                  required
                  placeholder="Monthly Income"
                  min="5000"
                  onChange={(e) => setIncome(e.target.value)}
                  value={income}
                  onInput={handleIncomeChange}
                />
              </div>
              {showAlert && (
                <div className="Su_alert">
                  According to the rules of SNAP FUNDS, the minimum monthly income should be 5000.
                </div>
              )}
            </div>

            <div className="Su_formContainer">
              <div className="Su_inputDiv">
                <IoMdLock />
                <input
                  type={showPassword ? "text" : "password"}
                  className="Su_input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {showPassword ? (
                  <IoEyeOff
                    style={{ cursor: "pointer" }}
                    onClick={handleTogglePassword}
                  />
                ) : (
                  <IoEye
                    style={{ cursor: "pointer" }}
                    onClick={handleTogglePassword}
                  />
                )}
              </div>
              <button className="Su_button" onClick={submitHandler} disabled={loading}>
                {loading ? "Signing in..." : "Sign Up"}
              </button>
            </div>
            <div className="Su_subtext">
              Already have an account?{" "}
              <NavLink exact to="/login" className="navlink">
                <span className="Su_logintext">Log In</span>
              </NavLink>
            </div>
            <div className="Su_iconsDiv">
              <div className="Su_logo1">
                <FaFacebookSquare />
              </div>
              <div className="Su_logo2">
                <FaGoogle />
              </div>
              <div className="Su_logo3">
                <FaSquareTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
