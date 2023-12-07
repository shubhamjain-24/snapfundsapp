// Maintable.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import './Maintable.css';  // Import the CSS file

const Maintable = () => {
  const [userData, setUserData] = useState([]);
  const [week, setWeek] = useState("");
  const[but,setBut]=useState(false);
  const userInfos = JSON.parse(localStorage.getItem("userInfo")) || {};
const[approval,setApproval]=useState(false);

 const fetchData = async () => {
   try {
     const response = await axios.get(`https://loanbackend.vercel.app/api/user/person/${userInfos.email}`);
     console.log(response.data);
     setUserData(response.data);
   } catch (error) {
     console.error("Error fetching data:", error);
   }
 };

 const fun=async()=>{
  try {
    const res = await axios.get(`https://loanbackend.vercel.app/api/user/approvalButton/${userInfos.email}`);
    console.log(res.data)
    localStorage.setItem("userInfo", JSON.stringify(res.data));
    setApproval(res.data);

   

     // Optionally, you can also update the local storage
     localStorage.setItem(
       "userInfo",
       JSON.stringify({ ...userInfos, loadPending: res.data })
     );
    
  } catch (error) {
    
  }
 }
  useEffect(() => {
   

    fetchData();
    updateWeek();
  }, [ approval]);

 

  const updateWeek = async (weekNum) => {
    setWeek(weekNum);
    console.log(week)
    try {
      const response = await axios.post(
        `https://loanbackend.vercel.app/api/user/weeknum/${userInfos.email}/${weekNum}`
      );
      console.log(response.data);
      // setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      {approval || userInfos.loadPending ? (
        <>
          {/* Approved by the bank */}
          <div className="mainTable-container">
            {" "}
            <h2 className="Loan_tableHead">User Loans Table</h2>
            <table>
              <thead>
                <tr>
                  <th>Total Amount</th>
                  <th>Total Weeks</th>
                </tr>
              </thead>
              <tbody className="table_body">
                {userData.map((user) => (
                  <React.Fragment key={user._id}>
                    <tr>
                      <td>{user.TotalAmount}</td>
                      <td>{user.TotalWeek}</td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <table>
                          <thead>
                            <tr>
                              <th>Week</th>
                              <th>Date</th>
                              <th>Amount</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {user.week.map((week) => (
                              <tr key={week._id}>
                                <td>{week.weekNum}</td>
                                <td>{week.Date.substring(0, 10)}</td>
                                <td>{week.amount}</td>
                                <td>{week.Status ? "Paid" : "Unpaid"}</td>
                              {console.log(week.weekNum)}
                                <td>
                                {week.Status ? (
                                    "Approved"
                                  ) : (
                                    <button
                                      onClick={() => updateWeek(week.weekNum)}
                                    >
                                      Want to pay
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
        <div className="waiting">

          Hold on waiting for bank status
          <button className="waiting_button" onClick={fun}>Check Status</button>
        </div>
        </>
      )}
    </>
  );
};

export default Maintable;
