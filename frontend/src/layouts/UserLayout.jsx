import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

// context
import { useAuthContext } from '../context/AuthProvider'

// components
import Nav from '../components/Nav';



const UserLayout = () => {

  const {isAuth} = useAuthContext();
  if(!isAuth()){
    return <Navigate to="/login"/>
  }





  return (
    <div className='layout'>
      <Nav/>
      <div className='layout__data'> 
        <Outlet/>
      </div>
    </div>
  )
}

export default UserLayout