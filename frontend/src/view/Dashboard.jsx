import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'


import { IoChevronBackCircle, IoBookmark } from "react-icons/io5";

// components
import Player from "../components/dashboard/Player";
import Sidebar from "../components/dashboard/Sidebar";
import Songbar from "../components/dashboard/Songbar";



const Dashboard = () => {

  return (
    <div className='dashboard-page'>
      <div className="dashboard-page__content">
        <Sidebar/>

        <main className="dashboard-page__main">
        </main>
        
        <Songbar/>
      </div>
    </div>
  )
}

export default Dashboard



