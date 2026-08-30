import React from 'react'
import { IoChevronBackCircle } from "react-icons/io5";



const Sidebar = () => {
    return (
        <aside className="dashboard-page__aside dashboard-page__aside--sidebar">

            <button className='dashboard-page__aside-back'><IoChevronBackCircle /></button>
            <ul className='dashboard-page__aside-list'>
                <li><button className='dashboard-page__aside-list-item'>playlist</button></li>
                <li><button className='dashboard-page__aside-list-item'>album</button></li>
                <li><button className='dashboard-page__aside-list-item'>musicians</button></li>
            </ul>

            {/*     
            <div className='example'>
                <div className='example__count'><IoBookmark /></div>
                <div className='example__context'>
                    <h3 className='example__title'>hello</h3>
                    <p className='example__count'>boy</p>
                </div>
            </div> 
          */}

        </aside>
    )
}

export default Sidebar