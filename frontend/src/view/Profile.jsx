import React from 'react'

import { useAuthContext } from '../context/AuthProvider'




const Profile = () => {

  const { logout } = useAuthContext();

  return (
    <div>
      <h2>Profile</h2>
      <button className="text-white" onClick={logout}>logout</button>
    </div>

  )
}

export default Profile