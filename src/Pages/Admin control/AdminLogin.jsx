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
import { NavLink ,Link,useNavigate} from "react-router-dom";
import './AdminLogin.css'
// backend
import axios from "axios";

const AdminLogin = () => {
    const [password, setPassword] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [showPassword, setShowPassword] = useState(false);
    
  const history = useNavigate();
  
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
  
    // backend
    const submitHandler = async (e) => {
      e.preventDefault();
  
      if (!email || !password) {
        alert("Please fill all the details")
        return;
      }
  
      try {
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
        // it will tell where to go after the successful login
        history("/adminPortal");
      } catch (error) {
        alert("Login failed (Bad credentials)")
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
            <button onClick={submitHandler} className="Lg_button">Log In</button>
          </div>
          {/* <NavLink className="navlink" exact to="/signup">
            <div className="LG_subtext">Create an account</div>
          </NavLink> */}
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

export default AdminLogin