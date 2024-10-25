import React, { useState } from 'react'
import LoginPage from './login';

function Myaccount() {

  const [isLoggin, setisLoggin] = useState(false);

  const HandleLogout = () => {
    setisLoggin({ isLoggin: true });
    localStorage.removeItem("logginUser")
  }
  if (isLoggin) {
    return <LoginPage />
  }
  return (
    <div>
      <button onClick={HandleLogout}>Logout</button>
    </div>
  )
}
export default Myaccount;