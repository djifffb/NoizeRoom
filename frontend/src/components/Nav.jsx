import React from 'react'
import { useAuthContext } from '../context/AuthProvider'
import { Link } from 'react-router-dom';





const Nav = () => {
    const { isAuth, logout } = useAuthContext();
    return (
        
        <nav className='nav '>
            <div>
                <h1 className='nav__title'><Link to="/">NoizeRoom</Link></h1>
            </div>
            <ul className='nav__body'>
                {
                    isAuth() ? (
                        <li>
                            <button onClick={ logout } className='nav__button'>logout</button>
                        </li>
                    ) : (     
                        <li className='nav__auth'>
                            <Link to="/register">sing up</Link> 
                            <Link to="/login" className='nav__button'>sing in</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Nav