import React from 'react'
import { Outlet, Navigate} from 'react-router-dom'
import { useAuthContext } from '../context/AuthProvider'



const GuestLayout = () => {

  const {isAuth} = useAuthContext();
  if(isAuth()){
    return <Navigate to="/"/>
  }



  return (
    <div className='flex flex-col min-h-screen h-full w-full py-2.5 px-2.5'>
      <div className='h-full w-full '>
        <Outlet/>
      </div>
    </div>
  )
}

export default GuestLayout