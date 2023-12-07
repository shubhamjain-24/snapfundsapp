import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home Page/Home'
import Contactus from "./Pages/Contact-us Page/Contactus";
import Login from "./Pages/Login Pages/Login";
import Signup from "./Pages/Sign up Page/Signup";
import AboutUs from "./Pages/About-us Page/AboutUs";
import Loan from "./Pages/Loan/Loan";
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import './App.css'
import './style.css'
import BacktoScroll from './Components/BacktoScroll'
import Setloan from "./Pages/UserPage/Setloan";
import AdminLogin from "./Pages/Admin control/AdminLogin";
import AdminPortal from "./Pages/Admin control/AdminPortal";
import UserTable from "./Pages/UserPage/Maintable";
import UserWaiting from "./Pages/UserPage/UserWaiting";

const App = () => {
  return (
    <>
    <Navbar/>
    <BacktoScroll/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/setloan" element={<Setloan />} />
        <Route path="/userTable" element={<UserTable />} />
        <Route path="/userWait" element={<UserWaiting />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminPortal" element={<AdminPortal />} />
      </Routes>
      <Footer/>
      {/* <Navbar/> */}
      {/* <Setloan/> */}
      {/* <Login/> */}
      {/* <Footer/> */}
      {/* <AdminLogin/> */}
      {/* <Home/> */}
      {/* <AdminPortal/> */}
      {/* <UserTable/> */}
    </>
  );
};

export default App;
