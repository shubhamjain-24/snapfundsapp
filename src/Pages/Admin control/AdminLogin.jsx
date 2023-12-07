import React, { useState } from "react";
import "../Login Pages/Login.css";
import img from "../../Images/admin.png";
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { NavLink ,useNavigate} from "react-router-dom";
import './AdminLogin.css'
import axios from "axios";

const AdminLogin = () => {
  const [password, setPassword] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state
  
  const history = useNavigate();
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  
  const submitHandler = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      alert("Please fill all the details")
      return;
    }
  
    try {
      setLoading(true); // Set loading to true on form submission
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://loanbackend.vercel.app/api/user/AdminLogin",
        { email, password },
        config
      );
  
      localStorage.setItem("userInfo", JSON.stringify(data));
      history("/adminPortal");
    } catch (error) {
      alert("Login failed (Bad credentials)")
    } finally {
      setLoading(false); // Reset loading state after API call
    }
  };

  return (
    <>
      <div className="Lg_mainContainer">
        <div className="Lg_flexContainer">
          <div className="Lg_imgDiv">
            <img src={img} alt="" className="Lg_img ag_img" />
          </div>
          <div className="Lg_formDiv">
            <div className="Lg_formContainer">
              <div className="lg_headText">Admin Login</div>
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

            <div className="Lg_formContainer">
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
              {/* Log In Button with loading state */}
              <button onClick={submitHandler} className="Lg_button" disabled={loading}>
                {loading ? "Logging in..." : "Log In"}
              </button>
            </div>

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
  )
}

export default AdminLogin;
