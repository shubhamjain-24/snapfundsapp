import React from 'react'

const UserWaiting = () => {
    const userInfos = JSON.parse(localStorage.getItem('userInfo')) || {}; 
console.log(userInfos)
  return (
    <div>UserWaiting</div>
  )
}

export default UserWaiting