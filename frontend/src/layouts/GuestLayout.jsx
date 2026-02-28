import React from 'react'
import { Outlet, Navigate} from 'react-router-dom'

// context
import { useAuthContext } from '../context/AuthProvider'

// component
import Nav from '../components/Nav'



const GuestLayout = () => {

  const {isAuth} = useAuthContext();
  if(isAuth()){
    return <Navigate to="/"/>
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

export default GuestLayout