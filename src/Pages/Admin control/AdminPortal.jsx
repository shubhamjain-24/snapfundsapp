import React, { useState, useEffect } from 'react';
import './AdminPortal.css';
import img from '../../Images/logo2.png';
import { RiAdminFill } from 'react-icons/ri';
import { CiLogout } from 'react-icons/ci';
import axios from 'axios';

const AdminPortal = () => {
  const [userData, setUserData] = useState([]);

  const handleStatusChange = async (ind) => {
    try {
      const selectedUser = userData[ind];
      const response = await axios.post(`api/user/setLoan`, {
        email: selectedUser.CustomerEmail,
        TotalAmount: selectedUser.CustomerAmount,
        TotalWeek: selectedUser.CustomerWeek,
      });
      console.log(response.data);
      alert('Successful');
    } catch (error) {
      console.error('Error updating loan status:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://loanbackend.vercel.app/api/user/alladmin/a@gmail.com');
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="ap_nav">
        {/* <div className="ap_navLogo">
          <img src={img} alt="" className="ap_nav_logo" />
        </div> */}
        <div className="ap_nav_text">Admin Portal</div>
        <div className="ap_iconDiv">
          <div className="ap_icon">
            <RiAdminFill />
          </div>
          <div className="ap_icon">
            <CiLogout />
          </div>
        </div>
      </div>
      <div className="ap_mainContainer">
        <div className="tableContainer">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Duration</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((loan, ind) => (
                <tr key={loan.id}>
                  <td>{ind+1}</td>
                  <td>{loan.CustomerName}</td>
                  <td>{loan.CustomerEmail}</td>
                  <td>{loan.CustomerAmount}</td>
                  <td>{loan.CustomerWeek}</td>
                  <td>
                    {loan.Approval ? (
                      <>approved already</>
                    ) : (
                      <>
                        <button
                          className="notApproveButton"
                          onClick={() => handleStatusChange(ind)}
                        >
                          Approve
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminPortal;
