import { createBrowserRouter } from "react-router-dom";


// context
import { useAuthContext } from './context/AuthProvider'

// layouts
import GuestLayout from './layouts/GuestLayout'
import UserLayout from './layouts/UserLayout'

// pages
import Welcome from "./view/Welcome";
import Login from "./view/auth/Login";
import Register from "./view/auth/Register";

import Dashboard from "./view/Dashboard";
import Profile from "./view/Profile";










const MainPage = () => { 
    const { isAuth } = useAuthContext(); 
    return isAuth() ? <Dashboard/> : <Welcome/>; 
} 


const router = createBrowserRouter([

    {
        path : '/',
        element : <MainPage/>
    },


    
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '/user',
                element: <Profile/>
            }
        ]
    },


    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            }
        ]
    },

]);

export default router;