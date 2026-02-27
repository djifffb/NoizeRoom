import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthProvider'


const UserLayout = () => {

  const {isAuth, user} = useAuthContext();
  if(!isAuth()){
    return <Navigate to="/login"/>
  }





  return (
    <div className='flex flex-col min-h-screen h-full w-full py-2.5 px-2.5'>
      <div className='h-full w-full'>
        <Outlet/>
      </div>
    </div>
  )
}

export default UserLayout