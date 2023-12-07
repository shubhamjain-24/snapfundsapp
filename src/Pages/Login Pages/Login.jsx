import React, { useState } from "react";
import "./Login.css";
import img from "../../Images/login.png";
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { NavLink ,Link,useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
  // State variables for email, password, and password visibility
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Navigation hook for redirection after login
  const history = useNavigate();

  // Toggle function for password visibility
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Backend request to handle user login
  const submitHandler = async (e) => {
    e.preventDefault();

    // Validate user input
    if (!email || !password) {
      alert("Please fill in all the details");
      return;
    }

    try {
      // Configuration for the backend request
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Backend request to authenticate user
      const { data } = await axios.post(
        "https://loanbackend.vercel.app/api/user/login",
        { email, password },
        config
      );

      // Store user info in local storage upon successful login
      localStorage.setItem("userInfo", JSON.stringify(data));

      // Redirect to the desired page after successful login
      history("/setloan");
    } catch (error) {
      // Display an alert for failed login attempts
      alert("Login failed (Bad credentials)");
    }
  };

  return (
    <>
      {/* Login Container */}
      <div className="Lg_mainContainer">
        {/* Flex Container for Image and Form */}
        <div className="Lg_flexContainer">
          {/* Image Section */}
          <div className="Lg_imgDiv">
            <img src={img} alt="" className="Lg_img" />
          </div>

          {/* Form Section */}
          <div className="Lg_formDiv">
            {/* Email Form Container */}
            <div className="Lg_formContainer">
              {/* Header Text */}
              <div className="lg_headText">Login</div>

              {/* Email Input */}
              <div className="Lg_inputDiv">
                <FaUser />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  className="Lg_input"
                  required
                  placeholder="Email"
                />
              </div>
            </div>

            {/* Password Form Container */}
            <div className="Lg_formContainer">
              {/* Password Input */}
              <div className="Lg_inputDiv">
                <IoMdLock />
                <input
                  type={showPassword ? "text" : "password"}
                  className="Lg_input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                {/* Toggle Password Visibility */}
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

              {/* Login Button */}
              <button onClick={submitHandler} className="Lg_button">
                Log In
              </button>
            </div>

            {/* Create an Account Link */}
            <NavLink className="navlink" exact to="/signup">
              <div className="LG_subtext">Create an account</div>
            </NavLink>

            {/* Social Media Icons */}
            <div className="Lg_iconsDiv">
              <div className="Lg_logo1">
                <FaFacebookSquare />
              </div>
              <div className="Lg_logo2">
                <FaGoogle />
              </div>
              <div className="Lg_logo3">
                <FaSquareTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
